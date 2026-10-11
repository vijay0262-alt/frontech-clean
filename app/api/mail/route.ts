import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string {
  return String(value ?? "")
    .trim()
    .slice(0, 5000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:10px 14px;background:#f0f4ff;font-weight:600;color:#1a1a2e;width:160px;border-bottom:1px solid #dde4f0;">${label}</td>
    <td style="padding:10px 14px;color:#1a1a2e;border-bottom:1px solid #dde4f0;">${value}</td>
  </tr>`;
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      data = (await request.json()) as Record<string, unknown>;
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }
  } catch {
    return NextResponse.json({ success: false, message: "Invalid submission." }, { status: 400 });
  }

  const type = clean(data._type) === "booking" ? "booking" : "contact";
  const name = clean(data.name);
  const email = clean(data.email);
  const phone = clean(data.phone);

  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please provide your name and a valid email address." },
      { status: 400 }
    );
  }

  const { RESEND_API_KEY, MAIL_TO, MAIL_CC, RESEND_FROM } = process.env;
  if (!RESEND_API_KEY) {
    console.error("[api/mail] Missing RESEND_API_KEY env var.");
    return NextResponse.json(
      { success: false, message: "The form is not configured yet. Please call us directly." },
      { status: 500 }
    );
  }

  // frontechsecurity.com is verified in Resend — send from the verified domain.
  // Override with RESEND_FROM if a different sender address is needed.
  const to = MAIL_TO || "info@frontechsecurity.com";
  const cc = MAIL_CC || "vijay0262@gmail.com";
  const from = RESEND_FROM || "no-reply@frontechsecurity.com";

  const service = clean(data.service) || (type === "booking" ? "Service Request" : "Inquiry");
  const subject =
    type === "booking"
      ? `[NEW BOOKING] ${service} - ${name}`
      : `[NEW CONTACT] ${service} - ${name}`;

  const rows =
    type === "booking"
      ? [
          row("Service", service),
          row("Device Type", clean(data.deviceType)),
          row("Full Name", name),
          row("Phone", phone),
          row("Email", email),
          row("Street Address", clean(data.address)),
          row("City", clean(data.city)),
          row("State / Province", clean(data.state)),
          row("ZIP / Postal", clean(data.zip)),
          row("Preferred Date", clean(data.date)),
          row("Preferred Time", clean(data.time)),
          row("Notes", clean(data.notes)),
        ]
      : [
          row("Full Name", name),
          row("Phone", phone),
          row("Email", email),
          row("Service", service),
          row("Message", clean(data.message).replace(/\n/g, "<br>")),
        ];

  const phoneClean = phone.replace(/\D/g, "");
  const badge = type === "booking" ? "#1d6ef5" : "#7c3aed";
  const typeLabel = type === "booking" ? "NEW BOOKING REQUEST" : "NEW CONTACT FORM SUBMISSION";
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  });

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#f5f7fc;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fc;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:${badge};padding:28px 32px;">
            <p style="margin:0 0 4px 0;color:rgba(255,255,255,0.75);font-size:11px;letter-spacing:2px;text-transform:uppercase;">${typeLabel}</p>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${subject}</h1>
            <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.75);font-size:13px;">${submittedAt} ET</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #dde4f0;">
              ${rows.join("")}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px 32px;">
            <p style="margin:0 0 12px;color:#4b5563;font-size:13px;">Reply directly to this email to respond to the customer.</p>
            ${phoneClean ? `<a href="tel:+1${phoneClean}" style="display:inline-block;background:${badge};color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 24px;border-radius:8px;">Call Customer Now</a>` : ""}
          </td>
        </tr>
        <tr>
          <td style="background:#f0f4ff;padding:16px 32px;border-top:1px solid #dde4f0;">
            <p style="margin:0;color:#9ca3af;font-size:11px;text-align:center;">FrontechSecurity &bull; 7430 Pasito Ave, Rancho Cucamonga, CA 91730 &bull; +1 (844) 966-7866 &bull; frontechsecurity.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = `${typeLabel}
${subject}
Submitted: ${submittedAt} ET

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
${type === "booking" ? `Address: ${clean(data.address)}, ${clean(data.city)}, ${clean(data.state)} ${clean(data.zip)}
Date/Time: ${clean(data.date)} ${clean(data.time)}
Notes: ${clean(data.notes)}` : `Message: ${clean(data.message)}`}`;

  try {
    const resend = new Resend(RESEND_API_KEY);
    const toList = to.split(",").map((e) => e.trim()).filter(Boolean);
    const ccList = cc.split(",").map((e) => e.trim()).filter(Boolean);

    const { error } = await resend.emails.send({
      from: `FrontechSecurity Website <${from}>`,
      to: toList,
      ...(ccList.length ? { cc: ccList } : {}),
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error(
        "[api/mail] Resend rejected the email:",
        JSON.stringify({ name: error.name, message: error.message })
      );
      return NextResponse.json(
        { success: false, message: "Could not send your request right now. Please call us." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("[api/mail] Failed to send email:", err);
    return NextResponse.json(
      { success: false, message: "Could not send your request right now. Please call us." },
      { status: 500 }
    );
  }
}
<?php
/**
 * FrontechSecurity — Universal Mail Handler
 * Accepts JSON or form-data POST, sends to both admin addresses.
 * Compatible with any shared PHP hosting (no SMTP library required).
 */

$allowed = 'https://frontechsecurity.com';
$origin  = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $allowed || strpos($origin, 'localhost') !== false) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Parse JSON or form-data
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) {
    $data = $_POST;
}

// Sanitize helper
function clean($val) {
    return htmlspecialchars(strip_tags(trim((string)($val ?? ''))), ENT_QUOTES, 'UTF-8');
}

$type = clean($data['_type'] ?? 'contact'); // 'contact' or 'booking'

// Recipients
$recipients = ['vijay0262@gmail.com', 'info@frontechsecurity.com'];
$from_name    = 'FrontechSecurity Website';
$from_email   = 'no-reply@frontechsecurity.com';
$reply_to     = clean($data['email'] ?? '');
$reply_header = $reply_to ? "Reply-To: {$reply_to}\r\n" : '';
$headers      = "MIME-Version: 1.0\r\n"
              . "Content-Type: text/html; charset=UTF-8\r\n"
              . "From: {$from_name} <{$from_email}>\r\n"
              . $reply_header
              . "X-Mailer: PHP/" . phpversion();

// ── BUILD EMAIL BODY ────────────────────────────────────────────────
if ($type === 'booking') {
    $subject = '[NEW BOOKING] ' . clean($data['service'] ?? 'Service Request') . ' — ' . clean($data['name'] ?? 'Unknown');

    $rows = [
        'Service'          => clean($data['service'] ?? ''),
        'Plan'             => clean($data['plan'] ?? ''),
        'Full Name'        => clean($data['name'] ?? ''),
        'Phone'            => clean($data['phone'] ?? ''),
        'Email'            => clean($data['email'] ?? ''),
        'Street Address'   => clean($data['address'] ?? ''),
        'City'             => clean($data['city'] ?? ''),
        'State / Province' => clean($data['state'] ?? ''),
        'ZIP / Postal'     => clean($data['zip'] ?? ''),
        'Preferred Date'   => clean($data['date'] ?? ''),
        'Preferred Time'   => clean($data['time'] ?? ''),
        'Notes'            => clean($data['notes'] ?? ''),
    ];
} else {
    $subject = '[NEW CONTACT] ' . clean($data['service'] ?? 'Inquiry') . ' — ' . clean($data['name'] ?? 'Unknown');

    $rows = [
        'Full Name'    => clean($data['name'] ?? ''),
        'Phone'        => clean($data['phone'] ?? ''),
        'Email'        => clean($data['email'] ?? ''),
        'Service'      => clean($data['service'] ?? ''),
        'Message'      => nl2br(clean($data['message'] ?? '')),
    ];
}

// Build HTML table rows
$tableRows = '';
foreach ($rows as $label => $value) {
    if ($value === '') continue;
    $tableRows .= "<tr>
        <td style='padding:10px 14px;background:#f0f4ff;font-weight:600;color:#1a1a2e;width:160px;border-bottom:1px solid #dde4f0;'>{$label}</td>
        <td style='padding:10px 14px;color:#1a1a2e;border-bottom:1px solid #dde4f0;'>{$value}</td>
    </tr>";
}

$phone_clean  = preg_replace('/[^0-9]/', '', $data['phone'] ?? '');
$submitted_at = date('l, F j Y \a\t g:i A T');
$type_label   = $type === 'booking' ? 'NEW BOOKING REQUEST' : 'NEW CONTACT FORM SUBMISSION';
$badge_color  = $type === 'booking' ? '#1d6ef5' : '#7c3aed';

$body = <<<HTML
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>{$subject}</title></head>
<body style="margin:0;padding:0;background:#f5f7fc;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fc;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:{$badge_color};padding:28px 32px;">
            <p style="margin:0 0 4px 0;color:rgba(255,255,255,0.75);font-size:11px;letter-spacing:2px;text-transform:uppercase;">{$type_label}</p>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">{$subject}</h1>
            <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.75);font-size:13px;">{$submitted_at}</p>
          </td>
        </tr>

        <!-- Details table -->
        <tr>
          <td style="padding:24px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #dde4f0;">
              {$tableRows}
            </table>
          </td>
        </tr>

        <!-- Action -->
        <tr>
          <td style="padding:20px 32px 32px;">
            <p style="margin:0 0 12px;color:#4b5563;font-size:13px;">Reply directly to this email to respond to the customer.</p>
            <a href="tel:+1{$phone_clean}" style="display:inline-block;background:{$badge_color};color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 24px;border-radius:8px;">Call Customer Now</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f0f4ff;padding:16px 32px;border-top:1px solid #dde4f0;">
            <p style="margin:0;color:#9ca3af;font-size:11px;text-align:center;">FrontechSecurity &bull; 7430 Pasito Ave, Rancho Cucamonga, CA 91730 &bull; +1 (888) 400-3290 &bull; frontechsecurity.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;

// ── SEND TO ALL RECIPIENTS ───────────────────────────────────────────
$all_sent = true;
foreach ($recipients as $to) {
    $sent = mail($to, $subject, $body, $headers);
    if (!$sent) $all_sent = false;
}

if ($all_sent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail delivery failed.']);
}

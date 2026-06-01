import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, address, city, state, zip, date, time, notes, deviceType, service } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Booking Request

Service: ${service || 'N/A'}
Device Type: ${deviceType || 'N/A'}

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address || 'N/A'}
City: ${city || 'N/A'}
State: ${state || 'N/A'}
ZIP: ${zip || 'N/A'}

Appointment Details:
Date: ${date || 'N/A'}
Time: ${time || 'N/A'}
Notes: ${notes || 'N/A'}
    `.trim()

    // Configure email transporter
    // You need to set up SMTP credentials in environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'bookings@frontechsecurity.com',
      to: 'support@frontechsecurity.com',
      cc: 'vijay0262@gmail.com',
      subject: `New Booking Request - ${name}`,
      text: emailContent,
    })

    console.log('Email sent successfully to support@frontechsecurity.com and cc to vijay0262@gmail.com')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Failed to send booking request' }, { status: 500 })
  }
}

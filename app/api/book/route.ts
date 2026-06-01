import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, address, city, state, zip, date, time, notes, deviceType, service } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log the booking data for debugging
    console.log('Booking received:', {
      service,
      deviceType,
      name,
      email,
      phone,
      address,
      city,
      state,
      zip,
      date,
      time,
      notes,
    })

    // For now, just return success
    // The PHP script (mail.php) in the public folder will handle email sending
    // when the form is deployed to a PHP hosting environment
    return NextResponse.json({ success: true, message: 'Booking submitted successfully' })
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json({ error: 'Failed to process booking request' }, { status: 500 })
  }
}

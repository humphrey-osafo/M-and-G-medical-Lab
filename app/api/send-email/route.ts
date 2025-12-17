
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    
  try {
    const { name, phone, email, service, date, time, additionalMessage } = await request.json();


    // Validate required fields
    if (!name || !phone || !service || !date || !time) {
      console.error('Missing required fields');
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }



    // Log the environment variables being used (for debugging)
    console.log('Using email configuration:', {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      user: process.env.EMAIL_SERVER_USER,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
    });

    // Create a transporter object using the environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true, // Use true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });



    const emailHtml = `
      <h1>New Appointment Booking Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Additional Message:</strong> ${additionalMessage || 'None'}</p>
      <hr>
      <p>This booking was submitted on ${new Date().toLocaleString()}</p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'New Appointment Booking Request from Website',
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully',
    });

  } catch (error) {
    console.error('Fatal error in send-email route:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to send email due to a server error.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}


import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, service, date, time, additionalMessage } = await request.json();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true, // true for 465, false for other ports
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

    // Set up email data
    const mailOptions = {
      from: `"MG Medical Booking" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Appointment Booking Request',
      html: emailHtml,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}

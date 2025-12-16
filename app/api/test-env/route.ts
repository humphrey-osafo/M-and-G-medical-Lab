import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    env: {
      EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
      EMAIL_TO: process.env.EMAIL_TO,
      EMAIL_FROM: process.env.EMAIL_FROM,
      isUsingDotEnv: process.env.EMAIL_SERVER_USER === 'mglabbookings@gmail.com'
    }
  });
}

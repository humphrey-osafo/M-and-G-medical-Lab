import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD ? '***' : undefined,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_TO: process.env.EMAIL_TO,
  });
}

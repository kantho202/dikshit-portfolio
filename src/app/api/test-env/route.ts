import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasAccessKey: !!process.env.WEB3FORMS_ACCESS_KEY,
    accessKeyLength: process.env.WEB3FORMS_ACCESS_KEY?.length || 0,
  });
}

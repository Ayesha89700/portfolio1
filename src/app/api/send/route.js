import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      text: `
        ${subject}
        
        Thank you for contacting us!
        New message submitted:
        
        ${message}
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: error.message });
  }
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { FreelanceInquiry } from 'emails/freelance-inquiry';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company, projectDetails } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Freelance Enquiry <contact@contact.ram.codes>',
      to: ['hi@ram.codes', 'ramshankarcodes@gmail.com'],
      subject: `Enquiry from ${name}`,
      react: FreelanceInquiry({
        name: name,
        email: email,
        company: company,
        projectDetails: projectDetails,
      }) as React.ReactElement,
    });
    if (error) {
      return NextResponse.json({ error });
    }
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

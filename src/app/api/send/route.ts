import { NextResponse } from "next/server";
import { Resend } from "resend";
import { FreelanceInquiry } from "emails/freelance-inquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  //   const { budget, inquiry, name, email, inquiryType, workType, availability } =
  //     await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Hello <contact@contact.ram.codes>",
      to: ["hi@ram.codes", "ramshankarcodes@gmail.com"],
      subject: "Hello world",
      react: FreelanceInquiry({
        name: "example name",
        email: "acme@example.com",
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

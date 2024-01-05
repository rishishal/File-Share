import { NextResponse, NextRequest } from "next/server";
import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    console.log("Response", response);
    const details = response.data;
    const { emailToSend, userName, fileName, fileSize, fileType, shortUrl } =
      details;
    const data = await resend.emails.send({
      from: "Rishi@resend.dev",
      to: ["rishi.kumar01609@gmail.com"],
      subject: details?.userName + " Share file with You",
      react: EmailTemplate({
        emailToSend,
        userName,
        fileName,
        fileSize,
        fileType,
        shortUrl,
      }),
    } as any); // Type assertion to 'CreateEmailOptions' need to fix in futcher
    console.log("Details", details);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

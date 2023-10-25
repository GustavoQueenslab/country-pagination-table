import { NextResponse } from "next/server";
import { ServerClient } from "postmark";

const postmarkClient = new ServerClient(process.env.POSTMARK_TOKEN!);

export async function POST(request: Request) {
  const email = JSON.parse(request.headers.get("body")!);

  const data = {
    From: "info@queenslab.se",
    To: "contact@innofuseblue.com",
    Subject: email.name,
    TextBody: email.message,
    HtmlBody: `<html><p style="margin-top:4">Name: ${email.name}</p><p style="margin-top:4">Company: ${email.company}</p><p style="margin-top:4">Email: ${email.email}</p><p style="margin-top:4">${email.message}</p></html>`,
    MessageStream: "outbound",
  };
  await postmarkClient.sendEmail(data);

  return NextResponse.json({ message: "Success" }, { status: 200 });
}

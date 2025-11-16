import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { fileUrl } = await req.json();

  console.log("Backend received resume URL:", fileUrl);

  // Save for later processing or debugging
  // TODO: call AI / save to DB / create graph etc.

  return NextResponse.json({
    message: "File URL received successfully",
    fileUrl,
  });
}

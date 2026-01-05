import ImageCompressor from "@/utils/compress";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const formData = await req.formData();
  const file = formData.get("image"); // File object from frontend

  if (!file) return NextResponse.json({ status: 400, error: "No file" });

  const buffer = Buffer.from(await file.arrayBuffer());

  const savedImage = await ImageCompressor(buffer, "output"); // name dynamic

  return NextResponse.json({ status: 200, savedImage });
};

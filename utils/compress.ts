import path from "path";
import fs from "fs";
import sharp from "sharp";

export default async function ImageCompressor(BufferImage, fileName) {
  const dirPath = path.join(process.cwd(), "/public/images");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const uploadDir = path.join(dirPath, `${fileName}.webp`);

  await sharp(BufferImage)
    .resize({
      width: 1200,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 70 })
    .toFile(uploadDir);

  return `${fileName}.webp`;
}

import main from "@/utils/gemini";

export const POST = async (req) => {
  const formData = await req.formData(); // ✅ await
  const image = formData.get("file"); // ✅ same key as frontend

  if (!image) {
    return Response.json({ error: "No image" }, { status: 400 });
  }

  const result = await main({ image });

  return Response.json(result);
};

"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Homee = () => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState("");

  const handleChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    const data = await fetch("/api/ImageCompres", {
      method: "POST",
      body: formData,
    });

    const res = await data.json();
    setPreview(res.savedImage);
  };

  const handleClick = () => {
    const a = document.createElement("a");
    a.href = `/images/${preview}`;
    a.download = preview;
    a.click();
  };

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/20 rounded-full blur-[150px]"
        style={{ x: "-50%", y: "-50%" }}
      />

      <motion.div
        animate={{ scale: [1, 1.5, 1], x: [0, -80, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]"
      />

      {/* Content */}
      <section className="relative z-10 h-full flex items-center px-8">
        {/* LEFT */}
        <div className="w-1/2 flex flex-col justify-center gap-6">
          <div className="flex px-32">
            <img
              src="/abhi.png"
              alt="Background removal example"
              className="w-40 h-auto"
            />
          </div>

          <h1 className="max-w-xl text-[4.5rem] leading-[4.4rem] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Remove Image <br /> Background
          </h1>

          <p className="text-lg text-gray-400 max-w-md">
            100% free image background remover. No signup. No watermark.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 flex justify-center">
          <div
            onClick={() => fileRef.current.click()}
            className="cursor-pointer w-[360px] h-[220px] border-2 border-dashed border-gray-600 rounded-2xl flex flex-col items-center justify-center gap-4 bg-white/5 hover:bg-white/10 transition"
          >
            <input
              ref={fileRef}
              type="file"
              hidden
              accept="image/*"
              onChange={handleChange}
            />

            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl">
              ⬆
            </div>

            <p className="text-white font-semibold">Upload Image</p>
            <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
          </div>
        </div>

        {preview && (
          <div>
            <img
              src={`/images/${preview}`}
              className="object-cover h-50 w-50"
            />
            <button
              className="p-3 bg-blue-500 rounded-xl text-white"
              onClick={handleClick}
            >
              Download
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Homee;

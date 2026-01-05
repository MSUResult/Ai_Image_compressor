"use client";
import React, { useRef, useState } from "react";

const Page = () => {
  const inputRef = useRef(null);

  const [quiz, setQuiz] = useState([]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    const sizeKB = (file.size / 1024).toFixed(2);
    console.log(`${file.name} - ${sizeMB} MB - ${sizeKB} KB`);
    if (file.size > 5 * 1024 * 1024) {
      console.log("Bete Sudhar Ja"); // limit message
    }
    const formdtaa = new FormData();

    
const data = await fetch("/api/quizGemini", {
  method: "POST",
  body: formData, // ❌ no headers
});

    const res = await data.json();
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div
        className="border border-dotted p-20 rounded-2xl flex items-center justify-center cursor-pointer"
        onClick={() => inputRef.current && inputRef.current.click()}
      >
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleChange}
        />
        <span className="bg-blue-500 p-4 text-xl rounded-xl text-white">
          Upload here
        </span>
      </div>
    </main>
  );
};

export default Page;

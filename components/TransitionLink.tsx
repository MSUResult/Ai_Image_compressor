"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    const body = document.querySelector("body");

    // 1. Start the Exit Animation
    body?.classList.add("page-transition");

    // 2. Wait for the animation to finish (300ms), then switch pages
    setTimeout(() => {
      router.push(href);
    }, 300); // Matches CSS transition-duration

    // 3. Wait for the Enter Animation (another 300ms)
    setTimeout(() => {
      body?.classList.remove("page-transition");
    }, 600);
  };

  return (
    <Link onClick={handleClick} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;

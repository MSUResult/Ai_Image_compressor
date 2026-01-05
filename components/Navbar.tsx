"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Barcode } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import TransitionLink from "./TransitionLink";

// Navigation links
const Navigation = [
  { heading: "RemoveBG", href: "/", primary: true },
  { heading: "Resize", href: "/resize" },
  { heading: "Format", href: "/format" },
  { heading: "AI Quiz", href: "/quiz" },
  { heading: "Analyze", href: "/analyze" },
];

// Auth links (login/signup)
const AuthLinks = [
  { heading: "Login", href: "/login" },
  { heading: "Sign up", href: "/signup" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu state

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between h-16 px-6">
        {/* ----------------- DESKTOP LINKS ----------------- */}
        <div className="hidden sm:flex items-center gap-6">
          {Navigation.map(({ heading, href, primary }) => (
            <TransitionLink
              key={href}
              href={href}
              className={
                primary
                  ? "rounded-lg bg-black px-4 py-2 text-white font-semibold text-sm transition hover:scale-105"
                  : "text-gray-600 hover:text-black font-medium text-sm transition"
              }
            >
              {heading}
            </TransitionLink>
          ))}
        </div>

        {/* ----------------- DESKTOP AUTH LINKS ----------------- */}
        <div className="hidden sm:flex items-center gap-4">
          {AuthLinks.map(({ heading, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-600 hover:text-black font-medium text-sm transition"
            >
              {heading}
            </Link>
          ))}
        </div>

        {/* ----------------- MOBILE HEADER ----------------- */}
        <div className="flex sm:hidden items-center justify-between w-full">
          {/* Logo / Brand could go here */}
          <p className="font-bold text-lg">Logo</p>

          {/* Hamburger / Menu Icon */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-black text-white"
          >
            <Barcode size={20} />
          </button>
        </div>
      </div>

      {/* ----------------- MOBILE MENU ----------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {Navigation.map(({ heading, href, primary }) => (
                <TransitionLink
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)} // Close menu on click
                  className={
                    primary
                      ? "rounded-lg bg-black px-4 py-2 text-white font-semibold text-sm"
                      : "text-gray-600 hover:text-black font-medium text-sm"
                  }
                >
                  {heading}
                </TransitionLink>
              ))}

              {/* Mobile Auth Links */}
              <div className="flex flex-col gap-2 mt-2">
                {AuthLinks.map(({ heading, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-gray-600 hover:text-black font-medium text-sm"
                  >
                    {heading}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

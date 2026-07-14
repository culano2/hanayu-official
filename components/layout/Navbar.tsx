"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import DesktopNav from "@/components/navigation/DesktopNav";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#031320]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
        <Logo name="HANAYU" origin="花嶼海洋" />

          <span className="hidden text-lg font-light tracking-[0.28em] text-white md:block">
            HANAYU
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Right Side (預留功能) */}
        <div className="hidden items-center gap-6 lg:flex">
          <button
            className="text-sm tracking-[0.2em] text-white/60 transition hover:text-white"
            type="button"
          >
            EN
          </button>

          <button
            className="text-white/60 transition hover:text-white"
            type="button"
            aria-label="Search (Coming Soon)"
          >
            ○
          </button>
        </div>
      </div>
    </header>
  );
}
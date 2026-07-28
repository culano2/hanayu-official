"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 motion-reduce:transition-none ${
        scrolled
          ? "border-b border-white/10 bg-[#031320]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="HANAYU 花嶼海洋首頁"
          className="
            flex items-center gap-3
            rounded-sm outline-none
            transition-opacity duration-300
            hover:opacity-85
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#C89A4B]
            motion-reduce:transition-none
          "
        >
          <Logo name="HANAYU" origin="花嶼海洋" />

          <span className="hidden text-lg font-light tracking-[0.28em] text-white md:block">
            HANAYU
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Desktop Right Side (預留功能) */}
        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            aria-label="切換為英文版，功能即將推出"
            className="
              rounded-sm text-sm tracking-[0.2em] text-white/60
              outline-none
              transition-colors duration-300
              hover:text-white
              focus-visible:text-white
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#C89A4B]
              motion-reduce:transition-none
            "
          >
            EN
          </button>

          <button
            type="button"
            aria-label="搜尋，功能即將推出"
            className="
              rounded-sm text-white/60
              outline-none
              transition-colors duration-300
              hover:text-white
              focus-visible:text-white
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#C89A4B]
              motion-reduce:transition-none
            "
          >
            <span aria-hidden="true">○</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}

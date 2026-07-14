"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "關閉選單" : "開啟選單"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="relative z-[70] flex h-11 w-11 items-center justify-center"
      >
        <span className="sr-only">
          {open ? "關閉選單" : "開啟選單"}
        </span>

        <span
          className={`absolute h-px w-6 bg-white transition duration-300 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />

        <span
          className={`absolute h-px w-6 bg-white transition duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          className={`absolute h-px w-6 bg-white transition duration-300 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-[#031320] transition-all duration-500 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav
          aria-label="手機主要導覽"
          className="flex min-h-screen flex-col justify-center px-8 py-24"
        >
          <p className="mb-10 text-xs tracking-[0.35em] text-[#C89A4B]">
            HANAYU
          </p>

          <div className="flex flex-col gap-6">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`text-3xl font-light tracking-[0.06em] transition-colors duration-300 ${
                    active
                      ? "text-[#C89A4B]"
                      : "text-white hover:text-[#C89A4B]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-sm leading-7 text-white/50">
              來自花嶼，忠於海洋。
              <br />
              把海鮮，做成精品。
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={open ? "關閉選單" : "開啟選單"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="
          relative z-[70] flex h-11 w-11 items-center justify-center
          rounded-sm outline-none
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#C89A4B]
        "
      >
        <span
          aria-hidden="true"
          className={`absolute h-px w-6 bg-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />

        <span
          aria-hidden="true"
          className={`absolute h-px w-6 bg-white transition-opacity duration-300 ease-out motion-reduce:transition-none ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          aria-hidden="true"
          className={`absolute h-px w-6 bg-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-[#031320] transition-[opacity,transform,visibility] duration-500 ease-out motion-reduce:transition-none ${
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
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  tabIndex={open ? 0 : -1}
                  className={`
                    w-fit rounded-sm text-3xl font-light tracking-[0.06em]
                    outline-none
                    transition-colors duration-300 ease-out
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#C89A4B]
                    motion-reduce:transition-none
                    ${
                      active
                        ? "text-[#C89A4B]"
                        : "text-white hover:text-[#C89A4B] focus-visible:text-[#C89A4B]"
                    }
                  `}
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

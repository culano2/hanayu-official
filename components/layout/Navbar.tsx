"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import { brand } from "@/data/brand";
import { primaryNavigation } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#031320]/68 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
      <Container className="flex h-24 items-center justify-between">
        <Link
          href={brand.homeHref}
          aria-label={`${brand.name} home`}
          className="flex flex-col leading-none transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
          onClick={closeMenu}
        >
          <span className="text-xl font-semibold tracking-[0.28em] text-white sm:text-2xl">
            {brand.name}
          </span>
          <span className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.32em] text-[#C89A4B]">
            {brand.origin}
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-10 text-sm font-semibold tracking-[0.14em] text-white/70 lg:flex"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#C89A4B] after:transition-all after:duration-300 hover:text-white hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <PremiumButton href="#contact" size="sm" variant="secondary">
            Reserve
          </PremiumButton>
        </div>

        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center border border-white/18 bg-white/[0.03] text-white transition-colors duration-300 hover:border-[#C89A4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B] lg:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-px bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#031320]/96 transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-5">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-4 text-lg font-semibold tracking-[0.08em] text-white/82 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <PremiumButton
            href="#contact"
            onClick={closeMenu}
            className="mt-5 w-full"
            size="lg"
            variant="primary"
          >
            Reserve
          </PremiumButton>
        </Container>
      </div>
    </header>
  );
}

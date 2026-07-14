"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
};

export default function NavItem({
  href,
  label,
}: NavItemProps) {
  const pathname = usePathname();

  const active =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="group relative px-2 py-2 text-sm tracking-[0.18em] uppercase transition-colors duration-300"
    >
      <span
        className={
          active
            ? "text-[#C89A4B]"
            : "text-white/80 group-hover:text-white"
        }
      >
        {label}
      </span>

      <span
        className={`absolute -bottom-1 left-0 h-[2px] bg-[#C89A4B] transition-all duration-300 ${
          active
            ? "w-full"
            : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
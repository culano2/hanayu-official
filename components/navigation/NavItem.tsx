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
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="
        group relative inline-flex px-2 py-2
        outline-none
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#C89A4B]
      "
    >
      <span
        className={`
          text-sm uppercase tracking-[0.18em]
          transition-colors duration-300 ease-out
          motion-reduce:transition-none
          ${
            active
              ? "text-[#C89A4B]"
              : "text-white/80 group-hover:text-white group-focus-visible:text-white"
          }
        `}
      >
        {label}
      </span>

      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute -bottom-1 left-0
          h-[2px] w-full origin-left bg-[#C89A4B]
          transition-transform duration-300 ease-out
          motion-reduce:transition-none
          ${
            active
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
          }
        `}
      />
    </Link>
  );
}

import Link from "next/link";

const navItems: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#story", label: "Story" },
  { href: "#catch", label: "Today's Catch" },
  { href: "#standard", label: "Standard" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#031320]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="HANAYU home"
          className="group flex flex-col leading-none"
        >
          <span className="text-xl font-semibold tracking-[0.28em] text-white sm:text-2xl">
            HANAYU
          </span>
          <span className="mt-2 text-[0.65rem] font-medium tracking-[0.32em] text-[#C89A4B]">
            HUAYU ISLAND
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-medium tracking-[0.12em] text-white/72 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="border border-[#C89A4B]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F6F3] transition-colors duration-200 hover:border-[#C89A4B] hover:bg-[#C89A4B] hover:text-[#031320] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B] sm:px-5"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}

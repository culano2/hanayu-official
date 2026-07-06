import Link from "next/link";

const footerLinks: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#story", label: "Story" },
  { href: "#catch", label: "Catch" },
  { href: "#standard", label: "Standard" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#020B12]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <p className="text-2xl font-semibold tracking-[0.28em] text-white">
            HANAYU
          </p>
          <p className="mt-4 max-w-xl leading-7 text-white/62">
            Premium seafood from Huayu Island for chefs, retailers, and guests
            who value origin, handling, and restraint.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer navigation" className="grid gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/68 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <address className="not-italic text-sm leading-7 text-white/68">
            <p>Huayu Island, Penghu</p>
            <a
              href="mailto:hello@hanayu.example"
              className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89A4B]"
            >
              hello@hanayu.example
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}

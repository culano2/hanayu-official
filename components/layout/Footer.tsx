import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { footerNavigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer
      id={brand.footer.id}
      className="border-t border-white/10 bg-[#020B12]"
    >
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Badge>Commercial Supply</Badge>

            <p className="mt-5 text-3xl font-semibold tracking-[0.26em] text-white">
              {brand.name}
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
              {brand.footer.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Company
            </h2>

            <address className="mt-5 space-y-2 not-italic text-sm leading-7 text-white/64">
              {brand.footer.company.map((line) => (
                <p key={line}>{line}</p>
              ))}

              <a
                href={`mailto:${brand.footer.contactEmail}`}
                className="
                  inline-flex rounded-sm outline-none
                  transition-colors duration-300 ease-out
                  hover:text-white
                  focus-visible:text-white
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#C89A4B]
                  motion-reduce:transition-none
                "
              >
                {brand.footer.contactEmail}
              </a>
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <nav aria-label="頁尾導覽">
              <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Explore
              </h2>

              <div className="mt-5 grid gap-3">
                {footerNavigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      w-fit rounded-sm text-sm text-white/64 outline-none
                      transition-colors duration-300 ease-out
                      hover:text-white
                      focus-visible:text-white
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#C89A4B]
                      motion-reduce:transition-none
                    "
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <nav aria-label="社群連結">
              <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                Social
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {brand.footer.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={`${brand.name} ${link.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-sm border border-white/12 px-3 py-2
                      text-xs font-bold uppercase tracking-[0.16em]
                      text-white/66 outline-none
                      transition-colors duration-300 ease-out
                      hover:border-[#C89A4B]
                      hover:text-white
                      focus-visible:border-[#C89A4B]
                      focus-visible:text-white
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#C89A4B]
                      motion-reduce:transition-none
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>{brand.name} Official Website</p>
          <p>Origin-led seafood supply</p>
        </div>
      </Container>
    </footer>
  );
}

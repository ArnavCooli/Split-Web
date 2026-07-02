import { footerLinks, site } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-footer text-white container-px"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-sm space-y-3">
            <Logo />
            <p className="text-sm text-white/60">
              Built for roommates, couples, and friends everywhere.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="lab-label text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="lab-label text-white/45">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="lab-label flex items-center gap-2 text-white/45">
            <span className="lab-dot" aria-hidden />
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

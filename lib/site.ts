/** Central place for brand copy + nav so sections stay declarative. */

export const site = {
  name: "Split",
  tagline: "Shared expenses, settled effortlessly.",
  description:
    "Split automatically itemizes receipts, handles uneven expenses, and tells everyone exactly who owes what — no spreadsheets, no awkward reminders.",
  url: "https://split.app",
  email: "hello@split.app",
} as const;

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

export const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "Contact", href: "#contact" },
  { label: "Terms", href: "#terms" },
] as const;

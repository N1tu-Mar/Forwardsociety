/**
 * HOW TO EDIT
 * `primaryNav` is the header. Keep it to six items or fewer or it wraps on
 * laptop widths. `footerNav` may be longer.
 * The apply link is not in either list — it is handled separately because it
 * is a button, not a nav item.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Projects", href: "/projects" },
  { label: "Speakers", href: "/speakers" },
  { label: "Team", href: "/team" },
  { label: "Join", href: "/join" },
] as const;

export const footerNav: readonly NavItem[] = [
  ...primaryNav,
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contact", href: "/contact" },
] as const;

"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { primaryNav } from "@/content/nav";
import { links } from "@/content/links";
import { isReal } from "@/lib/placeholder";
import { TodoChip } from "@/components/ui/TodoChip";

/**
 * Pages alternate ink and bone (the register flip). The header sits
 * transparently over whichever one it lands on, so it needs to know which.
 * Keep this in step with the background comment at the top of each page.
 */
const INK_ROUTES = ["/", "/program", "/speakers", "/join"];

function toneForPath(pathname: string): "light" | "dark" {
  const normalised =
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return INK_ROUTES.includes(normalised) ? "dark" : "light";
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Scroll state drives the apply link turning into a filled button past 80px.
  // window is read inside the effect only.
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 80);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    // Seeded on the next frame so the effect never sets state during its run.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Escape closes, body scroll locks, focus is trapped inside the panel.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const dark = toneForPath(pathname) === "dark";
  const navText = dark ? "text-bone/75 hover:text-bone" : "text-ash hover:text-ink";
  const applyResting = "text-scarlet";
  const applyScrolled = "bg-scarlet text-bone rounded-control";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? dark
            ? "bg-ink border-b border-bone/10"
            : "bg-bone border-b border-ink/10"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-6 md:py-7">
          <Link
            href="/"
            className="focus-visible:outline-scarlet focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="The Forward Society — home"
          >
            {/* md, not sm: at 24px the scarlet word clears the WCAG
                large-text contrast bar on an ink background. */}
            <Wordmark size="md" theme={dark ? "dark" : "light"} />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {primaryNav.map((item) => {
                const active = pathname === `${item.href}/` || pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`font-body text-eyebrow uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-scarlet ${
                        active ? (dark ? "text-bone" : "text-ink") : navText
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                {isReal(links.apply) ? (
                  <a
                    href={links.apply}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`font-body text-eyebrow uppercase px-4 py-2.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-scarlet ${
                      scrolled ? applyScrolled : applyResting
                    }`}
                  >
                    Apply
                  </a>
                ) : (
                  <TodoChip value={links.apply} />
                )}
              </li>
            </ul>
          </nav>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`font-body text-eyebrow uppercase focus-visible:outline-scarlet md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 ${
              dark ? "text-bone" : "text-ink"
            }`}
          >
            Menu
          </button>
        </div>
      </Container>

      {/* Full-screen overlay menu below 768px. */}
      <div
        ref={panelRef}
        id="mobile-menu"
        hidden={!menuOpen}
        className="bg-ink text-bone fixed inset-0 z-50 md:hidden"
      >
        <Container>
          <div className="flex items-center justify-between py-6">
            <Wordmark size="md" theme="dark" />
            <button
              type="button"
              onClick={closeMenu}
              className="font-body text-eyebrow text-bone focus-visible:outline-scarlet uppercase focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Close
            </button>
          </div>
          <nav aria-label="Primary, mobile" className="mt-10">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.href} className="border-bone/15 border-b">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-display-m focus-visible:outline-scarlet block py-5 italic focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {isReal(links.apply) ? (
            <a
              href={links.apply}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-scarlet text-bone rounded-control font-body text-eyebrow focus-visible:outline-scarlet mt-10 inline-flex px-6 py-3.5 uppercase focus-visible:outline-2 focus-visible:outline-offset-3"
            >
              Apply to join
            </a>
          ) : (
            <div className="mt-10">
              <TodoChip value={links.apply} />
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}

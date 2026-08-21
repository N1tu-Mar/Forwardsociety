import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { SectionRule } from "@/components/brand/SectionRule";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/ButtonLink";
import { TodoChip } from "@/components/ui/TodoChip";
import { footerNav } from "@/content/nav";
import { links, instagramHandle } from "@/content/links";
import { copy } from "@/content/copy";
import { isReal } from "@/lib/placeholder";

/** Always ink. The footer is the site's floor and does not follow the flip. */
export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <Container>
        <SectionRule position="top" />
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Wordmark size="md" theme="dark" />
            <p className="text-body text-ash-on-ink mt-6 max-w-[38ch]">
              {copy.overview}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4 md:col-start-7">
            <Eyebrow tone="dark">Pages</Eyebrow>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body text-ash-on-ink hover:text-bone focus-visible:outline-scarlet transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 md:col-start-11">
            <Eyebrow tone="dark">Contact</Eyebrow>
            <ul className="mt-5 space-y-3">
              <li>
                <TextLink href={links.instagram} tone="dark" className="text-body">
                  {instagramHandle}
                </TextLink>
              </li>
              <li>
                {isReal(links.email) ? (
                  <TextLink
                    href={`mailto:${links.email}`}
                    tone="dark"
                    className="text-body"
                  >
                    {links.email}
                  </TextLink>
                ) : (
                  <TodoChip value={links.email} />
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-bone/15 flex flex-col gap-2 border-t py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-ash-on-ink">{copy.footerMeta}</p>
          <p className="text-caption text-ash-on-ink">{copy.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}

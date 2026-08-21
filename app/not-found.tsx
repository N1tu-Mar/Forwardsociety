import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { SectionRule } from "@/components/brand/SectionRule";

// BACKGROUND INTENT: ink. A dead end is a change of register, and the flip is
// the honest way to mark it. No jokes.
export default function NotFound() {
  return (
    <div className="bg-ink text-bone flex min-h-screen flex-col justify-center">
      <Container>
        <SectionRule position="top" />
        <div className="py-section">
          <Wordmark size="md" theme="dark" />
          <p className="font-display font-extrabold text-display-l mt-12 max-w-[18ch]">
            This page does not exist.
          </p>
          <Link
            href="/"
            className="font-display text-eyebrow font-bold text-scarlet focus-visible:outline-scarlet mt-10 inline-block uppercase focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Go to the home page
          </Link>
        </div>
      </Container>
    </div>
  );
}

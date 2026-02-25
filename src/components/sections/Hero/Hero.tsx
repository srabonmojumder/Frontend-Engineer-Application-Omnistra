import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fc] to-white pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#3448FF]/[0.04] blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6ebf0] bg-white px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-[#6b7280]">
              Announcing our $35M Series A
            </span>
            <svg
              className="h-4 w-4 text-[#3448FF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#0a0a0a] sm:text-6xl lg:text-7xl">
            Win every
            <span className="bg-gradient-to-r from-[#3448FF] to-violet-500 bg-clip-text text-transparent">
              {" "}
              chargeback{" "}
            </span>
            dispute
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#6b7280]">
            The world&apos;s first fully-automated chargeback management
            platform. Prevent, fight, and analyze chargebacks effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="md" className="px-8 py-3 text-base">
              Start Free Trial
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="px-8 py-3 text-base"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

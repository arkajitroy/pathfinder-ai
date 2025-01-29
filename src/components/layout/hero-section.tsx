import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "../common/container";

export interface HeroProps {
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export function Hero({ title, description, primaryAction, secondaryAction }: HeroProps) {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      {/* Decorative blur effect */}
      <div className="absolute inset-x-0 -top-16 -z-10 overflow-hidden">
        <div className="absolute inset-0 h-[32rem] w-full bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance gradient-title font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-balance text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {primaryAction && (
              <Button asChild size="lg">
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
            )}
            {secondaryAction && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

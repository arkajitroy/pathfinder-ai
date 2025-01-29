import { Hero } from "@/components/layout/hero-section";

export default function Home() {
  return (
    <div>
      <Hero
        title="Build your next idea even faster"
        description="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
        primaryAction={{
          label: "Get Started",
          href: "/login",
        }}
        secondaryAction={{
          label: "Learn more",
          href: "/about",
        }}
      />
    </div>
  );
}

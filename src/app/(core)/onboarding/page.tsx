import React from "react";
import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/features/onboarding/server/action";
import OnboardingForm from "@/features/onboarding/components/onboarding-form";
import { industries } from "@/constants/industries";

export default async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) redirect("/dashboard");

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}

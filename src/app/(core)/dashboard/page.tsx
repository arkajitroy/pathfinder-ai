import React from "react";
import { redirect } from "next/navigation";

import { getIndustryInsights } from "@/features/insights/server/action";
import { getUserOnboardingStatus } from "@/features/onboarding/server/action";
import DashboardView from "@/features/dashboard/components/dashboard-view";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();
  if (!isOnboarded) redirect("/onboarding");

  const InsightsData = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashboardView insights={InsightsData} />
    </div>
  );
}

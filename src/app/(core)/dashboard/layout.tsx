import LoaderComponent from "@/components/misc/loader";
import React, { PropsWithChildren, Suspense } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <main className="px-5 py-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense fallback={<LoaderComponent />}>{children}</Suspense>
    </main>
  );
}

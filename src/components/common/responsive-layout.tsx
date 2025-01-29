import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ResponsiveLayout({ children, className }: LayoutProps) {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <main className={cn("flex-1", className)}>{children}</main>
    </div>
  );
}

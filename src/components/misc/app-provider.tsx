import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <div>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </div>
  );
}

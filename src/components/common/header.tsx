import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ChevronDown, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { growthTools } from "@/constants/nav-items";
import { checkUser } from "@/services/check-user";

export default async function Header() {
  const signedUser = await checkUser();

  return (
    <header className="px-10 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center justify-between">
        {/* Brand logo/name */}
        <Link href="/" className="flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Pathmorph</span>
        </Link>

        {/* Navigation items */}
        {signedUser && (
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/insights">Industry Insights</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="sm" className="gap-2">
                  Growth Tools
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[240px]">
                {growthTools.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="flex flex-col items-start gap-1 p-4 cursor-pointer"
                      style={{ alignItems: "start" }}
                    >
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="line-clamp-1 text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Auth button */}
        <div className="flex items-center">
          {signedUser ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Button asChild variant="ghost" size="sm">
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

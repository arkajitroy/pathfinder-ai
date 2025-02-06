import { Button } from "@/components/ui/button";
import { Home, MoveRight, CloudOff } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Glitchy 404 */}
        <div className="relative">
          <div className="text-[6rem] sm:text-[10rem] font-bold tracking-tighter relative">
            <span className="absolute inset-0 text-primary/20 animate-pulse">404</span>
            <span className="absolute inset-0 text-primary/20 animate-ping">404</span>
            <span className="relative">404</span>
          </div>
          <CloudOff className="w-16 h-16 mx-auto mt-4 text-muted-foreground animate-bounce" />
        </div>

        {/* Typo-filled heading */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Oopsie Woopsie!</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Looks like we got a bit confuzed
          </h2>
          <p className="text-muted-foreground">
            The page your looking for took a wrong turn and got losted in cyberspace
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button className="group">
              <Home className="mr-2 h-4 w-4" />
              Take me home
              <MoveRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
          <Button variant="outline">Contact Support</Button>
        </div>

        {/* Fun Footer */}
        <p className="text-sm text-muted-foreground pt-8">
          Dont worry, its not you... its definutely us!
          <span className="inline-block animate-spin ml-2">🤪</span>
        </p>
      </div>
    </div>
  );
}

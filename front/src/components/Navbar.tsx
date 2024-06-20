"use client";

import Link from "next/link";
import { CircleUser, Menu, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

type NavLink = {
  href: string;
  text: string;
};

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  return (
    <header className="sticky top-0 flex h-16 w-full items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden gap-6 text-lg font-medium md:flex md:flex-grow md:flex-row md:items-center md:gap-5 md:text-sm lg:flex lg:flex-grow lg:flex-row lg:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${pathname === link.href ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${pathname === link.href ? "" : "text-muted-foreground"} hover:text-foreground`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/my-account">My Account</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuCheckboxItem
                    onClick={() => setTheme("light")}
                    checked={theme === "light"}
                  >
                    Light
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={() => setTheme("dark")}
                    checked={theme === "dark"}
                  >
                    Dark
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={() => setTheme("system")}
                    checked={theme === "system"}
                  >
                    System
                  </DropdownMenuCheckboxItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

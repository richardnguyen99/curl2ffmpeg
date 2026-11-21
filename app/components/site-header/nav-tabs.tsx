"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "cn";

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("text-sm font-medium  transition-colors", {
        "text-muted-foreground hover:text-foreground": !active,
        "text-foreground": active,
      })}
    >
      {children}
    </Link>
  );
}

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8" data-slot="site-header-left">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-lg">
        <Image
          src="/logo.png"
          alt="curl2ffmpeg"
          width={32}
          height={32}
          className="h-8 w-8"
          loading="eager"
        />
        <span className="hidden sm:inline text-foreground">curl2ffmpeg</span>
      </Link>

      {/* Navigation links */}
      <nav className="hidden md:flex gap-6">
        <NavLink href="/guides" active={pathname === "/guides"}>
          Guides
        </NavLink>
        <NavLink href="/about" active={pathname === "/about"}>
          About
        </NavLink>
      </nav>
    </div>
  );
}

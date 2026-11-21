import Link from "next/link";

export function SiteHeaderSkeleton() {
  return (
    <nav className="hidden md:flex gap-6">
      <Link
        href="/guides"
        className="text-sm font-medium  transition-colors text-muted-foreground hover:text-foreground"
      >
        Guides
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium  transition-colors text-muted-foreground hover:text-foreground"
      >
        About
      </Link>
    </nav>
  );
}

import Link from "next/link";

async function getCachedYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const currentYear = await getCachedYear();

  return (
    <footer
      className="sticky bottom-0 z-40 w-full border-t border-black/10 bg-background/80 backdrop-blur-md"
      data-slot="site-footer"
    >
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        data-slot="site-footer-wrapper"
      >
        <div
          className="flex h-16 items-center justify-between"
          data-slot="site-footer-flex-container"
        >
          {/* Left side: Copyright */}
          <div className="flex items-center" data-slot="site-footer-left">
            <p className="text-sm text-muted-foreground">
              © 2026{currentYear > 2026 && ` - ${currentYear}`} richardnguyen99
            </p>
          </div>

          {/* Right side: Links */}
          <nav
            className="flex items-center gap-6"
            data-slot="site-footer-right"
          >
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Use
            </Link>
            <Link
              href="/sitemap"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

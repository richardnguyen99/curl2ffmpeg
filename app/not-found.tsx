import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "404 - Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="bg-background">
      <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-secondary-foreground">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-muted-foreground">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link href="/" className={buttonVariants({ variant: "default" })}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

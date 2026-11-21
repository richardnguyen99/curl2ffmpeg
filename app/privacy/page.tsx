import { Separator } from "@/components/ui/separator";

export default function LegalPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 prose dark:prose-invert prose-h3:mt-0">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1>Privacy Policy</h1>
          <h6 className="italic text-subtle">
            Last updated: November 20, 2026
          </h6>

          <Separator />

          <h2>Data Collection</h2>
          <p>
            All media commands that are copied and pasted are not stored or
            transmitted by this project. Some historical data are stored in your
            browser&apos;s local storage, which is also completely under your
            control.
          </p>

          <h2>Cookies</h2>
          <p>
            This project does not use cookies for tracking or storing personal
            information.
          </p>

          <h2>Other Internet Activity</h2>
          <p>
            Hosting providers may log certain information such as IP addresses
            and request headers for security and operational metrics, but this
            project does not have access to, use or store that information.
          </p>
        </div>
      </div>
    </div>
  );
}

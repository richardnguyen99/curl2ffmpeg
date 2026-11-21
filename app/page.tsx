import { CurlToConverterTabs } from "./components/converter";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-background">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 pb-32">
        <div className="space-y-8">
          <CurlToConverterTabs />
        </div>
      </main>
    </div>
  );
}

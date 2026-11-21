import { ConverterSkeleton } from "./components/converter/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 pb-32">
      <ConverterSkeleton />
    </main>
  );
}

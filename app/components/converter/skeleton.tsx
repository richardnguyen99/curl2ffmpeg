import { Skeleton } from "@/components/ui/skeleton";

export function ConverterSkeleton() {
  return (
    <div className="w-full space-y-6">
      <div className="border-b">
        <div className="flex gap-4 p-0 overflow-x-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-none" />
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-12 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>

            <Skeleton className="h-64 w-full rounded-md" />

            <div className="flex gap-2">
              <Skeleton className="h-9 flex-1 rounded-md" />
              <Skeleton className="h-9 flex-1 rounded-md" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-16 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>

            <Skeleton className="h-64 w-full rounded-md" />

            <div className="flex gap-2">
              <Skeleton className="h-9 flex-1 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

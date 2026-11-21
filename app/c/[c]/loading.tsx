import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Skeleton className="flex rounded-lg h-5 items-center justify-between" />
          <Skeleton className="flex rounded-lg h-64 " />
          <Skeleton className="flex rounded-lg h-7 items-center justify-between" />
        </div>

        <div className="space-y-3">
          <Skeleton className="flex rounded-lg h-5 items-center justify-between" />
          <Skeleton className="flex rounded-lg h-64 " />
          <Skeleton className="flex rounded-lg h-7 items-center justify-between" />
        </div>
      </div>
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ACCEPTED_CONVERTER_MAP, ACCEPTED_CONVERTERS } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ConverterLayout() {
  return (
    <Tabs value="" className="w-full">
      <div className="border-b">
        <TabsList className="w-fit" variant="line">
          {ACCEPTED_CONVERTERS.map((value) => (
            <TabsTrigger
              key={value}
              value={value}
              nativeButton={false}
              render={
                <Link href={`/c/${value}`}>
                  {ACCEPTED_CONVERTER_MAP[value]}
                </Link>
              }
            ></TabsTrigger>
          ))}
        </TabsList>
      </div>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <TabsContent value="" className="mt-0">
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
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}

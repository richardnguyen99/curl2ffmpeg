import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  ACCEPTED_CONVERTER_MAP,
  ACCEPTED_CONVERTERS,
  AcceptedConverter,
} from "@/lib/constants";
import { getConverterTitle } from "@/lib/converter";

type Props = {
  params: Promise<{ c: string }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return ACCEPTED_CONVERTERS.map((c) => ({ c }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ c: AcceptedConverter }>;
}) {
  "use cache";

  const { c } = await params;

  return {
    title: `${getConverterTitle(c)}`,
    description: `Convert commands to ${getConverterTitle(c)} using curl2ffmpeg`,
  };
}

export default async function ConverterLayout({ params, children }: Props) {
  const { c: initialConverter } = await params;

  return (
    <Tabs value={initialConverter} className="w-full">
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
          <TabsContent value={initialConverter} className="mt-0">
            {children}
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}

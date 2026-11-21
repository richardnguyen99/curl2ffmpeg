import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FfmpegBashConverter } from "./converter-bash";
import { FfmpegPythonConverter } from "./converter-python";
import { FfmpegNodeJsConverter } from "./converter-nodejs";
import Link from "next/link";
import { ACCEPTED_CONVERTER_MAP, ACCEPTED_CONVERTERS } from "@/lib/constants";

type Props = {
  initialConverter: string;
};

export function CurlToConverterTabs({ initialConverter }: Props) {
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
          <TabsContent value="bash" className="mt-0">
            <FfmpegBashConverter />
          </TabsContent>
          <TabsContent value="python" className="mt-0">
            <FfmpegPythonConverter />
          </TabsContent>
          <TabsContent value="nodejs" className="mt-0">
            <FfmpegNodeJsConverter />
          </TabsContent>
          <TabsContent value="yt-dlp" className="mt-0">
            {/* yt-dlp converter component goes here */}
          </TabsContent>
          <TabsContent value="fish" className="mt-0">
            {/* Fish converter component goes here */}
          </TabsContent>
          <TabsContent value="zsh" className="mt-0">
            {/* Zsh converter component goes here */}
          </TabsContent>
          <TabsContent value="cmd" className="mt-0">
            {/* Command Prompt converter component goes here */}
          </TabsContent>
          <TabsContent value="powershell" className="mt-0">
            {/* PowerShell converter component goes here */}
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}

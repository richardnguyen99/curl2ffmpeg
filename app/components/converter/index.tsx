import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FfmpegBashConverter } from "./converter-bash";
import { FfmpegPythonConverter } from "./converter-python";
import { FfmpegNodeJsConverter } from "./converter-nodejs";

export function CurlToConverterTabs() {
  return (
    <Tabs defaultValue="bash" className="w-full">
      <div className="border-b">
        <TabsList className="w-fit" variant="line">
          <TabsTrigger value="bash">Bash</TabsTrigger>
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="nodejs">Node.js</TabsTrigger>
          <TabsTrigger value="yt-dlp">yt-dlp</TabsTrigger>
          <TabsTrigger value="fish">Fish</TabsTrigger>
          <TabsTrigger value="zsh">Zsh</TabsTrigger>
          <TabsTrigger value="cmd">Command Prompt</TabsTrigger>
          <TabsTrigger value="powershell">PowerShell</TabsTrigger>
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

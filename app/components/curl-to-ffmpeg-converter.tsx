"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Zap, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/toast";
import { convertCurlToFfmpegBash } from "@/lib/converter";

export function CurlToFfmpegConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleConvert = () => {
    if (!input.trim()) {
      toast.add({
        title: "Empty input",
        description: "Please paste a curl command to convert.",
        type: "error",
      });
      return;
    }

    try {
      const result = convertCurlToFfmpegBash(input);
      if (result) {
        setOutput(result);
        toast.add({
          title: "Conversion successful",
          description: "Your curl command has been converted to ffmpeg format.",
          type: "success",
        });
      } else {
        toast.add({
          title: "Conversion failed",
          description: "Could not convert the provided curl command.",
          type: "error",
        });
      }
    } catch (error) {
      toast.add({
        title: "Conversion error",
        description: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
        type: "error",
      });
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    toast.add({
      title: "Cleared",
      description: "Input and output have been cleared.",
      type: "success",
    });
  };

  const handleCopyOutput = async () => {
    if (!output) {
      toast.add({
        title: "Nothing to copy",
        description: "Please convert a curl command first.",
        type: "error",
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      toast.add({
        title: "Copied to clipboard",
        description: "The ffmpeg command has been copied.",
        type: "success",
      });
    } catch (err) {
      toast.add({
        title: "Copy failed",
        description: "Could not copy to clipboard. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">curl</label>
          <span className="text-xs text-muted-foreground">
            {input.length} characters
          </span>
        </div>

        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder='Paste your curl command here...&#10;Example: curl -H "User-Agent: Mozilla/5.0" -o video.mp4 "https://example.com/video.mp4"'
          className="h-64 font-mono text-sm resize-none"
        />

        <div className="flex gap-2">
          <Button
            onClick={handleConvert}
            variant="default"
            size="sm"
            className="flex-1"
          >
            <Zap className="size-4 mr-1" />
            Convert
          </Button>
          <Button
            onClick={handleClear}
            variant="destructive"
            size="sm"
            className="flex-1"
          >
            <Trash2 className="size-4 mr-1" />
            Clear
          </Button>
        </div>
      </div>

      {/* Output Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">ffmpeg</label>
          <span className="text-xs text-muted-foreground">
            {output.length} characters
          </span>
        </div>

        <Textarea
          value={output}
          readOnly
          placeholder="Your converted ffmpeg command will appear here..."
          className="h-64 font-mono text-sm resize-none cursor-text"
        />

        <div className="flex gap-2">
          <Button
            onClick={handleCopyOutput}
            disabled={!output}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Copy className="size-4 mr-1" />
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}

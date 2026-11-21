"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { copyToClipboard } from "./conversion-utils";

interface OutputSectionProps {
  output: string;
  label: string;
  copyLabel?: string;
}

export function OutputSection({
  output,
  label,
  copyLabel = "command",
}: OutputSectionProps) {
  const handleCopy = () => {
    copyToClipboard(output, copyLabel);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-xs text-muted-foreground">
          {output.length} characters
        </span>
      </div>

      <Textarea
        value={output}
        readOnly
        placeholder="Your converted command will appear here..."
        className="h-64 font-mono text-sm resize-none cursor-text"
      />

      <div className="flex gap-2">
        <Button
          onClick={handleCopy}
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
  );
}

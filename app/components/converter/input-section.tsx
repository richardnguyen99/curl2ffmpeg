"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Zap, Trash2 } from "lucide-react";

interface InputSectionProps {
  input: string;
  onInputChange: (value: string) => void;
  onConvert: () => void;
  onClear: () => void;
}

export function InputSection({
  input,
  onInputChange,
  onConvert,
  onClear,
}: InputSectionProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value);
  };

  return (
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
          onClick={onConvert}
          variant="default"
          size="sm"
          className="flex-1"
        >
          <Zap className="size-4 mr-1" />
          Convert
        </Button>
        <Button
          onClick={onClear}
          variant="destructive"
          size="sm"
          className="flex-1"
        >
          <Trash2 className="size-4 mr-1" />
          Clear
        </Button>
      </div>
    </div>
  );
}

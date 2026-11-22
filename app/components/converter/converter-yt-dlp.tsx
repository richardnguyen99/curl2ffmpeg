"use client";

import { useState } from "react";
import { InputSection } from "./input-section";
import { OutputSection } from "./output-section";
import {
  handleEmptyInput,
  handleConversionSuccess,
  handleConversionFailed,
  handleConversionError,
  handleClearSuccess,
} from "./conversion-utils";
import { convertCurlToYtDlp } from "@/lib/converter";

export function FfmpegYtDlpConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleConvert = () => {
    if (!input.trim()) {
      handleEmptyInput();
      return;
    }

    try {
      const result = convertCurlToYtDlp(input);
      if (result) {
        setOutput(result);
        handleConversionSuccess("yt-dlp");
      } else {
        handleConversionFailed();
      }
    } catch (error) {
      handleConversionError(error);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    handleClearSuccess();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <InputSection
        input={input}
        onInputChange={handleInputChange}
        onConvert={handleConvert}
        onClear={handleClear}
      />
      <OutputSection output={output} label="yt-dlp" copyLabel="yt-dlp command" />
    </div>
  );
}

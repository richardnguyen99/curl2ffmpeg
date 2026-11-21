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
import { convertCurlToFfmpegBash } from "@/lib/converter";

/**
 * Convert ffmpeg bash command to Node.js code using child_process
 */
function convertBashToNodeJs(bashCommand: string): string {
  if (!bashCommand.trim()) return "";

  // Escape backticks and ${} in the command for template literals
  const escapedCommand = bashCommand.replace(/`/g, "\\`").replace(/\$/g, "\\$");

  return `const { execSync } = require('child_process');

try {
  // Execute ffmpeg command
  const output = execSync(\`${escapedCommand}\`, {
    encoding: 'utf-8',
    stdio: 'pipe'
  });
  
  console.log('Conversion successful!');
  console.log(output);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}`;
}

export function FfmpegNodeJsConverter() {
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
      const bashCommand = convertCurlToFfmpegBash(input);
      if (bashCommand) {
        const nodeCode = convertBashToNodeJs(bashCommand);
        setOutput(nodeCode);
        handleConversionSuccess("Node.js");
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
      <OutputSection
        output={output}
        label="Node.js"
        copyLabel="Node.js code"
      />
    </div>
  );
}

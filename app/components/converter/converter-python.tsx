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
 * Convert ffmpeg bash command to Python code using subprocess
 */
function convertBashToPython(bashCommand: string): string {
  if (!bashCommand.trim()) return "";

  // Escape single quotes in the command
  const escapedCommand = bashCommand.replace(/'/g, "\\'");

  return `import subprocess

# Execute ffmpeg command
result = subprocess.run(
    '''${escapedCommand}''',
    shell=True,
    capture_output=True,
    text=True
)

# Check if the command was successful
if result.returncode == 0:
    print("Conversion successful!")
else:
    print(f"Error: {result.stderr}")`;
}

export function FfmpegPythonConverter() {
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
        const pythonCode = convertBashToPython(bashCommand);
        setOutput(pythonCode);
        handleConversionSuccess("Python");
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
        label="Python"
        copyLabel="Python code"
      />
    </div>
  );
}

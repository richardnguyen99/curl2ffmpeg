'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Download, RefreshCw } from 'lucide-react';

export function CurlToFfmpegConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const convertCurlToFfmpeg = (curlCommand: string): string => {
    if (!curlCommand.trim()) return '';

    // Remove leading/trailing whitespace and backslashes (multiline format)
    let curl = curlCommand
      .trim()
      .split('\n')
      .map(line => line.trim().replace(/\\$/, ''))
      .join(' ');

    // Remove 'curl' command if it starts with it
    if (curl.startsWith('curl ')) {
      curl = curl.slice(5);
    }

    const ffmpegParts: string[] = ['ffmpeg'];
    let url = '';
    let outputFile = 'output.mp4';
    const headers: Record<string, string> = {};

    // Handle the curl command format with better parsing
    // Split by -H or --header flags while preserving quoted values
    const headerPattern = /(?:^|\s)(?:-H|--header)\s+(['"])(.*?)\1/g;
    const urlPattern = /(?:^|\s)(?:--url)\s+(['"])(.*?)\1|(?:^|\s)(['"])([^'"]*\.m3u8|https?:\/\/[^'"]+)\3/g;
    const outputPattern = /(?:^|\s)(?:-o|--output)\s+(['"])(.*?)\1/g;

    // Extract headers
    let headerMatch;
    while ((headerMatch = headerPattern.exec(curl)) !== null) {
      const headerValue = headerMatch[2];
      const [key, value] = headerValue.split(': ');
      if (key && value) {
        headers[key.trim()] = value.trim();
      }
    }

    // Extract URL
    let urlMatch;
    while ((urlMatch = urlPattern.exec(curl)) !== null) {
      url = urlMatch[2] || urlMatch[4];
      if (url) break;
    }

    // Extract output file
    let outputMatch;
    while ((outputMatch = outputPattern.exec(curl)) !== null) {
      outputFile = outputMatch[2];
    }

    // Build ffmpeg command
    ffmpegParts.push('-i', `"${url}"`);

    // If we have headers, format them for ffmpeg
    if (Object.keys(headers).length > 0) {
      const headersList = Object.entries(headers)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\\r\\n');

      ffmpegParts.push('-headers', `"${headersList}"`);
    }

    // Add output file
    ffmpegParts.push(`"${outputFile}"`);

    return ffmpegParts.join(' ');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    setOutput(convertCurlToFfmpeg(value));
  };

  const handleSampleCurl = () => {
    const sampleCurl = `curl --url 'https://b.surrit.com/b3c0f568-44e6-4669-9dfa-4c3efb3599e1/720p/video.m3u8' \\
  -H 'accept: */*' \\
  -H 'accept-language: en-US,en;q=0.5' \\
  -H 'cache-control: no-cache' \\
  -H 'origin: https://missav.ai' \\
  -H 'pragma: no-cache' \\
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'`;
    setInput(sampleCurl);
    setOutput(convertCurlToFfmpeg(sampleCurl));
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      setInput(text);
      setOutput(convertCurlToFfmpeg(text));
    };
    reader.readAsText(file);
  };

  const handleCopyOutput = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownloadOutput = () => {
    if (!output) return;
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(output)}`
    );
    element.setAttribute('download', 'converted-command.sh');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">
            curl
          </label>
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
            onClick={handleSampleCurl}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            Sample curl
          </Button>
          <Button
            onClick={handleClear}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <RefreshCw className="size-4 mr-1" />
            Clear
          </Button>
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            Upload file
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,.sh"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Output Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">
            ffmpeg
          </label>
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
          <Button
            onClick={handleDownloadOutput}
            disabled={!output}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Download className="size-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

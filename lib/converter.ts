/**
 * Converts a curl command to an ffmpeg command (bash format)
 * Handles multiline curl commands with backslash continuations and multiple headers
 *
 * @param curlCommand - The curl command to convert
 * @returns The equivalent ffmpeg command
 */
export function convertCurlToFfmpegBash(curlCommand: string): string {
  if (!curlCommand.trim()) return "";

  // Remove leading/trailing whitespace and backslashes (multiline format)
  let curl = curlCommand
    .trim()
    .split("\n")
    .map((line) => line.trim().replace(/\\$/, ""))
    .join(" ");

  // Remove 'curl' command if it starts with it
  if (curl.startsWith("curl ")) {
    curl = curl.slice(5);
  }

  const ffmpegParts: string[] = ["ffmpeg"];
  let url = "";
  let outputFile = "output.mp4";
  const headers: Record<string, string> = {};

  // Handle the curl command format with better parsing
  // Split by -H or --header flags while preserving quoted values
  const headerPattern = /(?:^|\s)(?:-H|--header)\s+(['"])(.*?)\1/g;
  const urlPattern =
    /(?:^|\s)(?:--url)\s+(['"])(.*?)\1|(?:^|\s)(['"])([^'"]*\.m3u8|https?:\/\/[^'"]+)\3/g;
  const outputPattern = /(?:^|\s)(?:-o|--output)\s+(['"])(.*?)\1/g;

  // Extract headers
  let headerMatch;
  while ((headerMatch = headerPattern.exec(curl)) !== null) {
    const headerValue = headerMatch[2];
    const [key, value] = headerValue.split(": ");
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

  // If we have headers, format them for ffmpeg
  if (Object.keys(headers).length > 0) {
    const headersList = Object.entries(headers)
      .map(([key, value]) => `$'${key}: ${value}'`)
      .join("$'\\r\\n'");

    ffmpegParts.push("-headers", `${headersList}$'\\r\\n'`);
  }

  // Build ffmpeg command
  ffmpegParts.push("-i", `"${url}"`);

  // Add output file
  ffmpegParts.push(`-c copy "${outputFile}"`);

  return ffmpegParts.join(" ");
}

export function getConverterTitle(converter: string = "bash"): string {
  let converterTitle = "";
  switch (converter) {
    case "bash":
      converterTitle = "Bash";
      break;
    case "python":
      converterTitle = "Python";
      break;
    case "nodejs":
      converterTitle = "Node.js";
      break;
    case "yt-dlp":
      converterTitle = "yt-dlp";
      break;
    case "fish":
      converterTitle = "Fish";
      break;
    case "zsh":
      converterTitle = "Zsh";
      break;
    case "cmd":
      converterTitle = "Command Prompt";
      break;
    case "powershell":
      converterTitle = "PowerShell";
      break;
    default:
      converterTitle = "Bash";
      break;
  }

  return `${converterTitle} converter - curl2ffmpeg`;
}

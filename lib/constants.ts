export const ACCEPTED_CONVERTERS = [
  "bash",
  "python",
  "nodejs",
  "yt-dlp",
  "fish",
  "zsh",
  "cmd",
  "powershell",
] as const;

export const ACCEPTED_CONVERTER_MAP: Readonly<
  Record<AcceptedConverter, string>
> = {
  bash: "Bash",
  python: "Python",
  nodejs: "Node.js",
  "yt-dlp": "yt-dlp",
  fish: "Fish",
  zsh: "Zsh",
  cmd: "Command Prompt",
  powershell: "PowerShell",
};

export type AcceptedConverter = (typeof ACCEPTED_CONVERTERS)[number];

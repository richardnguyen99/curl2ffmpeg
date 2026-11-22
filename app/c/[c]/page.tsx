import { FfmpegBashConverter } from "@/app/components/converter/converter-bash";
import { FfmpegNodeJsConverter } from "@/app/components/converter/converter-nodejs";
import { FfmpegPythonConverter } from "@/app/components/converter/converter-python";
import { FfmpegYtDlpConverter } from "@/app/components/converter/converter-yt-dlp";
import { AcceptedConverter } from "@/lib/constants";

const converterMap: Record<AcceptedConverter, React.ReactNode> = {
  bash: <FfmpegBashConverter />,
  python: <FfmpegPythonConverter />,
  nodejs: <FfmpegNodeJsConverter />,
  fish: <div>Fish Converter</div>,
  "yt-dlp": <FfmpegYtDlpConverter />,
  zsh: <div>Zsh Converter</div>,
  cmd: <div>Command Prompt Converter</div>,
  powershell: <div>PowerShell Converter</div>,
};

export default async function ConverterPage({ params }: PageProps<"/c/[c]">) {
  const { c: converter } = (await params) as { c: AcceptedConverter };

  return <div>{converterMap[converter]}</div>;
}

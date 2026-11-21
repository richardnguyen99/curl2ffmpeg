import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const guides = [
  {
    id: "what-is-curl",
    title: "What is a curl command?",
    content: (
      <>
        <p>
          cURL (Client URL) is a command-line tool that allows you to transfer
          data using URLs. It supports various protocols including HTTP, HTTPS,
          FTP, SFTP, and more.
        </p>
        <p>
          Curl commands are commonly used for making API requests, downloading
          files, and testing web services. You can easily find curl commands in
          your browser&rsquo;s Network tab when inspecting network requests.
        </p>
      </>
    ),
  },
  {
    id: "what-is-ffmpeg",
    title: "What is ffmpeg?",
    content: (
      <>
        <p>
          FFmpeg is a powerful multimedia framework that can decode, encode,
          transcode, mux, demux, stream, filter, and play almost anything that
          humans and machines have created.
        </p>
        <p>
          FFmpeg is commonly used for video processing, audio processing, format
          conversion, and streaming. It&rsquo;s a command-line tool like curl
          but specifically designed for multimedia operations.
        </p>
      </>
    ),
  },
  {
    id: "why-convert",
    title: "Why convert curl to ffmpeg?",
    content: (
      <>
        <p>
          It's mainly used to download media content such as video and audio
          streams from the command line.
        </p>
        <p>
          Some sites require specific headers to be included in the request,
          such as <code>User-Agent</code> or <code>Referer</code>, in order to
          successfully access the media content. If you simply enter the URL
          without these headers, the request may fail with 403 Forbidden.
        </p>
        <p>
          You can also utilize Ffmpeg power to download HLS (HTTP Live
          Streaming) streams directly, which is useful for streaming media
          content that is split into multiple segments.
        </p>
      </>
    ),
  },
  {
    id: "headers-explained",
    title: "What are HTTP headers and why do they matter?",
    content: (
      <>
        <p>
          HTTP headers are metadata sent with HTTP requests and responses. They
          provide information about the request/response such as content type,
          authentication, caching instructions, and more.
        </p>
        <p>When converting curl to ffmpeg, headers are important because:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Some servers require specific User-Agent headers</li>
          <li>Authentication headers may be needed for protected content</li>
          <li>Referer headers help bypass certain restrictions</li>
          <li>Accept headers ensure correct content format is returned</li>
        </ul>
        <p className="mt-2">
          The converter automatically extracts headers from your curl command
          and applies them in the ffmpeg output using the headers format.
        </p>
      </>
    ),
  },
  {
    id: "how-to-get-curl",
    title: "How do I get a curl command?",
    content: (
      <>
        <p>Follow these steps to extract a curl command from your browser:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Open your browser&rsquo;s Developer Tools (F12 or Right-click &rarr;
            Inspect)
          </li>
          <li>Go to the Network tab</li>
          <li>
            Perform the action that triggers the request (e.g., play a video)
          </li>
          <li>Find the relevant request in the Network tab</li>
          <li>
            Right-click on it and select &ldquo;Copy &rarr; Copy as cURL&rdquo;
          </li>
          <li>Paste the curl command into our converter</li>
        </ol>
      </>
    ),
  },
  {
    id: "copy-paste",
    title: "How do I use the converter?",
    content: (
      <>
        <p>Using the curl2ffmpeg converter is simple:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Paste your curl command into the left textarea</li>
          <li>Click the &ldquo;Convert&rdquo; button to process the command</li>
          <li>Select your desired output format from the tabs</li>
          <li>
            Use &ldquo;Copy&rdquo; button to copy the result to your clipboard
          </li>
          <li>Paste the ffmpeg command into your terminal and run it</li>
        </ol>
      </>
    ),
  },
  {
    id: "bash-vs-other",
    title: "What do different output formats mean?",
    content: (
      <>
        <p>
          The converter supports multiple output formats for different use
          cases:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Bash</strong> &ndash; Standard shell script format, works on
            Linux, macOS, and Windows (with WSL)
          </li>
          <li>
            <strong>PowerShell</strong> &ndash; Windows-specific format for
            running on native Windows without WSL
          </li>
          <li>
            <strong>Python</strong> &ndash; Python script format for integration
            with Python projects
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "common-issues",
    title: "What if the conversion doesn't work?",
    content: (
      <>
        <p>
          If your converted command doesn&rsquo;t work, check these common
          issues:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Missing URL</strong> &ndash; Ensure the curl command
            includes a URL
          </li>
          <li>
            <strong>Special characters</strong> &ndash; URLs with special
            characters may need escaping
          </li>
          <li>
            <strong>Authentication</strong> &ndash; Check that auth headers are
            correctly included
          </li>
          <li>
            <strong>Server restrictions</strong> &ndash; Some servers block
            automated downloads
          </li>
          <li>
            <strong>Missing dependencies</strong> &ndash; Ensure ffmpeg is
            installed on your system
          </li>
        </ul>
        <p>
          If you believe the issue is conversion-related, make a pull request or
          report it to the project maintainers.
        </p>
      </>
    ),
  },
  {
    id: "advanced-usage",
    title: "Can I modify the ffmpeg command?",
    content: (
      <>
        <p>
          Absolutely! The converter generates a base ffmpeg command, but you can
          modify it for your specific needs:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Add filters</strong> &ndash; Use -vf for video filters, -af
            for audio filters
          </li>
          <li>
            <strong>Change format</strong> &ndash; Modify the output file
            extension and codec
          </li>
          <li>
            <strong>Adjust quality</strong> &ndash; Use -q:v for video quality,
            -q:a for audio quality
          </li>
          <li>
            <strong>Extract portions</strong> &ndash; Use -ss and -to for
            specific timeframes
          </li>
          <li>
            <strong>Combine multiple inputs</strong> &ndash; Add multiple -i
            flags for concatenation
          </li>
        </ul>
      </>
    ),
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 prose lg:prose-xl dark:prose-invert prose-h3:mt-0">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Guides</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to use curl2ffmpeg and understand the basics of curl and
            ffmpeg conversion.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion>
            {guides.map((guide) => (
              <AccordionItem key={guide.id} value={guide.id}>
                <AccordionTrigger>{guide.title}</AccordionTrigger>
                <AccordionContent>{guide.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

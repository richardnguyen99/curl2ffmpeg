export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 prose dark:prose-invert prose-h3:mt-0">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1>About</h1>
          <p>This is the about page for the curl2ffmpeg project.</p>

          <p>
            Some media sources may require some specific headers such as
            <code>User-Agent</code> and <code>Referer</code>. Without those, the
            requests made to those sources may fail or be blocked with a{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403">
              403 Forbidden
            </a>
            .
          </p>

          <p>
            This project is designed to help users convert <code>curl</code>
            commands to other media download tools like <code>ffmpeg</code> and
            <code>yt-dlp</code>. Those tools support a wide range of media
            formats and protocols, making it easier for users to download media
            from various sources. Those tools also offer powerful features to
            download{" "}
            <a href="https://www.cloudflare.com/learning/video/what-is-http-live-streaming/">
              HLS-formatted
            </a>{" "}
            videos and combine them into single media files.
          </p>
        </div>
      </div>
    </div>
  );
}

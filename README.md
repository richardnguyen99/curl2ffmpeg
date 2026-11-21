<div align="center">
  <img src="public/logo.png" alt="Project Logo" width="64" height="64" />
  <h1>curl-2-ffmpeg</h1>
</div>

## Overview

Inspired by the [`curl2ffmpeg`](https://github.com/windyakin/curl2ffmpeg) by [windyakin](https://github.com/windyakin), I created this project to provide more functionality and flexibility for converting `curl` commands to `ffmpeg` commands on different platforms and shells.

This project strictly aims to convert `curl` texts that are copied from modern browsers into equivalent `ffmpeg` commands to prevent HTTP errors for missing required headers like `User-Agent`, `Referer`, and `Cookie`.

## Features

- Provide a basic conversion from `curl` to `ffmpeg` commands.
- Support multiple platforms and shells.
- Support flags customization for `ffmpeg` commands.
- Offer QoL features such as copy to clipboard, custom output file name and detailed error output.

It does not:

- ❌ Validate `curl` or `ffmpeg` commands
- ❌ Check `ffmpeg` command's runtime output
- ❌ Execute `ffmpeg` commands automatically

### Supported platforms / shells / programs

- [ ] Bash (Linux)
- [ ] [`yt-dlp`](https://github.com/yt-dlp/yt-dlp)
- [ ] [`Fish Shell`](https://github.com/fish-shell/fish-shell)
- [ ] [`zsh`](https://github.com/zsh-users/zsh)
- [ ] PowerShell (Windows)
- [ ] Command Prompt (Windows)

### Ffmpeg options

A standard `ffmpeg` command consists of 3 main parts:

```text
> ffmpeg [global options] [input options] -i input_file [output options] output_file
```

- [ ] Global options
- [ ] Input options
- [ ] Output options

## Other functionalities

- [ ] Modify inline `curl`'s headers
- [ ] Support `sudo` prefix for `ffmpeg` commands
- [ ] Support history of past conversions
- [ ] Support persistent configuration for `ffmpeg` commands
- [ ] Provide detailed debug output for conversions

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

import { toast } from "@/components/ui/toast";

/**
 * Copy text to clipboard and show toast feedback
 */
export async function copyToClipboard(text: string, label: string = "text") {
  if (!text) {
    toast.add({
      title: "Nothing to copy",
      description: `Please convert a curl command first.`,
      type: "error",
    });
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    toast.add({
      title: "Copied to clipboard",
      description: `The ${label} has been copied.`,
      type: "success",
    });
  } catch {
    toast.add({
      title: "Copy failed",
      description: "Could not copy to clipboard. Please try again.",
      type: "error",
    });
  }
}

/**
 * Handle conversion errors
 */
export function handleConversionError(error: unknown) {
  toast.add({
    title: "Conversion error",
    description: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
    type: "error",
  });
}

/**
 * Handle empty input
 */
export function handleEmptyInput() {
  toast.add({
    title: "Empty input",
    description: "Please paste a curl command to convert.",
    type: "error",
  });
}

/**
 * Handle successful conversion
 */
export function handleConversionSuccess(label: string = "ffmpeg") {
  toast.add({
    title: "Conversion successful",
    description: `Your curl command has been converted to ${label} format.`,
    type: "success",
  });
}

/**
 * Handle failed conversion
 */
export function handleConversionFailed() {
  toast.add({
    title: "Conversion failed",
    description: "Could not convert the provided curl command.",
    type: "error",
  });
}

/**
 * Handle clear action
 */
export function handleClearSuccess() {
  toast.add({
    title: "Cleared",
    description: "Input and output have been cleared.",
    type: "success",
  });
}

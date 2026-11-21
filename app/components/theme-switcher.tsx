"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type ThemeState = {
  isDark: boolean;
  mounted: boolean;
};

export function ThemeSwitcher() {
  const [state, setState] = useState<ThemeState>({
    isDark: false,
    mounted: false,
  });

  // Synchronize DOM theme class with component state on mount.
  // This is a standard Next.js hydration pattern where we sync state.
  useLayoutEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ isDark: isDarkMode, mounted: true });
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const willBeDark = !html.classList.contains("dark");

    if (willBeDark) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }

    setState((prev) => ({ ...prev, isDark: willBeDark }));
  };

  if (!state.mounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label={state.isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-slot="theme-switcher"
    >
      {state.isDark ? (
        <Sun data-icon="inline-start" />
      ) : (
        <Moon data-icon="inline-start" />
      )}
    </Button>
  );
}

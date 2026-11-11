import { useMemo, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import ruRU from "antd/locale/ru_RU";
import { ThemeContext } from "./ThemeContext";
import type { ThemeMode } from "./ThemeContext";

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("theme-mode");
    return (saved as ThemeMode) || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
    document.body.setAttribute("data-theme", mode);

    if (mode === "dark") {
      document.body.style.setProperty("--scrollbar-track", "#141414");
      document.body.style.setProperty("--scrollbar-thumb", "#333333");
      document.body.style.setProperty("--scrollbar-thumb-hover", "#1677FF");
    } else {
      document.body.style.setProperty("--scrollbar-track", "#F5F5F5");
      document.body.style.setProperty("--scrollbar-thumb", "#75C7F0");
      document.body.style.setProperty("--scrollbar-thumb-hover", "#1677FF");
    }
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeConfig = useMemo(() => {
    return {
      algorithm:
        mode === "dark"
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      token: {
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        colorPrimary: "#1677FF",
      },
      components: {
        Layout: {
          bodyBg: mode === "light" ? "#F5F5F5" : "#141414",
        }
      }
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ConfigProvider theme={themeConfig} locale={ruRU}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
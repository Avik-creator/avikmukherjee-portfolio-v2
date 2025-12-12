"use client";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface LLMButtonProps {
  url: string;
  provider: "chatgpt" | "claude" | "scira";
  className?: string;
}

const getPrompt = (url: string) =>
  `I'm looking at this component documentation: ${url}\n\nI want to use it in a React (TypeScript) project.\nHelp me understand how to use it step-by-step, including explaining key concepts, showing practical examples with TypeScript code, and pointing out common pitfalls.\nBe ready to answer follow-up questions and help debug issues based on the documentation.`;

const providerConfig = {
  chatgpt: {
    label: "Open in ChatGPT",
    icon: Icons.chatgpt,
    url: (url: string) => {
      // ChatGPT doesn't support direct URL parameters, so we'll open it and copy prompt to clipboard
      const prompt = getPrompt(url);
      navigator.clipboard.writeText(prompt).catch(() => { });
      return "https://chatgpt.com/";
    },
    onClick: (url: string) => {
      const prompt = getPrompt(url);
      navigator.clipboard.writeText(prompt).catch(() => { });
    },
  },
  claude: {
    label: "Open in Claude",
    icon: Icons.claude,
    url: (url: string) => {
      // Claude doesn't support direct URL parameters, so we'll open it and copy prompt to clipboard
      const prompt = getPrompt(url);
      navigator.clipboard.writeText(prompt).catch(() => { });
      return "https://claude.ai/";
    },
    onClick: (url: string) => {
      const prompt = getPrompt(url);
      navigator.clipboard.writeText(prompt).catch(() => { });
    },
  },
  scira: {
    label: "Open in Scira AI",
    icon: Icons.scira,
    url: (url: string) => {
      // Scira AI doesn't support direct URL parameters, so we'll open it and copy prompt to clipboard
      const prompt = getPrompt(url);
      navigator.clipboard.writeText(prompt).catch(() => { });
      return "https://scira.ai/";
    },
    onClick: (url: string) => {
      const prompt = getPrompt(url);
      navigator.clipboard.writeText(prompt).catch(() => { });
    },
  },
};

export function LLMButton({ url, provider, className }: LLMButtonProps) {
  const config = providerConfig[provider];
  const Icon = config.icon;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (config.onClick) {
      config.onClick(url);
    }
    window.open(config.url(url), "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={config.url(url)}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={config.label}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md",
        "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-neutral-100",
        "hover:bg-gray-200 dark:hover:bg-neutral-700",
        "transition-colors duration-200",
        className
      )}
    >
      <Icon className="w-4 h-4" />
      {config.label}
    </a>
  );
}

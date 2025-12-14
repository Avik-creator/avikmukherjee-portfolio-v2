---
title: "Retro Window"
description: "A pixel-perfect retro window UI inspired by classic OS aesthetics. Includes a title bar, window controls (minimize, maximize, close), content area, and status bar with bold 8-bit styling."
year: "2025"
---

# Retro Window

A pixel-perfect retro window UI inspired by classic OS aesthetics. Includes a title bar, window controls (minimize, maximize, close), content area, and status bar with bold 8-bit styling.

## Features

- Pixel-perfect retro styling with bold 8-bit shadows
- Title bar with truncated uppercase title
- Window controls: minimize, maximize, close with callbacks
- Minimize toggle hides/shows content area
- Status bar with ready indicator
- Configurable title and child content
- Accessible buttons with hover states
- Lightweight implementation with no external dependencies


## Component Code

```tsx
"use client"

import { useState, type ReactNode } from "react"

interface RetroWindowProps {
  children: ReactNode
  title?: string
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}

export function RetroWindow({ children, title = "Untitled", onClose, onMinimize, onMaximize }: RetroWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <div className="w-80 border-4 border-lime-400 bg-stone-800 shadow-[6px_6px_0_0_#84cc16]">
      {/* Title bar */}
      <div className="flex h-10 items-center justify-between border-b-4 border-lime-400 bg-lime-500 px-2">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 bg-stone-900" />
            ))}
          </div>
          <span className="text-[8px] font-bold text-stone-900 uppercase truncate max-w-40">{title}</span>
        </div>

        <div className="flex gap-1">
          {/* Minimize */}
          <button
            onClick={() => {
              setIsMinimized(!isMinimized)
              onMinimize?.()
            }}
            className="flex h-6 w-6 items-center justify-center border-2 border-stone-900 bg-stone-700 shadow-[2px_2px_0_0_#1c1917] hover:bg-stone-600"
          >
            <div className="h-0.5 w-3 bg-lime-400" />
          </button>

          {/* Maximize */}
          <button
            onClick={onMaximize}
            className="flex h-6 w-6 items-center justify-center border-2 border-stone-900 bg-stone-700 shadow-[2px_2px_0_0_#1c1917] hover:bg-stone-600"
          >
            <div className="h-3 w-3 border-2 border-lime-400" />
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="flex h-6 w-6 items-center justify-center border-2 border-stone-900 bg-red-500 shadow-[2px_2px_0_0_#1c1917] hover:bg-red-400"
          >
            <span className="text-[8px] font-bold text-white">X</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && <div className="p-4 text-[10px] text-lime-400">{children}</div>}

      {/* Status bar */}
      <div className="flex h-6 items-center border-t-4 border-lime-400 bg-stone-700 px-2">
        <span className="text-[8px] text-lime-600">Ready</span>
      </div>
    </div>
  )
}

```

## Usage

```tsx
<RetroWindow title="About.txt" onClose={() => setShowWindow(false)}>
              <div className="space-y-2">
                  <p>Welcome to Retro UI!</p>
                  <p>These components bring back the nostalgic feel of classic interfaces.</p>
                  <p>Built with modern React and Tailwind CSS.</p>
              </div>
</RetroWindow>
```


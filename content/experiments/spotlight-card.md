---
title: "Spotlight Card"
description: "A card component with a dynamic spotlight effect that follows the cursor. Creates depth and visual interest."
year: "2025"
---

# Spotlight Card

A card component with a dynamic spotlight effect that follows the cursor. Creates depth and visual interest.

## Features

- Cursor-following spotlight
- Customizable spotlight color and size
- Smooth gradient transitions
- Works with any card content


## Component Code

```tsx
"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.1)",
  spotlightSize = 300,
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
          : "transparent",
      }}
    >
      {children}
    </div>
  );
}

```

## Usage

```tsx
<SpotlightCard className="p-8 border rounded-2xl">
      <h3 className="text-xl font-semibold mb-2">Spotlight Effect</h3>
      <p className="text-gray-600">Move your cursor around to see the spotlight follow.</p>
    </SpotlightCard>
```


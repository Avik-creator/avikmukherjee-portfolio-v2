---
title: "Text Scramble"
description: "A text effect that scrambles characters before revealing the final text. Great for headers and loading states."
year: "2025"
---

# Text Scramble

A text effect that scrambles characters before revealing the final text. Great for headers and loading states.

## Features

- Customizable scramble characters
- Adjustable animation speed
- Trigger on mount or hover
- Supports any text content


## Component Code

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  trigger?: "mount" | "hover";
  characters?: string;
}

export default function TextScramble({
  text,
  className = "",
  speed = 50,
  trigger = "mount",
  characters = "!<>-_\\/[]{}—=+*^?#________",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(
    trigger === "mount" ? "" : text
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef(0);
  const resolveRef = useRef<(() => void) | null>(null);

  const scramble = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const targetText = text;

    const animate = () => {
      setDisplayText(
        targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return targetText[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        setIsAnimating(false);
        if (resolveRef.current) resolveRef.current();
        return;
      }

      iteration += 1 / 3;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [text, characters, isAnimating]);

  useEffect(() => {
    if (trigger === "mount") {
      const timer = setTimeout(scramble, 100);
      return () => clearTimeout(timer);
    }
  }, [trigger, scramble]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseEnter = () => {
    if (trigger === "hover" && !isAnimating) {
      scramble();
    }
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{ fontFamily: "monospace" }}
    >
      {displayText || text}
    </span>
  );
}

```

## Usage

```tsx
<TextScramble text="Hello, World!" className="text-4xl font-bold" />
```


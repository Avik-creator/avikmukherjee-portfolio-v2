---
title: "Magnetic Button"
description: "A button that responds to cursor proximity with a magnetic pull effect. Creates an engaging, playful interaction."
year: "2025"
---

# Magnetic Button

A button that responds to cursor proximity with a magnetic pull effect. Creates an engaging, playful interaction.

## Features

- Smooth cursor-following animation
- Customizable magnetic strength
- Works with any child content
- Touch-device compatible

## Dependencies

motion

## Component Code

```tsx
"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

```

## Usage

```tsx
<MagneticButton strength={0.4}>
      <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium shadow-lg">
        Hover & move around me
      </button>
    </MagneticButton>
```


import { ReactNode } from "react";

interface AnimatedListItemProps {
  children: ReactNode;
  index: number;
  baseDelay?: number;
  delayMultiplier?: number;
  animationClass?: string;
}

/**
 * Wrapper component for list items with staggered fade-up animations
 * Automatically calculates animation delay based on index
 */
export default function AnimatedListItem({
  children,
  index,
  baseDelay = 0.1,
  delayMultiplier = 0.1,
  animationClass = "animate-[slideFadeUp_0.6s_ease-out]",
}: AnimatedListItemProps) {
  return (
    <div
      className={animationClass}
      style={{
        animationDelay: `${(index + 1) * delayMultiplier + baseDelay}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}


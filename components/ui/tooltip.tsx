"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TooltipContext = React.createContext<TooltipContextValue | undefined>(undefined);

interface TooltipProps {
  children: React.ReactNode;
  delayDuration?: number;
}

export function Tooltip({ children, delayDuration = 200 }: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setOpen(true), delayDuration);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(false);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export function TooltipTrigger({ asChild, children }: TooltipTriggerProps) {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("TooltipTrigger must be used within a Tooltip");
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<any>,
      {
        "data-tooltip-trigger": true,
      } as any
    );
  }

  return <>{children}</>;
}

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
}

export function TooltipContent({ children, className, side = "top" }: TooltipContentProps) {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("TooltipContent must be used within a Tooltip");
  }

  if (!context.open) {
    return null;
  }

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className={cn(
        "absolute z-50 px-3 py-1.5 text-sm rounded-md",
        "bg-gray-900 dark:bg-neutral-800 text-white dark:text-neutral-100",
        "shadow-lg border border-gray-800 dark:border-neutral-700",
        sideClasses[side],
        className
      )}
      role="tooltip"
    >
      {children}
      <div
        className={cn(
          "absolute w-2 h-2 bg-gray-900 dark:bg-neutral-800 border border-gray-800 dark:border-neutral-700 rotate-45",
          side === "top" && "top-full left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-0 border-l-0",
          side === "bottom" && "bottom-full left-1/2 -translate-x-1/2 translate-y-1/2 border-b-0 border-r-0",
          side === "left" && "left-full top-1/2 -translate-y-1/2 -translate-x-1/2 border-l-0 border-b-0",
          side === "right" && "right-full top-1/2 -translate-y-1/2 translate-x-1/2 border-r-0 border-t-0"
        )}
      />
    </div>
  );
}

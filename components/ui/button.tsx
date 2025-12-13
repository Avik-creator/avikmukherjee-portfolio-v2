import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-neutral-100 dark:text-gray-900 dark:hover:bg-neutral-200",
      ghost: "hover:bg-gray-100 dark:hover:bg-neutral-800",
      outline: "border border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800",
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<any>,
        {
          ...props,
          className: cn(baseStyles, variants[variant], className, (children as React.ReactElement<any>).props?.className),
          ref,
        } as any
      );
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

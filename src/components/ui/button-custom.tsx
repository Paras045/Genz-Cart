
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonCustomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "pill"
    | "minimal";
  size?: "default" | "sm" | "lg" | "icon" | "full";
  icon?: React.ReactNode;
  loading?: boolean;
  asChild?: boolean;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      children,
      icon,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // Variants
          {
            // Default variant
            "bg-primary text-primary-foreground hover:opacity-90 active:opacity-100":
              variant === "default",
              
            // Outline variant
            "border border-primary bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10":
              variant === "outline",
              
            // Ghost variant
            "bg-transparent text-foreground hover:bg-secondary active:bg-secondary/80":
              variant === "ghost",
              
            // Link variant
            "bg-transparent text-primary underline-offset-4 hover:underline":
              variant === "link",
              
            // Pill variant
            "rounded-full bg-primary text-primary-foreground hover:opacity-90 active:opacity-100":
              variant === "pill",
              
            // Minimal variant
            "bg-transparent text-foreground hover:bg-transparent hover:opacity-80":
              variant === "minimal",
          },
          
          // Sizes
          {
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-12 px-6 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
            "w-full h-10 px-4 py-2 text-sm": size === "full",
          },
          
          // Focus rings
          variant !== "minimal" && "focus-visible:ring-primary",
          
          // Animation 
          !loading && "transform transition-transform active:scale-[0.98]",
          
          // Border radius (not for pill variant)
          variant !== "pill" && "rounded-md",
          
          className
        )}
        {...props}
      >
        {loading ? (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        ) : (
          <>
            {icon && <span className={cn("mr-2", !children && "mr-0")}>{icon}</span>}
            {children}
          </>
        )}
      </button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gradient-to-b from-champagne-bright via-champagne to-champagne-deep text-obsidian shadow-gold hover:brightness-110 active:scale-[0.98]",
        outline:
          "border border-champagne-dim/60 bg-transparent text-champagne hover:border-champagne hover:bg-champagne/10",
        ghost: "text-ivory-dim hover:bg-obsidian-card hover:text-champagne",
        bordeaux:
          "bg-gradient-to-b from-bordeaux-glow to-bordeaux-deep text-ivory shadow-gold-soft hover:brightness-110 active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-14 px-9 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "gold", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };

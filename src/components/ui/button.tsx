import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group will-change-transform",
  {
    variants: {
      variant: {
        default: "glass text-white shadow-lg hover:scale-105 hover:shadow-xl border border-white/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/30 before:to-accent/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        destructive:
          "glass text-white shadow-lg hover:scale-105 hover:shadow-xl border border-red-500/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500/30 before:to-red-600/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        outline:
          "glass border-2 border-white/40 text-foreground hover:text-white hover:scale-105 hover:shadow-lg backdrop-blur-md before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/20 before:to-accent/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        secondary:
          "glass text-white/90 shadow-md hover:scale-105 hover:shadow-lg border border-white/15 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        ghost: "glass text-foreground hover:text-white hover:scale-105 border border-transparent hover:border-white/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/15 before:to-primary/15 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 transition-all duration-200",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm rounded-md",
        sm: "h-10 px-4 text-xs rounded-md",
        lg: "h-14 px-8 text-base rounded-md",
        icon: "h-12 w-12 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    if (asChild) {
      // When using asChild, pass children directly to Slot without extra wrappers
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    // When not using asChild, we can add our glass effects
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2 font-medium">
          {children}
        </span>
        {/* Optimized glass reflection effect */}
        <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 glass border backdrop-blur-md hover:scale-105 will-change-transform",
  {
    variants: {
      variant: {
        default:
          "text-white border-white/30 bg-gradient-to-r from-primary/25 to-accent/25 hover:from-primary/35 hover:to-accent/35 shadow-md hover:shadow-lg",
        secondary:
          "text-white/85 border-white/20 bg-gradient-to-r from-white/15 to-white/8 hover:from-white/25 hover:to-white/15 shadow-sm hover:shadow-md",
        destructive:
          "text-white border-red-500/40 bg-gradient-to-r from-red-500/25 to-red-600/25 hover:from-red-500/35 hover:to-red-600/35 shadow-md hover:shadow-lg",
        outline: 
          "text-white/75 hover:text-white border-white/40 hover:border-white/60 bg-white/8 hover:bg-white/15 shadow-sm hover:shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

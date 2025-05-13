import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        'text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl lg:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

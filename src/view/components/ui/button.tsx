import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-4 py-2 rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/80",
        secondary: "bg-white text-primary hover:bg-white/90",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, children, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
}

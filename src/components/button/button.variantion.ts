import { cva, type VariantProps } from "class-variance-authority";

export type ButtonVariants = VariantProps<typeof variants>;

const variant = {
  primary: `btn-gradient text-white-50 btn-wipe`,
  secondary:
    "bg-transparent  hover:text-primary hover:cursor-pointer transition-colors duration-100",
};
const size = {
  small: ["text-xs", "px-2", "py-1.5"],
  medium: ["text-sm", "px-3", "py-2"],
  large: [
    "text-base",
    "md:px-4",
    "md:py-2.5",
    "px-3",
    "py-2",
    "sm:px-3.5",
    "sm:py-2.5",
  ],
};

export const variants = cva(
  ["flex", "items-center", "gap-2", "uppercase", "rounded-xs", "font-normal"],
  {
    variants: {
      variant,
      size,
    },
  }
);

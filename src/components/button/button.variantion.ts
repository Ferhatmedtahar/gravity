import { cva, type VariantProps } from "class-variance-authority";

export type ButtonVariants = VariantProps<typeof variants>;

export const gradient =
  "bg-linear-135 from-[#665DCD] via-45% via-[#5FA4E6] to-[#D2AB67]";
const variant = {
  primary: `${gradient} text-white`,
  secondary: "bg-transparent text-white",
};
const size = {
  small: ["text-xs", "px-2", "py-1.5"],
  medium: ["text-sm", "px-3", "py-2"],
  large: ["text-base", "px-4", "py-2.5"],
};

export const variants = cva(["flex", "items-center", "gap-2", "uppercase"], {
  variants: {
    variant,
    size,
  },
});

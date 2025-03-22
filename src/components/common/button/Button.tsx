import * as motion from "motion/react-client";
import React from "react";
import { variants } from "./button.variantion";
type ButtonProps = {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  ariaLabel?: string;
};
export default function Button({
  icon,
  variant,
  size,
  children,
  ariaLabel,
}: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={variants({ variant, size })}
      aria-label={
        ariaLabel || typeof children === "string" ? "button" : undefined
      }
    >
      {icon}
      {children}
    </motion.button>
  );
}

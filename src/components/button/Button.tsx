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
    <button
      className={variants({ variant, size })}
      aria-label={
        ariaLabel || typeof children === "string" ? "button" : undefined
      }
    >
      {icon}
      {children}
    </button>
  );
}

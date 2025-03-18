import React from "react";
import { variants } from "./button.variantion";

type ButtonProps = {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
};
export default function Button({ icon, variant, size, children }: ButtonProps) {
  return (
    <button className={variants({ variant, size })}>
      {icon}
      {children}
    </button>
  );
}

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { checkboxStyles } from "./Checkbox.css";
import type { CheckedState } from "@radix-ui/react-checkbox";

type CheckBoxVariants = keyof typeof checkboxStyles;

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: CheckBoxVariants;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={`${checkboxStyles[variant]} ${className}`}
      {...props}
    >
      <CheckboxPrimitive.Indicator style={{ height: "16px", width: "16px" }}>
        <Check size={16} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
export type { CheckedState };

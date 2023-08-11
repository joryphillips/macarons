import * as React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  disabledStyle,
  buttonStyleVariants,
  buttonSizeVariants,
  buttonWidthVariants,
  loadingSpinner,
} from "./Button.css";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { base as baseReset, button as buttonReset } from "~/styles/reset.css";
import { Loader2 } from "lucide-react";

type ButtonVariant = keyof typeof buttonStyleVariants;
type ButtonSize = keyof typeof buttonSizeVariants;
type ButtonWidth = keyof typeof buttonWidthVariants;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: ButtonWidth;
  isDisabled?: boolean;
  isLoading?: boolean;
  asChild?: boolean;
  children: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      width = "auto",
      isDisabled = false,
      isLoading = false,
      asChild = false,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={type}
        disabled={isDisabled}
        className={clsx(
          baseReset,
          buttonReset,
          buttonStyleVariants[variant],
          buttonSizeVariants[size],
          buttonWidthVariants[width],
          isDisabled && disabledStyle,
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading && !asChild /* asChild does not work with spinner **/ ? (
          <Loader2 className={loadingSpinner} />
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };

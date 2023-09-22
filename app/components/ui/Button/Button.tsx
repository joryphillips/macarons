import * as React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  disabledStyle,
  buttonJustifyContentVariants,
  buttonStyleVariants,
  buttonSizeVariants,
  buttonWidthVariants,
  loadingSpinner,
  buttonPrefixIcon,
  buttonSuffixIcon,
} from "./Button.css";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { base as baseReset, button as buttonReset } from "~/styles/reset.css";
import type { LucideIcon } from "lucide-react";
import { Loader2 } from "lucide-react";
import { truncate } from "../Text/Text.css";

type ButtonVariant = keyof typeof buttonStyleVariants;
type ButtonSize = keyof typeof buttonSizeVariants;
type ButtonWidth = keyof typeof buttonWidthVariants;
type ButtonJustifyContent = keyof typeof buttonJustifyContentVariants;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: ButtonWidth;
  justifyContent?: ButtonJustifyContent;
  isDisabled?: boolean;
  isLoading?: boolean;
  asChild?: boolean;
  prefixIcon?: LucideIcon;
  suffixIcon?: LucideIcon;
  children: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      width = "auto",
      justifyContent = "center",
      isDisabled = false,
      isLoading = false,
      asChild = false,
      type = "button",
      prefixIcon,
      suffixIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const Prefix = prefixIcon;
    const Suffix = suffixIcon;
    return (
      <Comp
        type={type}
        disabled={isDisabled}
        className={clsx(
          baseReset,
          buttonReset,
          buttonStyleVariants[variant],
          buttonSizeVariants[size],
          size !== "icon" && buttonWidthVariants[width],
          buttonJustifyContentVariants[justifyContent],
          isDisabled && disabledStyle,
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading && !asChild /* asChild does not work with spinner **/ ? (
          <Loader2 className={loadingSpinner} />
        ) : (
          <>
            {Prefix && <Prefix className={buttonPrefixIcon} />}
            {size === "icon" ? (
              children
            ) : (
              <span className={truncate}>{children}</span>
            )}
            {Suffix && <Suffix className={buttonSuffixIcon} />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };

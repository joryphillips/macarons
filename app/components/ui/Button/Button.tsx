import * as React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  buttonJustifyContentVariants,
  buttonStyleVariants,
  buttonSizeVariants,
  buttonWidthVariants,
  loadingSpinner,
  buttonPrefixIcon,
  buttonSuffixIcon,
  iconSizeVariants,
  noBorderStyle,
} from "./Button.css";
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
  prefixIcon?: LucideIcon;
  suffixIcon?: LucideIcon;
  children: ReactNode;
}

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: keyof typeof iconSizeVariants;
  isDisabled?: boolean;
  isLoading?: boolean;
  showBorder?: boolean;
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
      type = "button",
      prefixIcon,
      suffixIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = "button";
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
          buttonWidthVariants[width],
          buttonJustifyContentVariants[justifyContent],
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Loader2 className={loadingSpinner} />
        ) : (
          <>
            {Prefix && <Prefix className={buttonPrefixIcon} />}
            <span className={truncate}>{children}</span>
            {Suffix && <Suffix className={buttonSuffixIcon} />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      isDisabled = false,
      isLoading = false,
      showBorder = false,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = "button";

    return (
      <Comp
        type={type}
        disabled={isDisabled}
        className={clsx(
          baseReset,
          buttonReset,
          buttonStyleVariants[variant],
          iconSizeVariants[size],
          !showBorder && noBorderStyle,
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? <Loader2 className={loadingSpinner} /> : <>{children}</>}
      </Comp>
    );
  }
);
IconButton.displayName = "IconButton";

export { Button, IconButton };

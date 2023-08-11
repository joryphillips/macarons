import { textScale, textAlignStyles } from "./Text.css";
import type { AllHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import type { Sprinkles } from "~/styles/sprinkles.css";
import { Box } from "../Layout/Box";

type TextElementTypes =
  | HTMLSpanElement
  | HTMLParagraphElement
  | HTMLLabelElement
  | HTMLHeadingElement;

type HTMLTextProperties = Omit<
  AllHTMLAttributes<TextElementTypes>,
  "as" | "className" | "color" | "height" | "width" | "size"
>;

export interface TextProps extends HTMLTextProperties {
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "li";
  size?: keyof typeof textScale;
  fontWeight?: Sprinkles["fontWeight"];
  color?: Sprinkles["color"];
  cursor?: Sprinkles["cursor"];
  align?: "left" | "center" | "right" | "justify";
  children: ReactNode;
  className?: string;
}

const Text = forwardRef<
  HTMLSpanElement & HTMLParagraphElement & HTMLLabelElement,
  TextProps
>(
  (
    {
      as = "span",
      align = "left",
      size = "md",
      fontWeight,
      color,
      cursor,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        as={as}
        className={clsx(textAlignStyles[align], textScale[size], className)}
        cursor={cursor}
        color={color}
        fontWeight={fontWeight}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";

export { Text };

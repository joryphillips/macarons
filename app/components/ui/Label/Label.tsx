import { labelStyles } from "./Label.css";
import clsx from "clsx";
import { textScale } from "../Text/Text.css";
import { Text } from "../Text/Text";

import type { TextProps } from "../Text/Text";
import type { AllHTMLAttributes } from "react";
import type { Sprinkles } from "~/styles/sprinkles.css";

type HTMLLabelProperties = Omit<
  AllHTMLAttributes<HTMLLabelElement>,
  "as" | "className" | "color" | "height" | "width" | "size"
>;

type TextLabelProps = HTMLLabelProperties & TextProps;

interface LabelProps extends TextLabelProps {
  size?: keyof typeof textScale;
  fontWeight?: Sprinkles["fontWeight"];
  htmlFor?: string;
  cursor?: Sprinkles["cursor"];
}

export function Label({
  size = "sm",
  fontWeight = "medium",
  color = "lowContrastText",
  className,
  htmlFor,
  cursor,
  ...props
}: LabelProps) {
  return (
    <Text
      as="label"
      size={size}
      cursor={cursor}
      htmlFor={htmlFor}
      fontWeight={fontWeight}
      color={color}
      className={clsx(labelStyles, size && textScale[size], className)}
      {...props}
      onMouseDown={(event) => {
        props.onMouseDown?.(event);
        // prevent text selection when double clicking label
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }}
    />
  );
}

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { dividerStyles } from "./Divider.css";

type DividerProps = React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
>;

export const Divider = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  DividerProps
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={`
        ${dividerStyles[orientation]}
        ${className}
      `}
        {...props}
      />
    );
  }
);
Divider.displayName = SeparatorPrimitive.Root.displayName;

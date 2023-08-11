import { forwardRef } from "react";
import type { BoxProps } from "~/components/ui/Layout/Box";
import { Box } from "~/components/ui/Layout/Box";
import type { Sprinkles } from "~/styles/sprinkles.css";

export interface StackProps extends BoxProps {
  spacing?: Sprinkles["gap"];
  alignItems?: Sprinkles["alignItems"];
  justify?: Sprinkles["justifyContent"];
  direction?: Sprinkles["flexDirection"];
}

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      children,
      spacing = 4,
      alignItems = "center",
      justify = "flex-start",
      direction = "column",
      ...props
    }: StackProps,
    ref
  ) => {
    return (
      <Box
        display="flex"
        flexDirection={direction}
        alignItems={alignItems}
        justifyContent={justify}
        gap={spacing}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
Stack.displayName = "Stack";

export const HStack = forwardRef<HTMLElement, Omit<StackProps, "direction">>(
  (props, ref) => {
    return <Stack {...props} ref={ref} direction="row" />;
  }
);
HStack.displayName = "HStack";

export const VStack = forwardRef<HTMLElement, Omit<StackProps, "direction">>(
  (props, ref) => {
    return <Stack {...props} ref={ref} direction="column" />;
  }
);
VStack.displayName = "VStack";

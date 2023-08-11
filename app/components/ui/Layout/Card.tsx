import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { BoxProps } from "./Box";
import { Box } from "./Box";

export interface CardProps extends BoxProps {
  boxShadow?: BoxProps["boxShadow"];
  children: ReactNode;
}

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ boxShadow, children, ...props }, ref) => {
    return (
      <Box
        boxShadow={boxShadow}
        className={props.className}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
Card.displayName = "Card";

import { AlertIcon } from "./AlertIcon";
import type { ReactNode } from "react";
import { Box } from "../Layout/Box";
import type { BoxProps } from "../Layout/Box";
import { alertStyles } from "./Alert.css";

interface AlertProps extends BoxProps {
  status?: keyof typeof alertStyles;
  showIcon?: boolean;
  children?: ReactNode;
}

export function Alert({
  status = "info",
  showIcon = true,
  children,
  ...props
}: AlertProps) {
  return (
    <Box
      borderRadius="sm"
      borderStyle="solid"
      borderWidth="double"
      padding={3}
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={2}
      className={alertStyles[status]}
      {...props}
    >
      {showIcon && (
        <Box display="flex" alignItems="center" justifyContent="center">
          {" "}
          <AlertIcon status={status} width="1.5rem" height="1.5rem" />
        </Box>
      )}
      {children}
    </Box>
  );
}

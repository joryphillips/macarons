import clsx from "clsx";
import type { BoxProps } from "../Layout/Box";
import { Box } from "../Layout/Box";
import { Text } from "../Text/Text";
import { badgeText, badgeVariants } from "./Badge.css";

interface BadgeProps extends BoxProps {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ variant = "standard", ...props }: BadgeProps) {
  return (
    <Box className={clsx(badgeVariants[variant], props.className)} {...props}>
      <Text className={badgeText}>{props.children}</Text>
    </Box>
  );
}

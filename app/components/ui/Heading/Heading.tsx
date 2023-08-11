import type { TextProps } from "../Text/Text";
import { Text } from "../Text/Text";

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends TextProps {
  as?: HeadingTags;
}

export const Heading = ({ as = "h2", children, ...props }: HeadingProps) => {
  return (
    <Text
      as={as}
      fontWeight="semiBold"
      size="xl"
      className={props.className}
      {...props}
    >
      {children}
    </Text>
  );
};

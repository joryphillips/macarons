import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { VStack, Text, Heading } from "~/components/ui";
import { CustomExample } from "./CustomExample";
import { ResponsiveExample } from "./ResponsiveExample";
import { VStackExample } from "./VStackExample";
import { HStackExample } from "./HStackExample";
import { GapExample } from "./GapExample";
import ResponsiveExampleString from "./ResponsiveExample?raw";
import VStackExampleString from "./VStackExample?raw";
import HStackExampleString from "./HStackExample?raw";
import GapExampleString from "./GapExample?raw";
import CustomExampleString from "./CustomExample?raw";

export default function StackRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading>Stack</Heading>
        <Text as="p">
          The stack component is used to layout elements in a vertical or
          horizontal stack.
        </Text>
      </VStack>

      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading size="md">Responsive Stack</Heading>
        <Text as="p">
          The base stack component can be used in combination with a media query
          to dynamically change the direction of the stack based on the width of
          the screen.
        </Text>
        <ResponsiveExample />
        <SyntaxHighlighter>{ResponsiveExampleString}</SyntaxHighlighter>
      </VStack>

      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading size="md">Vertical Stack</Heading>
        <Text>The VStack implements a flex column.</Text>
        <VStackExample />
        <SyntaxHighlighter>{VStackExampleString}</SyntaxHighlighter>
      </VStack>

      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading size="md">Horizontal Stack</Heading>
        <Text>The HStack implements a flex row.</Text>
        <HStackExample />
        <SyntaxHighlighter>{HStackExampleString}</SyntaxHighlighter>
      </VStack>

      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading size="md">Gap</Heading>
        <Text>
          The gap prop can be used to add space between children of the stack. A
          prop called "spacing" is also available as an alias for gap.
        </Text>
        <GapExample />
        <SyntaxHighlighter>{GapExampleString}</SyntaxHighlighter>
      </VStack>

      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading size="md">Customization</Heading>
        <Text>
          All props available to Box can be used with a Stack, HStack, or VStack
          component.
        </Text>
        <CustomExample />
        <SyntaxHighlighter>{CustomExampleString}</SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

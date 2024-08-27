import { VStack, Heading, Text } from "~/components/ui";
import { TooltipExample } from "./TooltipExample";
import { TooltipCustomExample } from "./TooltipCustomExample";
import { TooltipFullyCustomExample } from "./TooltipFullyCustomEx";
import TooltipExString from "./TooltipExample?raw";
import TooltipCustomExString from "./TooltipCustomExample?raw";
import TooltipFullyCustomExString from "./TooltipFullyCustomEx?raw";
import FullCustomStylesString from "./fullyCustomExampleString?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

export default function TooltipRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Tooltip</Heading>
      <Text as="p">
        The tooltip component is used to display additional information when a
        user hovers over a trigger element. The base Radix tooltip content
        component will position itself dynamically based on proximity to window
        edges.
      </Text>
      <VStack gap={4} width="100%" alignItems="flex-start">
        <TooltipExample />
        <SyntaxHighlighter>{TooltipExString}</SyntaxHighlighter>
      </VStack>
      <VStack gap={4} width="100%" alignItems="flex-start">
        <TooltipCustomExample />
        <SyntaxHighlighter>{TooltipCustomExString}</SyntaxHighlighter>
      </VStack>
      <VStack gap={4} width="100%" alignItems="flex-start">
        <TooltipFullyCustomExample />
        <SyntaxHighlighter>{TooltipFullyCustomExString}</SyntaxHighlighter>
        <SyntaxHighlighter>{FullCustomStylesString}</SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

import { Heading, Text, VStack } from "~/components/ui";
import { PopoverExample } from "./PopoverExample";
import popoverExampleString from "./PopoverExample?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

export default function PopoverRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Popover</Heading>
      <Text as="p">
        The popover component is used to display additional information or
        actions when a user interacts with a trigger element.
      </Text>
      <PopoverExample />
      <SyntaxHighlighter trimToReactReturnValue>
        {popoverExampleString}
      </SyntaxHighlighter>
    </VStack>
  );
}

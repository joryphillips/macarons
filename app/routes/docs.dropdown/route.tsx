import { VStack, Heading, Text } from "~/components/ui";
import { DropdownExample } from "./DropdownExample";
import DropdownExampleString from "./DropdownExample?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

export default function DropdownRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Dropdown</Heading>
      <Text as="p">
        The dropdown component is used to show a list of actions or options when
        a user clicks on a trigger element. It is distinguished from a Select
        component in that it is not intended to store or display a selected
        value.
      </Text>
      <DropdownExample />
      <SyntaxHighlighter>{DropdownExampleString}</SyntaxHighlighter>
    </VStack>
  );
}

import { VStack, Heading, Text } from "~/components/ui";
import { SelectExample } from "./SelectExample";
import SelectExampleString from "./SelectExample?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

export default function SelectRoute() {
  return (
    <VStack gap={4} width="100%" alignItems="flex-start">
      <Heading as="h1" size="xl">
        Select
      </Heading>
      <Text as="p">
        A dropdown component that allows users to choose among a list of
        options. The text displayed in the dropdown and the selected value can
        be different.
      </Text>

      <SelectExample />

      <SyntaxHighlighter>{SelectExampleString}</SyntaxHighlighter>
      <Text as="p">
        In the example above, we use a custom prop called <code>truncate</code>{" "}
        to shorten the text and add an ellipse to the third item in the
        dropdown.
      </Text>
    </VStack>
  );
}

import { VStack, Heading, Text } from "~/components/ui";
import ReactHighlightSyntax from "react-highlight-syntax";
import { SelectExample } from "./SelectExample";
import SelectExampleString from "./SelectExample?raw";

export default function SelectRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading as="h1" size="xl">
        Select
      </Heading>
      <Text as="p">
        A dropdown component that allows users to choose among a list of
        options. The text displayed in the dropdown and the selected value can
        be different.
      </Text>

      <SelectExample />

      <ReactHighlightSyntax language="TypeScript" theme="AtomOneLight">
        {SelectExampleString}
      </ReactHighlightSyntax>
    </VStack>
  );
}

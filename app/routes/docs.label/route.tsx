import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { Heading, Text, VStack } from "~/components/ui";
import { DefaultLabelExample } from "./DefaultExample";
import { CustomLabelExample } from "./CustomExample";
import defaultExampleString from "./DefaultExample?raw";
import customLabelExampleString from "./CustomExample?raw";

export default function LabelRoute() {
  return (
    <VStack
      as="article"
      maxWidth="prose"
      gap={6}
      width="100%"
      alignItems="flex-start"
    >
      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading as="h1" size="xl">
          Label
        </Heading>
        <VStack gap={3} alignItems="flex-start" as="section">
          <Text as="p">
            Label returns a Text component that is styled as a label, uses the
            "label" tag, and has a "htmlFor" attribute. Label prevents its child
            text from being selected when double clicked, to allow the element
            it is associated with to instead be focused.
          </Text>
          <Text as="p">
            Label props extend Text props, so all the same color and size
            options are available.
          </Text>
        </VStack>
      </VStack>

      <VStack gap={4} alignItems="flex-start" as="section">
        <Heading as="h2" size="lg">
          Default
        </Heading>
        <DefaultLabelExample />
        <SyntaxHighlighter trimToReactReturnValue>
          {defaultExampleString}
        </SyntaxHighlighter>
      </VStack>

      <VStack gap={4} alignItems="flex-start" as="section">
        <Heading as="h2" size="lg">
          Custom color and sizes
        </Heading>
        <CustomLabelExample />
        <SyntaxHighlighter trimToReactReturnValue>
          {customLabelExampleString}
        </SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

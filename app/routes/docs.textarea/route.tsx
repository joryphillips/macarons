import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { VStack, Heading, Text, TextArea } from "~/components/ui";

export default function TextAreaRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack gap={4} alignItems="flex-start" width="100%" as="section">
        <Heading as="h1" size="xl">
          Textarea
        </Heading>
        <Text as="p">
          The Textarea component wraps the native textarea element, and is used
          to collect multi-line text input from users, often in a form.
        </Text>
      </VStack>
      <VStack width="100%" alignItems="flex-start">
        <Heading as="h2" size="lg">
          Default
        </Heading>
        <TextArea placeholder="Enter your message here" />
        <SyntaxHighlighter>{`<TextArea placeholder="Enter your message here" />`}</SyntaxHighlighter>
      </VStack>
      <VStack width="100%" alignItems="flex-start">
        <Heading as="h2" size="lg">
          Invalid
        </Heading>

        <TextArea placeholder="Invalid state" isInvalid />
        <SyntaxHighlighter>{`<TextArea placeholder="Invalid state" isInvalid />`}</SyntaxHighlighter>
      </VStack>
      <VStack width="100%" alignItems="flex-start">
        <Heading as="h2" size="lg">
          Disabled
        </Heading>
        <TextArea placeholder="Disabled state" isDisabled />
        <SyntaxHighlighter>{`<TextArea placeholder="Disabled state" isDisabled />`}</SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

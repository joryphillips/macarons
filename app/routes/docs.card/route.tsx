import { Heading, Text, VStack } from "~/components/ui";
import { CardExample } from "./CardExample";
import CardExampleString from "./CardExample?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

export default function CardRoute() {
  return (
    <VStack gap={4} width="100%" alignItems="flex-start">
      <Heading>Card</Heading>
      <Text as="p">
        The card component is used to group related content together. It is not
        that different than Stack or Box — and in fact, extends the Box
        component. As a commonly used component and is provided here for
        convenience and as an example.
      </Text>
      <CardExample />
      <SyntaxHighlighter>{CardExampleString}</SyntaxHighlighter>
    </VStack>
  );
}

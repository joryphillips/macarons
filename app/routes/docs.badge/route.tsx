import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { VStack, Heading, Text, Badge } from "~/components/ui";

const badgeStandard = `<Badge variant="standard">Standard</Badge>`;
const badgeInfo = `<Badge variant="info">Info</Badge>`;
const badgeSuccess = `<Badge variant="success">Success</Badge>`;
const badgeWarning = `<Badge variant="warning">Warning</Badge>`;
const badgeError = `<Badge variant="error">Error</Badge>`;

export default function BadgeRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading>Badge</Heading>
        <Text as="p">
          The badge component is used to display a small amount of information
          like a count or status.
        </Text>
      </VStack>
      <Badge>Badge</Badge>
      <Heading size="md">Variants</Heading>
      <VStack gap={6} alignItems="flex-start">
        <VStack gap={2} alignItems="flex-start">
          <Badge variant="standard">Standard</Badge>
          <SyntaxHighlighter>{badgeStandard}</SyntaxHighlighter>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Badge variant="info">Info</Badge>
          <SyntaxHighlighter>{badgeInfo}</SyntaxHighlighter>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Badge variant="success">Success</Badge>
          <SyntaxHighlighter>{badgeSuccess}</SyntaxHighlighter>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Badge variant="warning">Warning</Badge>
          <SyntaxHighlighter>{badgeWarning}</SyntaxHighlighter>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Badge variant="error">Error</Badge>
          <SyntaxHighlighter>{badgeError}</SyntaxHighlighter>
        </VStack>
      </VStack>
    </VStack>
  );
}

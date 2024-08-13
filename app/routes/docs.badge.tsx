import { VStack, Heading, Text, Badge } from "~/components/ui";

export default function BadgeRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Badge</Heading>
      <Text>
        The badge component is used to display a small amount of information
        like a count or status.
      </Text>
      <Badge>Badge</Badge>
      <Heading size="md">Variants</Heading>
      <VStack gap={2} alignItems="flex-start">
        <Badge variant="standard">Standard</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </VStack>
    </VStack>
  );
}

import { Card, Heading, Text, VStack } from "~/components/ui";

export default function CardRoute() {
  return (
    <VStack gap={4} width="100%" alignItems="flex-start">
      <Heading>Card</Heading>
      <Text as="p">
        The card component is used to group related content together. It is not
        that different than Stack or Box, but is a commonly used component and
        is provided here as an example.
      </Text>
      <Card
        boxShadow="base"
        borderRadius="md"
        display="flex"
        flexDirection="column"
        padding={6}
        gap={4}
        backgroundColor="elementBackground"
      >
        <Heading size="lg">Card Content</Heading>
        <Text size="sm">
          This is the content of the card. You can put anything you want in
          here.
        </Text>
      </Card>
    </VStack>
  );
}

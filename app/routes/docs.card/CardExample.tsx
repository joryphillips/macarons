import { Card, Heading, Text } from "~/components/ui";

export function CardExample() {
  return (
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
        This is the content of the card. You can put anything you want in here.
      </Text>
    </Card>
  );
}

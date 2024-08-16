import { Divider, Heading, Text, VStack } from "~/components/ui";

export default function DividerRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Divider</Heading>
      <Text as="p">
        The Divider component will automatically fill the width of its
        container.{" "}
      </Text>
      <Text as="p">Content above the divider</Text>
      <Divider />
      <Text as="p">Content below the divider</Text>
    </VStack>
  );
}

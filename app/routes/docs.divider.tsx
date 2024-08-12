import { Divider, Heading, Text, VStack } from "~/components/ui";

export default function DividerRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Divider</Heading>
      <Text>Content above the divider</Text>
      <Divider />
      <Text>Content below the divider</Text>
    </VStack>
  );
}

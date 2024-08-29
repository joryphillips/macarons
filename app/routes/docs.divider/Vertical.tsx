import { HStack, Divider, Text, VStack } from "~/components/ui";

export function VerticalDividerExample() {
  return (
    <HStack justifyContent="space-between" gap={4} width="100%" height="jumbo">
      <VStack
        width="100%"
        height="100%"
        backgroundColor="infoElementBackground"
        justifyContent="center"
      >
        <Text as="p">Content before the divider</Text>
      </VStack>
      <Divider orientation="vertical" />
      <VStack
        width="100%"
        height="100%"
        backgroundColor="infoElementBackground"
        justifyContent="center"
      >
        <Text as="p">Content after the divider</Text>
      </VStack>
    </HStack>
  );
}

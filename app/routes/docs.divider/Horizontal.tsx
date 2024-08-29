import { VStack, Divider, Box, Text } from "~/components/ui";

export function HorizontalDividerExample() {
  return (
    <VStack alignItems="center" gap={4} width="100%">
      <Box width="100%" padding={6} backgroundColor="infoElementBackground">
        <Text as="p">Content above the divider</Text>
      </Box>
      <Divider />
      <Box width="100%" padding={6} backgroundColor="infoElementBackground">
        <Text as="p">Content below the divider</Text>
      </Box>
    </VStack>
  );
}

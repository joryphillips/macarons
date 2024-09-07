import { VStack, Divider, Box, Text } from "~/components/ui";

export function NarrowHorizontalDividerExample() {
  return (
    <VStack alignItems="center" gap={4} width="100%">
      <VStack width="3xs">
        <Box
          width="100%"
          paddingX={6}
          paddingY={4}
          backgroundColor="infoElementBackground"
        >
          <Text as="p">Narrow content above the divider</Text>
        </Box>
        <Divider />
        <Box
          width="100%"
          paddingX={6}
          paddingY={4}
          backgroundColor="infoElementBackground"
        >
          <Text as="p">Narrow content below the divider</Text>
        </Box>
      </VStack>
    </VStack>
  );
}

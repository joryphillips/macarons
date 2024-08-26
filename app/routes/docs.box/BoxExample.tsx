import { Box, Text } from "~/components/ui";

export function BoxExample() {
  return (
    <Box
      padding={4}
      borderRadius="md"
      borderStyle="solid"
      borderColor="elementBorder"
      backgroundColor="elementBackground"
      color="highContrastText"
    >
      <Text>Box</Text>
    </Box>
  );
}

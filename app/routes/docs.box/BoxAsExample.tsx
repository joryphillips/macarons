import { Box } from "~/components/ui";

export function BoxAsExample() {
  return (
    <Box
      as="button"
      padding={4}
      borderRadius="lg"
      backgroundColor="successSolidBackground"
      color="textOnSolidBackground"
    >
      Button
    </Box>
  );
}

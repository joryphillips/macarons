import { Box } from "~/components/ui";

export function ThreeBoxes() {
  return (
    <>
      <Box
        padding={4}
        borderRadius="md"
        borderStyle="solid"
        borderColor="infoElementBorder"
        backgroundColor="infoElementBackground"
        color="infoHighContrastText"
      >
        Item 1
      </Box>
      <Box
        padding={4}
        borderRadius="md"
        borderStyle="solid"
        borderColor="warningElementBorder"
        backgroundColor="warningElementBackground"
        color="warningHighContrastText"
      >
        Item 2
      </Box>
      <Box
        padding={4}
        borderRadius="md"
        borderStyle="solid"
        borderColor="destructiveElementBorder"
        backgroundColor="destructiveElementBackground"
        color="destructiveHighContrastText"
      >
        Item 3
      </Box>
    </>
  );
}

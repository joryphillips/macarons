import { VStack, HStack, Box, Heading } from "../ui";
import { MacaronStack } from "./MacaronStack";

export function Titlemark() {
  return (
    <VStack width="100%" gap={4} alignItems="center" marginY={2}>
      <Box width="100%">
        <Heading
          as="h1"
          color="primaryLowContrastText"
          align="center"
          size="jumbo"
          style={{
            fontFamily: "Georgia, Cambria, serif",
            fontWeight: "bold",
            fontStyle: "italic",
            transform: "scaleX(0.86)",
          }}
        >
          macarons
        </Heading>
        <HStack gap={0} justifyContent="center" flexWrap="nowrap">
          <MacaronStack width="40px" count={12} />
        </HStack>
      </Box>
      <Heading as="h2" size="md" color="primaryLowContrastText" align="center">
        Design System and Styled UI Components
      </Heading>
    </VStack>
  );
}

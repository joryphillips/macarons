import { VStack, HStack, Heading } from "../ui";
import { titleMarkTextStyles } from "./macaron.css";
import { MacaronStack } from "./MacaronStack";
import { MacaronsTitleSVG } from "./MacaronsTitleSVG";

export function Titlemark() {
  return (
    <VStack width="100%" gap={4} alignItems="center" marginY={2}>
      <VStack width="100%">
        <MacaronsTitleSVG className={titleMarkTextStyles} height="2rem" />
        <HStack width="100%" gap={0} justifyContent="center" flexWrap="nowrap">
          <MacaronStack width="36px" count={12} />
        </HStack>
      </VStack>
      <Heading as="h2" size="md" color="primaryLowContrastText" align="center">
        Design System and Styled UI Components
      </Heading>
    </VStack>
  );
}

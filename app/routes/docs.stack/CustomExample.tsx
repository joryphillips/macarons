import { HStack } from "~/components/ui";
import { ThreeBoxes } from "./ThreeBoxes";

export function CustomExample() {
  return (
    <HStack
      backgroundColor="infoActiveElementBackground"
      color="infoLowContrastText"
      padding={4}
    >
      <ThreeBoxes />
    </HStack>
  );
}

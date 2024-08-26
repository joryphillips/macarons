import { Stack } from "~/components/ui";
import { ThreeBoxes } from "./ThreeBoxes";

export function ResponsiveExample() {
  return (
    <Stack direction={{ mobile: "column", tablet: "row" }}>
      <ThreeBoxes />
    </Stack>
  );
}

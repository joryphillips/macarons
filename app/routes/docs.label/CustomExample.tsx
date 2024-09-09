import { VStack, Input, Label } from "~/components/ui";

export function CustomLabelExample() {
  return (
    <VStack width="100%" alignItems="flex-start" gap={2}>
      <Label size="md" color="primaryLowContrastText" htmlFor="custom">
        Custom Label
      </Label>
      <Input id="custom" name="custom" placeholder="placeholder" />
    </VStack>
  );
}

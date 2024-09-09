import { VStack, Input, Label } from "~/components/ui";

export function DefaultLabelExample() {
  return (
    <VStack width="100%" alignItems="flex-start" gap={1}>
      <Label htmlFor="default">Default Label</Label>
      <Input id="default" name="default" placeholder="placeholder" />
    </VStack>
  );
}

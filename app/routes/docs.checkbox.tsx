import { VStack, Heading, Checkbox, HStack } from "~/components/ui";

export default function CheckboxRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Checkbox</Heading>
      <HStack gap={2}>
        <Checkbox id="default" />
        <label htmlFor="default">Default</label>
      </HStack>
      <HStack gap={2}>
        <Checkbox id="checked" defaultChecked />
        <label htmlFor="checked">Checked</label>
      </HStack>
      <HStack gap={2}>
        <Checkbox id="disabled" disabled />
        <label htmlFor="disabled">Disabled</label>
      </HStack>
      <HStack gap={2}>
        <Checkbox id="checkedDisabled" defaultChecked disabled />
        <label htmlFor="checkedDisabled">Checked and Disabled</label>
      </HStack>
    </VStack>
  );
}

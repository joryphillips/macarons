import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { VStack, Heading, Checkbox, HStack } from "~/components/ui";

const defaultCheckboxExample = `<HStack gap={2}>
  <Checkbox id="default" />
  <label htmlFor="default">Default</label>
</HStack>`;

const checkedCheckboxExample = `<Checkbox id="checked" defaultChecked />`;
const disabledCheckboxExample = `<Checkbox id="disabled" disabled />`;
const checkedDisabledCheckboxExample = `<Checkbox id="checkedDisabled" defaultChecked disabled />`;

export default function CheckboxRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Checkbox</Heading>
      <VStack alignItems="flex-start" width="100%">
        <HStack gap={2}>
          <Checkbox id="default" />
          <label htmlFor="default">Default</label>
        </HStack>
        <SyntaxHighlighter>{defaultCheckboxExample}</SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" width="100%">
        <HStack gap={2}>
          <Checkbox id="checked" defaultChecked />
          <label htmlFor="checked">Checked</label>
        </HStack>
        <SyntaxHighlighter>{checkedCheckboxExample}</SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" width="100%">
        <HStack gap={2}>
          <Checkbox id="disabled" disabled />
          <label htmlFor="disabled">Disabled</label>
        </HStack>
        <SyntaxHighlighter>{disabledCheckboxExample}</SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" width="100%">
        <HStack gap={2}>
          <Checkbox id="checkedDisabled" defaultChecked disabled />
          <label htmlFor="checkedDisabled">Checked and Disabled</label>
        </HStack>
        <SyntaxHighlighter>{checkedDisabledCheckboxExample}</SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

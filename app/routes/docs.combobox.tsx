import { Box, Heading, Combobox, VStack } from "~/components/ui";

export default function ComboboxRoute() {
  return (
    <VStack gap={2} width="100%" alignItems="flex-start">
      <Heading as="h2">Combobox</Heading>
      <Box width="100%" maxWidth="xs">
        <Combobox
          name="combobox"
          placeholder="Select a fruit"
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Orange", value: "orange" },
            { label: "Pineapple", value: "pineapple" },
            { label: "Strawberry", value: "strawberry" },
          ]}
          isClearable
        />
      </Box>
    </VStack>
  );
}

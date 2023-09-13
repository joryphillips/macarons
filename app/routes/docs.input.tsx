import {
  VStack,
  Heading,
  Input,
  InputWithInfo,
  InputWithLabel,
} from "~/components/ui";

export default function CheckboxRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start" as="article">
      <Heading>Input</Heading>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          Minimal
        </Heading>
        <Input id="minimal" name="minimal" placeholder="placeholder" />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          Invalid state
        </Heading>
        <Input
          id="minimal"
          name="minimal"
          isInvalid
          placeholder="placeholder"
        />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          With Label
        </Heading>
        <InputWithLabel
          id="with-label"
          name="label"
          placeholder="placeholder"
          label="Label"
        />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          With Info
        </Heading>
        <InputWithInfo
          id="with-info"
          name="info"
          placeholder="placeholder"
          label="Label"
          infoText="Descriptive text"
        />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          Info with Error State
        </Heading>
        <InputWithInfo
          id="with-error"
          name="error"
          placeholder="placeholder"
          defaultValue="Invalid input value"
          label="Label"
          errorText="Descriptive error text"
        />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          Small
        </Heading>
        <Input id="small" name="small" size="sm" placeholder="placeholder" />{" "}
        <InputWithLabel
          id="small-label"
          name="small w label"
          size="sm"
          placeholder="placeholder"
          label="small with label"
        />
      </VStack>
    </VStack>
  );
}

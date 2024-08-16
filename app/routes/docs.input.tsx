import { useState } from "react";
import {
  VStack,
  Heading,
  Input,
  InputWithInfo,
  InputWithLabel,
} from "~/components/ui";

export default function CheckboxRoute() {
  const [clearableInputValue, setClearableInputValue] = useState("clearable");
  const [wideInputValue, setWideInputValue] = useState("wide");

  const [clearableSmallInputValue, setClearableSmallInputValue] =
    useState("small clearable");

  return (
    <VStack gap={8} width="100%" alignItems="flex-start" as="article">
      <Heading>Input</Heading>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          Minimal
        </Heading>
        <Input name="minimal" placeholder="placeholder" />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          Clearable
        </Heading>
        <InputWithLabel
          label="Clearable"
          placeholder="placeholder"
          value={clearableInputValue}
          onClear={() => setClearableInputValue("")}
          onChange={(e) => setClearableInputValue(e.target.value)}
        />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section" width="100%">
        <Heading as="h3" size="md">
          Wide
        </Heading>
        <InputWithLabel
          width="full"
          label="Wide"
          placeholder="placeholder"
          value={wideInputValue}
          onClear={() => setWideInputValue("")}
          onChange={(e) => setWideInputValue(e.target.value)}
        />
      </VStack>
      <VStack alignItems="flex-start" gap={3} as="section">
        <Heading as="h3" size="md">
          Invalid state
        </Heading>
        <Input name="minimal" isInvalid placeholder="placeholder" />
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
        <Input name="small" size="sm" placeholder="placeholder" />{" "}
        <InputWithLabel
          name="small w label"
          size="sm"
          placeholder="placeholder"
          label="small with label"
        />
        <InputWithLabel
          name="small clearable w label"
          size="sm"
          placeholder="placeholder"
          label="small with label"
          value={clearableSmallInputValue}
          onClear={() => setClearableSmallInputValue("")}
          onChange={(e) => setClearableSmallInputValue(e.target.value)}
        />
      </VStack>
    </VStack>
  );
}

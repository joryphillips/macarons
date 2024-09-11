import { VStack, Heading, Text, HStack, Stack } from "~/components/ui";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { Minimal } from "./Minimal";
import minimalString from "./Minimal?raw";
import { Clearable } from "./Clearable";
import clearableString from "./Clearable?raw";
import { Wide } from "./Wide";
import wideString from "./Wide?raw";
import { Invalid } from "./Invalid";
import invalidString from "./Invalid?raw";
import { WithLabel } from "./WithLabel";
import withLabelString from "./WithLabel?raw";
import { WithInfo } from "./WithInfo";
import withInfoString from "./WithInfo?raw";
import { WithError } from "./WithError";
import withErrorString from "./WithError?raw";
import { Small } from "./Small";
import withSmallString from "./Small?raw";

export default function InputRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack gap={4} alignItems="flex-start" width="100%" as="section">
        <Heading as="h1" size="xl">
          Input
        </Heading>
        <Text as="p">
          The Input component wraps the native input element, and is used to
          collect text input from users, often in a form. This component has
          three variants:
        </Text>
        <VStack gap={4} alignItems="flex-start" width="100%">
          <Stack alignItems="baseline" gap={1}>
            <Text>
              <code>Input</code>
            </Text>
            <Text>A minimal input with no label or decriptive text.</Text>
          </Stack>
          <Stack alignItems="baseline" gap={1}>
            <Text>
              <code>InputWithLabel</code>
            </Text>
            <Text>An input with a label above it.</Text>
          </Stack>
          <Stack alignItems="baseline" gap={1}>
            <Text>
              <code>InputWithInfo</code>
            </Text>
            <Text>
              An input with a label above it and informational text below it.
            </Text>
          </Stack>
        </VStack>
      </VStack>

      <VStack width="100%" alignItems="flex-start" gap={4} as="section">
        <Heading as="h2" size="md">
          Minimal
        </Heading>
        {/* Add VStack wrapper without width to demonstrate input width default */}
        <VStack>
          <Minimal />
        </VStack>
        <SyntaxHighlighter trimToReactReturnValue>
          {minimalString}
        </SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" gap={4} as="section" width="100%">
        <Heading as="h2" size="md">
          Wide
        </Heading>
        <Text as="p">
          Input will expand to the width of its parent container.
        </Text>
        <Wide />
        <SyntaxHighlighter trimToReactReturnValue>
          {wideString}
        </SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" gap={4} as="section" width="100%">
        <Heading as="h2" size="md">
          Invalid state
        </Heading>
        <VStack>
          <Invalid />
        </VStack>
        <SyntaxHighlighter trimToReactReturnValue>
          {invalidString}
        </SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" gap={4} as="section" width="100%">
        <Heading as="h2" size="md">
          With Label
        </Heading>
        <VStack>
          <WithLabel />
        </VStack>
        <SyntaxHighlighter trimToReactReturnValue>
          {withLabelString}
        </SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" gap={4} as="section" width="100%">
        <Heading as="h2" size="md">
          Clearable
        </Heading>
        <VStack>
          <Clearable />
        </VStack>
        <SyntaxHighlighter>{clearableString}</SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" gap={4} as="section" width="100%">
        <Heading as="h2" size="md">
          With Info
        </Heading>
        <VStack>
          <WithInfo />
        </VStack>
        <SyntaxHighlighter trimToReactReturnValue minWidth="2xs">
          {withInfoString}
        </SyntaxHighlighter>
      </VStack>

      <VStack alignItems="flex-start" gap={4} as="section" width="100%">
        <Heading as="h2" size="md">
          Info with Error State
        </Heading>
        <VStack>
          <WithError />
        </VStack>
        <SyntaxHighlighter trimToReactReturnValue minWidth="2xs">
          {withErrorString}
        </SyntaxHighlighter>
      </VStack>
      <VStack alignItems="flex-start" gap={4} as="section" width="100%">
        <Heading as="h2" size="md">
          Small
        </Heading>
        <Small />
        <SyntaxHighlighter trimToReactReturnValue>
          {withSmallString}
        </SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

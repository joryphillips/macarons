import { Stack, Heading, Text, VStack } from "~/components/ui";
import { NarrowHorizontalDividerExample } from "./NarrowHorizontal";
import NarrowHorizontalString from "./NarrowHorizontal?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { HorizontalDividerExample } from "./Horizontal";
import HorizontalString from "./Horizontal?raw";
import { VerticalDividerExample } from "./Vertical";
import VerticalString from "./Vertical?raw";

export default function DividerRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading size="xl" as="h1">
          Divider
        </Heading>
        <Text as="p">
          Divider is a subtle graphic element used to dilineate two separate
          ideas. The Divider component will automatically fill the width of its
          container.
        </Text>
        <Text as="p">
          By default, its <code>decorative</code> prop is set to{" "}
          <code>true</code>, which excludes it from screen readers.
        </Text>
      </VStack>

      <Stack gap={4} width="100%" alignItems="flex-start">
        <Heading size="lg" as="h2">
          Horizontal Divider
        </Heading>
        <HorizontalDividerExample />
        <SyntaxHighlighter>{HorizontalString}</SyntaxHighlighter>
      </Stack>

      <Stack gap={4} width="100%" alignItems="flex-start">
        <Heading size="lg" as="h2">
          Narrow Horizontal Divider
        </Heading>
        <Text as="p">
          Example of Divider expanding only to width of its parent.
        </Text>
        <NarrowHorizontalDividerExample />
        <SyntaxHighlighter>{NarrowHorizontalString}</SyntaxHighlighter>
      </Stack>

      <Stack gap={4} width="100%" alignItems="flex-start">
        <Heading size="lg" as="h2">
          Vertical Divider
        </Heading>
        <Text as="p">
          Note that the Divider's parent container must have a height specified
          for the vertical property to work correctly.
        </Text>
        <VerticalDividerExample />
        <SyntaxHighlighter>{VerticalString}</SyntaxHighlighter>
      </Stack>
    </VStack>
  );
}

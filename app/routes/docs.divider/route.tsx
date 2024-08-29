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
      <Heading size="xl" as="h1">
        Divider
      </Heading>
      <Text as="p">
        The Divider component will automatically fill the width of its
        container.{" "}
      </Text>

      <Stack gap={4} alignItems="flex-start">
        <Heading size="lg" as="h2">
          Horizontal Divider
        </Heading>
        <HorizontalDividerExample />
        <SyntaxHighlighter>{HorizontalString}</SyntaxHighlighter>
      </Stack>

      <Stack gap={4} alignItems="flex-start">
        <Heading size="lg" as="h2">
          Narrow Horizontal Divider
        </Heading>
        <NarrowHorizontalDividerExample />
        <SyntaxHighlighter>{NarrowHorizontalString}</SyntaxHighlighter>
      </Stack>

      <Stack gap={4} alignItems="flex-start">
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

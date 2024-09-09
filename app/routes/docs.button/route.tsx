import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { VStack, Heading, Button, HStack, Text, Stack } from "~/components/ui";
import { backgroundImageStyle } from "./docs-button.css";
import {
  ghostExample,
  ghostPrimaryExample,
  ghostOnDarkExample,
  disabledExample,
  specificWidthExample,
  withoutSpecificWidthExample,
} from "./ButtonExamples";
import { SizeExample } from "./SizeExample";
import sizeExampleString from "./SizeExample?raw";
import { StateExample } from "./StateExample";
import stateExampleString from "./StateExample?raw";
import { DeemphasisExample } from "./DeemphasisExample";
import deemphasisExampleString from "./DeemphasisExample?raw";
import { IconExample } from "./IconExamples";
import iconExampleString from "./IconExamples?raw";

export default function ButtonRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading size="xl" as="h1">
        Button
      </Heading>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          Size
        </Heading>
        <Stack
          gap={2}
          flexDirection={{ tablet: "row", mobile: "column" }}
          alignItems={{ tablet: "flex-end", mobile: "flex-start" }}
          width="100%"
        >
          <SizeExample />
        </Stack>
        <SyntaxHighlighter startLineNumber={6} endLineNumber={8}>
          {sizeExampleString}
        </SyntaxHighlighter>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          State/Brand
        </Heading>
        <Stack gap={2} flexWrap="wrap" flexDirection="row" width="100%">
          <StateExample />
        </Stack>
        <SyntaxHighlighter startLineNumber={6} endLineNumber={9}>
          {stateExampleString}
        </SyntaxHighlighter>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          Deemphasis
        </Heading>
        <Text as="p">
          Good to use in tandem with one of the buttons above to direct the
          user's attention to a specific action.
        </Text>
        <Stack gap={2} flexWrap="wrap" flexDirection="row" width="100%">
          <DeemphasisExample />
        </Stack>
        <SyntaxHighlighter startLineNumber={6} endLineNumber={7}>
          {deemphasisExampleString}
        </SyntaxHighlighter>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          Ghost
        </Heading>
        <VStack
          gap={2}
          alignItems="flex-start"
          backgroundColor="primarySubtleBackground"
          padding={4}
          width="100%"
        >
          <HStack paddingY={6} justifyContent="center" width="100%">
            <Button variant="ghost">Ghost</Button>
          </HStack>
          <SyntaxHighlighter>{ghostExample}</SyntaxHighlighter>
        </VStack>

        <VStack
          gap={2}
          alignItems="flex-start"
          backgroundColor="infoSubtleBackground"
          padding={4}
          width="100%"
        >
          <HStack paddingY={6} justifyContent="center" width="100%">
            <Button variant="ghostPrimary">Ghost Primary</Button>
          </HStack>
          <SyntaxHighlighter>{ghostPrimaryExample}</SyntaxHighlighter>
        </VStack>

        <VStack
          gap={2}
          alignItems="flex-start"
          backgroundColor="primarySubtleBackground"
          padding={4}
          width="100%"
          className={backgroundImageStyle}
        >
          <HStack paddingY={8} justifyContent="center" width="100%">
            <Button variant="ghostOnDark" size="lg">
              Ghost on Dark Background
            </Button>
          </HStack>
          <SyntaxHighlighter>{ghostOnDarkExample}</SyntaxHighlighter>
        </VStack>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          Disabled
        </Heading>
        <VStack gap={2} alignItems="flex-start" width="100%">
          <Button isDisabled>Disabled</Button>
          <SyntaxHighlighter>{disabledExample}</SyntaxHighlighter>
        </VStack>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          With Icons
        </Heading>
        <Stack gap={2} alignItems="flex-start" width="100%">
          <IconExample />
          <SyntaxHighlighter>{iconExampleString}</SyntaxHighlighter>
        </Stack>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          Width and Truncating Text
        </Heading>

        <VStack gap={2} alignItems="flex-start" width="100%">
          <Button variant="outline" width="3xs">
            With a specific width and very long text
          </Button>
          <SyntaxHighlighter>{specificWidthExample}</SyntaxHighlighter>
        </VStack>

        <VStack gap={2} alignItems="flex-start" width="100%">
          <Button variant="outline">
            Without a width but with very long text
          </Button>
          <SyntaxHighlighter>{withoutSpecificWidthExample}</SyntaxHighlighter>
        </VStack>
      </VStack>
    </VStack>
  );
}

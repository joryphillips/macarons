import { ChevronDown, InfoIcon } from "lucide-react";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { VStack, Heading, Button, HStack, Stack } from "~/components/ui";
import { backgroundImageStyle } from "./docs-button.css";
import {
  stateExample,
  deemphasisExample,
  ghostExample,
  ghostPrimaryExample,
  ghostOnDarkExample,
  disabledExample,
  prefixIconExample,
  suffixIconExample,
  prefixSuffixIconExample,
  specificWidthExample,
  withoutSpecificWidthExample,
  sizeExample,
} from "./button-examples";

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
          <Button size="sm">Size Small</Button>
          <Button>Default</Button>
          <Button size="lg">Size Large</Button>
        </Stack>
        <SyntaxHighlighter>{sizeExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          State/Brand
        </Heading>
        <Stack gap={2} flexWrap="wrap" flexDirection="row" width="100%">
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="success">Success</Button>
          <Button variant="destructive">Destructive</Button>
        </Stack>
        <SyntaxHighlighter>{stateExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading size="lg" as="h2">
          Deemphasis
        </Heading>
        <Stack gap={2} flexWrap="wrap" flexDirection="row" width="100%">
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
        </Stack>
        <SyntaxHighlighter>{deemphasisExample}</SyntaxHighlighter>
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
        <VStack gap={2} alignItems="flex-start" width="100%">
          <Button prefixIcon={InfoIcon}>With Prefix Icon</Button>
          <SyntaxHighlighter>{prefixIconExample}</SyntaxHighlighter>
        </VStack>

        <VStack gap={2} alignItems="flex-start" width="100%">
          <Button suffixIcon={ChevronDown}>With Suffix Icon</Button>
          <SyntaxHighlighter>{suffixIconExample}</SyntaxHighlighter>
        </VStack>

        <VStack gap={2} alignItems="flex-start" width="100%">
          <Button prefixIcon={InfoIcon} suffixIcon={ChevronDown}>
            With Prefix and Suffix Icon
          </Button>
          <SyntaxHighlighter>{prefixSuffixIconExample}</SyntaxHighlighter>
        </VStack>
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

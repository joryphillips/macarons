import { ChevronDown, InfoIcon } from "lucide-react";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { VStack, Heading, Button, HStack } from "~/components/ui";
import { backgroundImageStyle } from "./docs-button.css";
import {
  defaultExample,
  sizeSmallExample,
  sizeLargeExample,
  primaryExample,
  destructiveExample,
  outlineExample,
  subtleExample,
  ghostExample,
  ghostPrimaryExample,
  ghostOnDarkExample,
  disabledExample,
  prefixIconExample,
  suffixIconExample,
  prefixSuffixIconExample,
  specificWidthExample,
  withoutSpecificWidthExample,
} from "./button-examples";

export default function ButtonRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Button</Heading>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button>Default</Button>
        <SyntaxHighlighter>{defaultExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button size="sm">Size Small</Button>
        <SyntaxHighlighter>{sizeSmallExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button size="lg">Size Large</Button>
        <SyntaxHighlighter>{sizeLargeExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button variant="primary">Primary</Button>
        <SyntaxHighlighter>{primaryExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button variant="destructive">Destructive</Button>
        <SyntaxHighlighter>{destructiveExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button variant="outline">Outline</Button>
        <SyntaxHighlighter>{outlineExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button variant="subtle">Subtle</Button>
        <SyntaxHighlighter>{subtleExample}</SyntaxHighlighter>
      </VStack>

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
        <HStack paddingY={6} justifyContent="center" width="100%">
          <Button variant="ghostOnDark">Ghost on Dark Background</Button>
        </HStack>
        <SyntaxHighlighter>{ghostOnDarkExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start" width="100%">
        <Button isDisabled>Disabled</Button>
        <SyntaxHighlighter>{disabledExample}</SyntaxHighlighter>
      </VStack>

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
  );
}

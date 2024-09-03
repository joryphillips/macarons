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

      <VStack gap={2} alignItems="flex-start">
        <Button>Default</Button>
        <SyntaxHighlighter copy={false}>{defaultExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button size="sm">Size Small</Button>
        <SyntaxHighlighter copy={false}>{sizeSmallExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button size="lg">Size Large</Button>
        <SyntaxHighlighter copy={false}>{sizeLargeExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button variant="primary">Primary</Button>
        <SyntaxHighlighter copy={false}>{primaryExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button variant="destructive">Destructive</Button>
        <SyntaxHighlighter copy={false}>{destructiveExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button variant="outline">Outline</Button>
        <SyntaxHighlighter copy={false}>{outlineExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button variant="subtle">Subtle</Button>
        <SyntaxHighlighter copy={false}>{subtleExample}</SyntaxHighlighter>
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
        <SyntaxHighlighter copy={false}>{ghostExample}</SyntaxHighlighter>
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
        <SyntaxHighlighter copy={false}>
          {ghostPrimaryExample}
        </SyntaxHighlighter>
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
        <SyntaxHighlighter copy={false}>{ghostOnDarkExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button isDisabled>Disabled</Button>
        <SyntaxHighlighter copy={false}>{disabledExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button prefixIcon={InfoIcon}>With Prefix Icon</Button>
        <SyntaxHighlighter copy={false}>{prefixIconExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button suffixIcon={ChevronDown}>With Suffix Icon</Button>
        <SyntaxHighlighter copy={false}>{suffixIconExample}</SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button prefixIcon={InfoIcon} suffixIcon={ChevronDown}>
          With Prefix and Suffix Icon
        </Button>
        <SyntaxHighlighter copy={false}>
          {prefixSuffixIconExample}
        </SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button variant="outline" width="3xs">
          With a specific width and very long text
        </Button>
        <SyntaxHighlighter copy={false}>
          {specificWidthExample}
        </SyntaxHighlighter>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
        <Button variant="outline">
          Without a width but with very long text
        </Button>
        <SyntaxHighlighter copy={false}>
          {withoutSpecificWidthExample}
        </SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

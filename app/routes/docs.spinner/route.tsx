import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { Spinner, Stack, VStack, Heading, HStack, Text } from "~/components/ui";
import { vars } from "~/theme/theme.css";

const spinnerExampleString = `<Spinner />`;

const spinnerDefaultExampleString = `<Spinner
  size="md"
  color={vars.colors.primary.solidBackground}
  speed="0.8s"
/>`;

export default function SpinnerRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading as="h1" size="xl">
          Spinner
        </Heading>
        <Text as="p">
          The spinner component is used to indicate that a page or component is
          loading.
        </Text>
        <Spinner />
        <SyntaxHighlighter>{spinnerExampleString}</SyntaxHighlighter>
      </VStack>
      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading size="lg">Default Props</Heading>
        <Spinner
          size="md"
          color={vars.colors.primary.solidBackground}
          speed="0.8s"
        />
        <SyntaxHighlighter>{spinnerDefaultExampleString}</SyntaxHighlighter>
      </VStack>

      <VStack gap={4} alignItems="flex-start">
        <Heading size="lg">Size</Heading>
        <HStack gap={6} alignItems="flex-end">
          <VStack gap={2}>
            <Spinner size="xs" />
            <Text size="sm">xs</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner size="sm" />
            <Text size="sm">sm</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner size="md" />
            <Text size="sm">md</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner size="lg" />
            <Text size="sm">ls</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner size="xl" />
            <Text size="sm">xl</Text>
          </VStack>
        </HStack>
      </VStack>

      <VStack gap={4} alignItems="flex-start">
        <Heading size="lg">Color</Heading>
        <Stack
          flexDirection={{ mobile: "column", tablet: "row" }}
          gap={6}
          alignItems={{ mobile: "center", tablet: "flex-end" }}
          flexWrap="wrap"
        >
          <VStack gap={2}>
            <Spinner color="blue" />
            <Text size="sm">blue</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner color="#ffef00" />
            <Text size="sm">#ffef00</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner color="rgb(250, 117, 0)" />
            <Text size="sm">rgb(250,117,0)</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner color={vars.colors.destructive.solidBackground} />
            <Text size="sm">vars.colors.destructive.solidBackground</Text>
          </VStack>
        </Stack>
      </VStack>

      <VStack gap={4} alignItems="flex-start">
        <Heading size="lg">Speed</Heading>
        <HStack gap={6} alignItems="flex-end">
          <VStack gap={2}>
            <Spinner speed="200ms" />
            <Text size="sm">200ms</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner speed="400ms" />
            <Text size="sm">400ms</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner speed="0.6s" />
            <Text size="sm">0.6s</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner speed="0.8s" />
            <Text size="sm">0.8s</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner speed="1s" />
            <Text size="sm">1s</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}

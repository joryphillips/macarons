import { Spinner, VStack, Heading, HStack, Text } from "~/components/ui";
import { vars } from "~/theme/theme.css";
export default function SpinnerRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Spinner</Heading>
      <Text as="p">
        The spinner component is used to indicate that a page or component is
        loading.
      </Text>
      <Spinner />
      <Heading size="lg">Props and Defaults</Heading>
      <Text size="sm">
        <VStack gap={2} alignItems="flex-start">
          <code>size="md"</code>
          <code>color=vars.colors.primary.solidBackground</code>
          <code>speed="0.8s"</code>
        </VStack>
      </Text>

      <VStack gap={2} alignItems="flex-start">
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

      <VStack gap={2} alignItems="flex-start">
        <Heading size="lg">Color</Heading>
        <HStack gap={6} alignItems="flex-end">
          <VStack gap={2}>
            <Spinner color="orange" />
            <Text size="sm">orange</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner color="blue" />
            <Text size="sm">blue</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner color="yellow" />
            <Text size="sm">yellow</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner color="purple" />
            <Text size="sm">purple</Text>
          </VStack>
          <VStack gap={2}>
            <Spinner color={vars.colors.error.solidBackground} />
            <Text size="sm">vars.colors.error.solidBackground</Text>
          </VStack>
        </HStack>
      </VStack>

      <VStack gap={2} alignItems="flex-start">
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

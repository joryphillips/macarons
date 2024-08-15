import { Box, Text, VStack, Heading } from "~/components/ui";

export default function BoxRoute() {
  return (
    <VStack gap={4} width="100%" alignItems="flex-start">
      <Heading>Box</Heading>
      <Text as="p">
        The Macaron Box is a polymorphic component that is constrained by
        Sprinkles properties (Atoms).
      </Text>
      <Text>
        This component is primarily intended for making other components and for
        rapid layouts. Also see the Stack components for common flexBox needs.
        Neither cannot be used to make an SVG.
      </Text>
      <Text>
        When more design control is needed, use `style` from
        @vanilla-extract/css in a companion .css.ts file with the component or
        HTML Element that best suits your needs.
      </Text>
      <Box
        padding={4}
        borderRadius="md"
        borderStyle="solid"
        borderColor="elementBorder"
        backgroundColor="elementBackground"
        color="highContrastText"
      >
        <Text>Box</Text>
      </Box>
      <VStack gap={2} alignItems="flex-start">
        <code>padding=&#123;4&#125;</code>
        <code>borderRadius="md"</code>
        <code>borderStyle="solid"</code>
        <code>borderColor="elementBorder"</code>
        <code>backgroundColor="elementBackground"</code>
        <code>color="highContrastText"</code>
      </VStack>
      <Heading size="lg">"as" prop</Heading>
      <Text as="p">
        Using the "as" prop, you can create a Box component that renders as
        another HTML element.
      </Text>
      <Box
        as="button"
        padding={4}
        borderRadius="lg"
        backgroundColor="solidBackground"
        color="textOnSolidBackground"
      >
        Button
      </Box>
    </VStack>
  );
}

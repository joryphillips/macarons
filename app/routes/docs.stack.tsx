import { Box, VStack, HStack, Text, Heading, Stack } from "~/components/ui";

function ThreeBoxes() {
  return (
    <>
      <Box
        padding={4}
        borderRadius="md"
        borderStyle="solid"
        borderColor="infoElementBorder"
        backgroundColor="infoElementBackground"
        color="infoHighContrastText"
      >
        Item 1
      </Box>
      <Box
        padding={4}
        borderRadius="md"
        borderStyle="solid"
        borderColor="warningElementBorder"
        backgroundColor="warningElementBackground"
        color="warningHighContrastText"
      >
        Item 2
      </Box>
      <Box
        padding={4}
        borderRadius="md"
        borderStyle="solid"
        borderColor="destructiveElementBorder"
        backgroundColor="destructiveElementBackground"
        color="destructiveHighContrastText"
      >
        Item 3
      </Box>
    </>
  );
}

export default function StackRoute() {
  return (
    <VStack gap={4} width="100%" alignItems="flex-start">
      <Heading>Stack</Heading>
      <Text as="p">
        The stack component is used to layout elements in a vertical or
        horizontal stack.
      </Text>

      <Heading size="md">Responsive Stack</Heading>
      <Text as="p">
        The base stack component can be used in combination with a media query
        to dynamically change the direction of the stack based on the width of
        the screen.
      </Text>
      <Stack direction={{ mobile: "column", tablet: "row" }}>
        <ThreeBoxes />
      </Stack>
      <Text>
        <code>
          &#60;Stack direction=&#123;&#123; mobile: "column", tablet: "row"
          &#125;&#125;&#62;
        </code>
      </Text>

      <Heading size="md">Vertical Stack</Heading>
      <Text>The VStack implements a flex column.</Text>
      <VStack>
        <ThreeBoxes />
      </VStack>
      <Text>
        <code>&#60;VStack&#62;</code>
      </Text>
      <Heading size="md">Horizontal Stack</Heading>
      <Text>The HStack implements a flex row.</Text>
      <HStack>
        <ThreeBoxes />
      </HStack>
      <Text>
        <code>&#60;HStack&#62;</code>
      </Text>

      <Heading size="md">Gap</Heading>
      <Text>
        The gap prop can be used to add space between children of the stack. A
        prop called "spacing" is also available as an alias for gap.
      </Text>
      <Stack gap={8}>
        <ThreeBoxes />
      </Stack>
      <Text>
        <code>&#60;Stack gap=&#123;8&#125;&#62;</code>
      </Text>

      <Heading size="md">Customization</Heading>
      <Text>
        All props available to Box can be used with a Stack, HStack, or VStack
        component.
      </Text>
      <HStack
        backgroundColor="infoActiveElementBackground"
        color="infoLowContrastText"
        padding={4}
      >
        <ThreeBoxes />
      </HStack>
      <Text>
        <code>
          &#60;HStack backgroundColor="infoActiveElementBackground"
          color="infoLowContrastText" padding=&#123;4&#125;&#62;
        </code>
      </Text>
    </VStack>
  );
}

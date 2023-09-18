import { Divider, Heading, Input, Label, Text, VStack } from "~/components/ui";

export default function LabelRoute() {
  return (
    <VStack
      as="article"
      maxWidth="prose"
      gap={6}
      paddingBottom={8}
      width="100%"
      alignItems="flex-start"
    >
      <Heading as="h2" size="xl">
        Label
      </Heading>
      <VStack gap={3} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Overview
        </Heading>
        <Text as="p">
          Label returns a Text component that is styled as a label, uses the
          "label" tag, and has a "htmlFor" attribute. Label prevents its child
          text from being selected when double clicked, to allow the element it
          is associated with to instead be focused.
        </Text>
        <Text as="p">
          Label props extend Text props, so all the same color and size options
          are available.
        </Text>
      </VStack>
      <Divider />
      <VStack gap={4} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Default
        </Heading>
        <VStack width="100%" alignItems="flex-start" gap={1}>
          <Label htmlFor="default">Default Label</Label>
          <Input id="default" name="default" placeholder="placeholder" />
        </VStack>
      </VStack>
      <Divider />
      <VStack gap={4} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Custom color and sizes
        </Heading>
        <VStack width="100%" alignItems="flex-start" gap={2}>
          <Label size="md" color="primaryLowContrast" htmlFor="custom">
            Custom Label
          </Label>
          <Input id="custom" name="custom" placeholder="placeholder" />
        </VStack>
      </VStack>
    </VStack>
  );
}

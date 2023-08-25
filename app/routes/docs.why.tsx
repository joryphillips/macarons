import { VStack, Heading, Text } from "~/components/ui";

export default function WhyRoute() {
  return (
    <VStack
      gap={8}
      paddingBottom={8}
      maxWidth="prose"
      width="100%"
      alignItems="flex-start"
    >
      <Heading as="h3" size="xl">
        Why Madeleines?
      </Heading>
      <Text as="p">Madeleines was created because:</Text>
      <VStack as="ul" gap={4} alignItems="flex-start">
        <Text as="li">
          We wanted to turn on streaming for our app and Chakra UI's use of
          Emotion was blocking us.
        </Text>
        <Text as="li">
          We knew we ultimately wanted to have more control and better DX over
          theming and tokens than Chakra UI was providing.
        </Text>
        <Text as="li">We preferred the DX of Chakra to that of Tailwind.</Text>
      </VStack>
    </VStack>
  );
}

import { Box, Heading, HStack, Text, VStack } from "~/components/ui";
import { vars } from "~/theme/theme.css";
import { spacing } from "~/theme/spacing";
import spacingTokens from "~/theme/spacing?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

function DemoBox() {
  return (
    <Box
      style={{
        height: "100px",
        width: "100px",
      }}
      backgroundColor="elementBackground"
      borderColor="elementBorder"
      borderStyle="solid"
      borderRadius="sm"
    />
  );
}

function SpacingDemoRow({
  spacing: space,
}: {
  spacing: keyof typeof vars.spacing;
}) {
  return (
    <VStack gap={1} alignItems="flex-start">
      <Text>
        Spacing: {space} ({spacing[space]})
      </Text>
      <HStack gap={space}>
        <DemoBox />
        <DemoBox />
      </HStack>
    </VStack>
  );
}

export default function SpacingRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Spacing</Heading>
      <Text as="p">
        Like other tokens, spacing is defined in an independent file and
        imported into common variables in the theme, as well as Sprinkles
        variables that are then made available everywhere. The values follow
        patterns familiar to Chakra UI and Tailwind users and are easily
        customizable.
      </Text>
      <VStack width="100%" alignItems="flex-start">
        {Object.keys(vars.spacing).map((spacing, index) => (
          <SpacingDemoRow
            key={`${spacing}-${index}`}
            spacing={spacing as keyof typeof vars.spacing}
          />
        ))}
      </VStack>
      <SyntaxHighlighter>{spacingTokens}</SyntaxHighlighter>
    </VStack>
  );
}

import { Box, Heading, Stack, Text, VStack } from "~/components/ui";
import { vars } from "~/theme/theme.css";
import { border } from "~/theme/border";

function DemoBox({
  borderWidth,
  borderRadius = "sm",
}: {
  borderWidth: keyof typeof vars.border.width;
  borderRadius: keyof typeof vars.border.radius;
}) {
  return (
    <Box
      style={{
        height: "120px",
        width: "120px",
      }}
      backgroundColor="elementBackground"
      borderColor="elementBorder"
      borderStyle="solid"
      borderWidth={borderWidth}
      borderRadius={borderRadius}
    />
  );
}

function BorderWidthDemoRow({
  borderWidth,
}: {
  borderWidth: keyof typeof vars.border.width;
}) {
  return (
    <VStack gap={1} alignItems="flex-start">
      <Text size="sm">
        {borderWidth} ({border.width[borderWidth]})
      </Text>
      <DemoBox borderWidth={borderWidth} borderRadius="sm" />
    </VStack>
  );
}

function BorderRadiusDemoRow({
  borderRadius,
}: {
  borderRadius: keyof typeof vars.border.radius;
}) {
  return (
    <VStack gap={1} alignItems="flex-start">
      <Text size="sm">
        {borderRadius} ({border.radius[borderRadius]})
      </Text>
      <DemoBox borderRadius={borderRadius} borderWidth="standard" />
    </VStack>
  );
}

export default function BorderRoute() {
  return (
    <VStack marginBottom={8} width="100%" alignItems="flex-start">
      <Heading>Border and Radius</Heading>
      <Text as="p">
        Border width and radius are defined in an independent file and imported
        into common variables in the theme, as well as Sprinkles variables that
        are then made available everywhere. The values follow patterns familiar
        to Chakra UI and Tailwind users and are easily customizable.
      </Text>
      <Stack
        flexDirection={{ mobile: "column", tablet: "row" }}
        alignItems="flex-start"
        gap={8}
      >
        <VStack width="100%" alignItems="flex-start">
          <Heading as="h2" size="sm">
            Border Width
          </Heading>
          {Object.keys(vars.border.width).map((width) => (
            <BorderWidthDemoRow
              borderWidth={width as keyof typeof vars.border.width}
            />
          ))}
        </VStack>
        <VStack width="100%" alignItems="flex-start">
          <Heading as="h2" size="sm">
            Border Radius
          </Heading>
          {Object.keys(vars.border.radius).map((radius) => (
            <BorderRadiusDemoRow
              borderRadius={radius as keyof typeof vars.border.radius}
            />
          ))}
        </VStack>
      </Stack>
    </VStack>
  );
}

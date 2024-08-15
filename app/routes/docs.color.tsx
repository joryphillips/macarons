import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Link } from "@remix-run/react";
import { Box, Divider, Text, VStack, Heading, HStack } from "~/components/ui";
import { Sprinkles } from "~/styles/sprinkles.css";

function ColorBox({
  backgroundColor,
}: {
  backgroundColor: Sprinkles["backgroundColor"];
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Box
          borderRadius="md"
          backgroundColor={backgroundColor}
          boxShadow="base"
          color="highContrastText"
          style={{
            width: "90px",
            height: "90px",
          }}
        />
      </TooltipTrigger>
      <TooltipContent>
        <Text size="sm">{backgroundColor}</Text>
      </TooltipContent>
    </Tooltip>
  );
}

function TextColorLabel({ label }: { label: string }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        width: "90px",
        height: "90px",
      }}
    >
      <Text size="sm" align="center">
        {label}
      </Text>
    </Box>
  );
}

export default function ColorRoute() {
  return (
    <>
      <Heading as="h1" size="lg">
        Colors
      </Heading>
      <Text as="p">
        Macarons uses a color palette that by default follows the{" "}
        <Link to="https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale">
          Radix scale
        </Link>
        .
      </Text>
      <Text as="p">
        The base system makes the assumption that the end user wants colors
        organized by use type among the categories of base/standard (grayscale),
        primary (for branding), info, success, warning, and error/destructive.
        Additional colors can be added ad-hoc, and a good example of this is
        "overlay", which is a stand-alone color in the theme.
      </Text>
      <VStack gap={8} alignItems="flex-start">
        <VStack gap={2} alignItems="flex-start">
          <Heading as="h2" size="md">
            Background Colors
          </Heading>
          <Text as="p">
            These colors are used for the background of components and the app
            itself.
          </Text>
        </VStack>
        <HStack gap={2}>
          <VStack gap={2}>
            <Heading size="sm">Type</Heading>
            <TextColorLabel label="App" />
            <TextColorLabel label="Subtle" />
            <TextColorLabel label="Element" />
            <TextColorLabel label="Hovered Element" />
            <TextColorLabel label="Active Element" />
            <TextColorLabel label="Solid" />
            <TextColorLabel label="Hovered Solid" />
          </VStack>

          <VStack gap={2}>
            <Heading size="sm">Base</Heading>
            <ColorBox backgroundColor="appBackground" />
            <ColorBox backgroundColor="subtleBackground" />
            <ColorBox backgroundColor="elementBackground" />
            <ColorBox backgroundColor="hoveredElementBackground" />
            <ColorBox backgroundColor="activeElementBackground" />
            <ColorBox backgroundColor="solidBackground" />
            <ColorBox backgroundColor="hoveredSolidBackground" />
          </VStack>

          <VStack gap={2}>
            <Heading size="sm">Primary</Heading>
            <ColorBox backgroundColor="primaryAppBackground" />
            <ColorBox backgroundColor="primarySubtleBackground" />
            <ColorBox backgroundColor="primaryElementBackground" />
            <ColorBox backgroundColor="primaryHoveredElementBackground" />
            <ColorBox backgroundColor="primaryActiveElementBackground" />
            <ColorBox backgroundColor="primarySolidBackground" />
            <ColorBox backgroundColor="primaryHoveredSolidBackground" />
          </VStack>

          <VStack gap={2}>
            <Heading size="sm">Info</Heading>
            <ColorBox backgroundColor="infoAppBackground" />
            <ColorBox backgroundColor="infoSubtleBackground" />
            <ColorBox backgroundColor="infoElementBackground" />
            <ColorBox backgroundColor="infoHoveredElementBackground" />
            <ColorBox backgroundColor="infoActiveElementBackground" />
            <ColorBox backgroundColor="infoSolidBackground" />
            <ColorBox backgroundColor="infoHoveredSolidBackground" />
          </VStack>

          <VStack gap={2}>
            <Heading size="sm">Success</Heading>
            <ColorBox backgroundColor="successAppBackground" />
            <ColorBox backgroundColor="successSubtleBackground" />
            <ColorBox backgroundColor="successElementBackground" />
            <ColorBox backgroundColor="successHoveredElementBackground" />
            <ColorBox backgroundColor="successActiveElementBackground" />
            <ColorBox backgroundColor="successSolidBackground" />
            <ColorBox backgroundColor="successHoveredSolidBackground" />
          </VStack>

          <VStack gap={2}>
            <Heading size="sm">Warning</Heading>
            <ColorBox backgroundColor="warningAppBackground" />
            <ColorBox backgroundColor="warningSubtleBackground" />
            <ColorBox backgroundColor="warningElementBackground" />
            <ColorBox backgroundColor="warningHoveredElementBackground" />
            <ColorBox backgroundColor="warningActiveElementBackground" />
            <ColorBox backgroundColor="warningSolidBackground" />
            <ColorBox backgroundColor="warningHoveredSolidBackground" />
          </VStack>

          <VStack gap={2}>
            <Heading size="sm">Destructive</Heading>
            <ColorBox backgroundColor="destructiveAppBackground" />
            <ColorBox backgroundColor="destructiveSubtleBackground" />
            <ColorBox backgroundColor="destructiveElementBackground" />
            <ColorBox backgroundColor="destructiveHoveredElementBackground" />
            <ColorBox backgroundColor="destructiveActiveElementBackground" />
            <ColorBox backgroundColor="destructiveSolidBackground" />
            <ColorBox backgroundColor="destructiveHoveredSolidBackground" />
          </VStack>
        </HStack>
      </VStack>
      <Divider />
    </>
  );
}

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Link } from "@remix-run/react";
import { Box, Divider, Text, VStack, Heading, HStack } from "~/components/ui";
import { Sprinkles } from "~/styles/sprinkles.css";
import { colorChip, colorLabel, colorTableLabelSize } from "./color.css";
import clsx from "clsx";

function ColorBox({
  backgroundColor,
}: {
  backgroundColor: Sprinkles["backgroundColor"];
}) {
  return (
    <Box
      className={colorChip}
      backgroundColor={backgroundColor}
      title={backgroundColor}
    />
  );
}

function TextColorLabel({ label }: { label: string }) {
  return <Text className={clsx(colorLabel, colorTableLabelSize)}>{label}</Text>;
}

export default function ColorRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack alignItems="flex-start">
        <Heading as="h1" size="lg">
          Color
        </Heading>
        <Text as="p">
          Macarons uses a color palette that by default follows the{" "}
          <Link to="https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale">
            Radix scale
          </Link>
          .
        </Text>
        <Text as="p">
          The base system organizes colors by use among the categories of base
          (grayscale), primary (for branding), info, success, warning, and
          error/destructive. Additional colors can be added ad-hoc, and a good
          example of this is "overlay", which is a stand-alone color in the
          theme.
        </Text>
      </VStack>

      <VStack alignItems="flex-start">
        <Heading as="h2" size="md">
          Background Colors
        </Heading>
        <Text as="p">
          These colors are used for the background of components and the app
          itself.
        </Text>
      </VStack>

      {/* Background Colors Table */}
      <HStack gap={2} justifyContent="space-evenly" width="100%">
        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Type</Heading>
          <TextColorLabel label="App" />
          <TextColorLabel label="Subtle" />
          <TextColorLabel label="Element" />
          <TextColorLabel label="Hovered Element" />
          <TextColorLabel label="Active Element" />
          <TextColorLabel label="Solid" />
          <TextColorLabel label="Hovered Solid" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Base</Heading>
          <ColorBox backgroundColor="appBackground" />
          <ColorBox backgroundColor="subtleBackground" />
          <ColorBox backgroundColor="elementBackground" />
          <ColorBox backgroundColor="hoveredElementBackground" />
          <ColorBox backgroundColor="activeElementBackground" />
          <ColorBox backgroundColor="solidBackground" />
          <ColorBox backgroundColor="hoveredSolidBackground" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Primary</Heading>
          <ColorBox backgroundColor="primaryAppBackground" />
          <ColorBox backgroundColor="primarySubtleBackground" />
          <ColorBox backgroundColor="primaryElementBackground" />
          <ColorBox backgroundColor="primaryHoveredElementBackground" />
          <ColorBox backgroundColor="primaryActiveElementBackground" />
          <ColorBox backgroundColor="primarySolidBackground" />
          <ColorBox backgroundColor="primaryHoveredSolidBackground" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Info</Heading>
          <ColorBox backgroundColor="infoAppBackground" />
          <ColorBox backgroundColor="infoSubtleBackground" />
          <ColorBox backgroundColor="infoElementBackground" />
          <ColorBox backgroundColor="infoHoveredElementBackground" />
          <ColorBox backgroundColor="infoActiveElementBackground" />
          <ColorBox backgroundColor="infoSolidBackground" />
          <ColorBox backgroundColor="infoHoveredSolidBackground" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Success</Heading>
          <ColorBox backgroundColor="successAppBackground" />
          <ColorBox backgroundColor="successSubtleBackground" />
          <ColorBox backgroundColor="successElementBackground" />
          <ColorBox backgroundColor="successHoveredElementBackground" />
          <ColorBox backgroundColor="successActiveElementBackground" />
          <ColorBox backgroundColor="successSolidBackground" />
          <ColorBox backgroundColor="successHoveredSolidBackground" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Warning</Heading>
          <ColorBox backgroundColor="warningAppBackground" />
          <ColorBox backgroundColor="warningSubtleBackground" />
          <ColorBox backgroundColor="warningElementBackground" />
          <ColorBox backgroundColor="warningHoveredElementBackground" />
          <ColorBox backgroundColor="warningActiveElementBackground" />
          <ColorBox backgroundColor="warningSolidBackground" />
          <ColorBox backgroundColor="warningHoveredSolidBackground" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Destructive</Heading>
          <ColorBox backgroundColor="destructiveAppBackground" />
          <ColorBox backgroundColor="destructiveSubtleBackground" />
          <ColorBox backgroundColor="destructiveElementBackground" />
          <ColorBox backgroundColor="destructiveHoveredElementBackground" />
          <ColorBox backgroundColor="destructiveActiveElementBackground" />
          <ColorBox backgroundColor="destructiveSolidBackground" />
          <ColorBox backgroundColor="destructiveHoveredSolidBackground" />
        </VStack>
      </HStack>

      <Divider />

      <VStack alignItems="flex-start">
        <Heading as="h2" size="md">
          Border Colors
        </Heading>
        <Text as="p">
          These colors are used for borders, outlines, and shadows.
        </Text>
      </VStack>

      {/* Border Color Table */}
      <HStack gap={2} justifyContent="space-evenly" width="100%">
        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Type</Heading>
          <TextColorLabel label="Subtle" />
          <TextColorLabel label="Element" />
          <TextColorLabel label="Hovered" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Base</Heading>
          <ColorBox backgroundColor="subtleBorder" />
          <ColorBox backgroundColor="elementBorder" />
          <ColorBox backgroundColor="hoveredElementBorder" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Primary</Heading>
          <ColorBox backgroundColor="primarySubtleBorder" />
          <ColorBox backgroundColor="primaryElementBorder" />
          <ColorBox backgroundColor="primaryHoveredElementBorder" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Info</Heading>
          <ColorBox backgroundColor="infoSubtleBorder" />
          <ColorBox backgroundColor="infoElementBorder" />
          <ColorBox backgroundColor="infoHoveredElementBorder" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Success</Heading>
          <ColorBox backgroundColor="successSubtleBorder" />
          <ColorBox backgroundColor="successElementBorder" />
          <ColorBox backgroundColor="successHoveredElementBorder" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Warning</Heading>
          <ColorBox backgroundColor="warningSubtleBorder" />
          <ColorBox backgroundColor="warningElementBorder" />
          <ColorBox backgroundColor="warningHoveredElementBorder" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Destructive</Heading>
          <ColorBox backgroundColor="destructiveSubtleBorder" />
          <ColorBox backgroundColor="destructiveElementBorder" />
          <ColorBox backgroundColor="destructiveHoveredElementBorder" />
        </VStack>
      </HStack>

      <Divider />

      <VStack alignItems="flex-start">
        <Heading as="h2" size="md">
          Text Colors
        </Heading>
        <Text as="p">
          Text has two colors for each state: high contrast and low contrast.
        </Text>
      </VStack>

      {/* Text Color Table */}
      <HStack gap={2} justifyContent="space-evenly" width="100%">
        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Type</Heading>
          <TextColorLabel label="Low Contrast" />
          <TextColorLabel label="High Constrast" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Base</Heading>
          <ColorBox backgroundColor="lowContrastText" />
          <ColorBox backgroundColor="highContrastText" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Primary</Heading>
          <ColorBox backgroundColor="primaryLowContrastText" />
          <ColorBox backgroundColor="primaryHighContrastText" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Info</Heading>
          <ColorBox backgroundColor="infoLowContrastText" />
          <ColorBox backgroundColor="infoHighContrastText" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Success</Heading>
          <ColorBox backgroundColor="successLowContrastText" />
          <ColorBox backgroundColor="successHighContrastText" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Warning</Heading>
          <ColorBox backgroundColor="warningLowContrastText" />
          <ColorBox backgroundColor="warningHighContrastText" />
        </VStack>

        <VStack gap={2}>
          <Heading className={colorTableLabelSize}>Destructive</Heading>
          <ColorBox backgroundColor="destructiveLowContrastText" />
          <ColorBox backgroundColor="destructiveHighContrastText" />
        </VStack>
      </HStack>
    </VStack>
  );
}

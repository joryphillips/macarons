import { Link } from "@remix-run/react";
import { Box, Divider, HStack, Heading, Text, VStack } from "~/components/ui";

export default function TextRoute() {
  return (
    <VStack gap={8} paddingBottom={8} width="100%" alignItems="flex-start">
      <Heading as="h2" size="xl">
        Text
      </Heading>
      <Divider />
      <VStack gap={6} alignItems="flex-start">
        <Heading as="h3" size="lg">
          Size Options
        </Heading>
        <VStack width="100%" alignItems="flex-start" gap={8}>
          <Text as="p" size="2xl" color="lowContrastText">
            2xl: Hero size. Good for big, bold statements and headlines.
          </Text>
          <Text as="p" size="xl" color="lowContrastText">
            xl: Heading size. Good for page headings.
          </Text>
          <Text as="p" size="lg" color="lowContrastText">
            lg: SubHeading size. Good for section headings.
          </Text>
          <Text as="p" size="md" color="lowContrastText">
            md: Default. Good for body text, inputs, and most uses.
          </Text>
          <Text as="p" size="sm" color="lowContrastText">
            sm: Secondary size. Useful for labels and captions.
          </Text>
          <Text as="p" size="xs" color="lowContrastText">
            xs: Tertiary size. Good for footnotes.
          </Text>
        </VStack>
      </VStack>
      <Divider />
      <VStack gap={6} alignItems="flex-start">
        <Heading as="h3" size="lg">
          Font Weight Options
        </Heading>
        <Text as="p">Assumes your chosen fonts support all weights.</Text>
        <VStack width="100%" alignItems="baseline" gap={6}>
          <Text as="p" color="lowContrastText" fontWeight="thin">
            thin (100)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="extraLight">
            extraLight (200)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="light">
            light (300)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="regular">
            regular (400) (default)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="medium">
            medium (500)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="semiBold">
            semiBold (600)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="bold">
            bold (700)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="extraBold">
            extraBold (800)
          </Text>
          <Text as="p" color="lowContrastText" fontWeight="black">
            black (900)
          </Text>
        </VStack>
      </VStack>
      <Divider />
      <VStack gap={6} alignItems="flex-start">
        <Heading as="h3" size="lg">
          Color Options{" "}
        </Heading>
        <VStack width="100%" alignItems="baseline" gap={6}>
          <Text as="p" color="standardLowContrast">
            standardLowContrast
          </Text>
          <Text as="p" color="standardHighContrast">
            standardHighContrast (default)
          </Text>
          <Text as="p" color="infoLowContrast">
            infoLowContrast
          </Text>
          <Text as="p" color="infoHighContrast">
            infoHighContrast
          </Text>
          <Text as="p" color="successLowContrast">
            successLowContrast
          </Text>
          <Text as="p" color="successHighContrast">
            successHighContrast
          </Text>
          <Text as="p" color="warningLowContrast">
            warningLowContrast
          </Text>
          <Text as="p" color="warningHighContrast">
            warningHighContrast
          </Text>
          <Text as="p" color="destructiveLowContrast">
            destructiveLowContrast
          </Text>
          <Text as="p" color="destructiveHighContrast">
            destructiveHighContrast
          </Text>
        </VStack>
      </VStack>
      <Divider />
      <VStack gap={6} alignItems="flex-start">
        <Heading as="h3" size="lg">
          Text for Building UIs
        </Heading>
        <VStack width="100%" alignItems="flex-start" gap={8}>
          <HStack
            gap={6}
            alignItems="center"
            marginY={6}
            style={{
              borderTop: "1px solid gray",
              borderBottom: "1px solid gray",
            }}
          >
            <Text as="label" size="md" color="standardHighContrast">
              Label
            </Text>
            <Box
              backgroundColor="elementBackground"
              style={{ height: "1rem" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              paddingX={2}
            >
              <Text size="xs">Box with height at 1rem</Text>
            </Box>
          </HStack>
          <Text>
            Using size="md" calculates capital letters at exactly 1rem. Because
            we are using{" "}
            <Link to="https://seek-oss.github.io/capsize/">Capsize</Link>, the
            resulting computed font size shown in the browser's developer tools
            will be non-rounded numbers larger than 1rem. This is mitigated
            using typography tokens for root relative sizes that are smaller.
          </Text>
          <Text>
            For this small cost, we have finer control for lining text up with
            UI elements, and the user can change the readability of text by
            changing the default font size for the page.
          </Text>
        </VStack>
      </VStack>
      <Divider />
    </VStack>
  );
}

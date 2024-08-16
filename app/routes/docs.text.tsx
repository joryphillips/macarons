import { Divider, Heading, Text, VStack } from "~/components/ui";

export default function TextRoute() {
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
        Text
      </Heading>
      <VStack gap={4} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Overview
        </Heading>
        <Text as="p">
          The Text component implements the typescale provided by the design
          system's typography theme. It defaults to medium size and left
          aligment, and is stamped into the DOM as a "span" unless otherwise
          specified.
        </Text>
        <Text as="p">
          Out of the box, the Text component (via the typescale system) allows
          the user to change the size of typography across the app by setting
          the font size in their browser's settings. We view this as an
          important accessibility measure. As of this writing, among Chakra UI,
          Material UI, Radix, and TailwindCSS, only Material UI complies with
          global font size changes in the browser. Too many websites and apps
          prevent this functionality. Not on our watch!
        </Text>
      </VStack>
      <Divider />
      <VStack gap={4} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Size Options
        </Heading>
        <VStack width="100%" alignItems="flex-start" gap={6}>
          <Text as="p" size="jumbo" color="lowContrastText">
            jumbo: Jumbotron or titlemark text.
          </Text>
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
      <VStack gap={6} alignItems="flex-start" as="section">
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
      <VStack gap={6} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Color Options{" "}
        </Heading>
        <VStack width="100%" alignItems="baseline" gap={6}>
          <Text as="p" color="lowContrastText">
            lowContrastText
          </Text>
          <Text as="p" color="highContrastText">
            highContrastText (default)
          </Text>
          <Text as="p" color="infoLowContrastText">
            infoLowContrastText
          </Text>
          <Text as="p" color="infoHighContrastText">
            infoHighContrastText
          </Text>
          <Text as="p" color="successLowContrastText">
            successLowContrastText
          </Text>
          <Text as="p" color="successHighContrastText">
            successHighContrastText
          </Text>
          <Text as="p" color="warningLowContrastText">
            warningLowContrastText
          </Text>
          <Text as="p" color="warningHighContrastText">
            warningHighContrastText
          </Text>
          <Text as="p" color="destructiveLowContrastText">
            destructiveLowContrastText
          </Text>
          <Text as="p" color="destructiveHighContrastText">
            destructiveHighContrastText
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}

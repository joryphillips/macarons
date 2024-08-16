import { Link } from "@remix-run/react";
import { Divider, Heading, Text, VStack } from "~/components/ui";

export default function HeadingsRoute() {
  return (
    <VStack gap={8} paddingBottom={8} width="100%" alignItems="flex-start">
      <Heading>Heading</Heading>
      <Text as="p">
        A convenience component, Heading extends the{" "}
        <Link to="/ui/text">Text</Link> component, narrowing the allowed "as"
        elements to HTML headings (h1, h2, etc.) and defaulting to{" "}
        <strong>size="xl"</strong> (as opposed to <strong>"md"</strong> for
        Text). Headings use the same font scale as Text. Headings default to a
        font weight of semi-bold (600) and the HTML tag h2.
      </Text>
      <Divider />
      <VStack gap={6} alignItems="flex-start">
        <Heading as="h3" size="lg">
          Size Options
        </Heading>
        <VStack width="100%" alignItems="baseline" gap={8}>
          <Heading size="jumbo" color="lowContrastText">
            jumbo: Jumbo size. Use sparingly.
          </Heading>
          <Heading size="2xl" color="lowContrastText">
            2xl: Hero size. Also use sparingly.
          </Heading>
          <Heading size="xl" color="lowContrastText">
            xl: Heading size. Default. Good for page headings.
          </Heading>
          <Heading size="lg" color="lowContrastText">
            lg: SubHeading size. Good for section headings.
          </Heading>
          <Heading size="md" color="lowContrastText">
            md: Body text size.
          </Heading>
          <Heading size="sm" color="lowContrastText">
            sm: Secondary size.
          </Heading>
          <Heading size="xs" color="lowContrastText">
            xs: Tertiary size.
          </Heading>
        </VStack>
      </VStack>
      <Divider />
      <VStack gap={6} alignItems="flex-start">
        <Heading as="h3" size="lg">
          Color Options
        </Heading>
        <VStack width="100%" alignItems="baseline" gap={6}>
          <Heading color="lowContrastText" size="md">
            lowContrastText
          </Heading>
          <Heading color="highContrastText" size="md">
            highContrastText
          </Heading>
          <Heading color="infoLowContrastText" size="md">
            infoLowContrastText
          </Heading>
          <Heading color="infoHighContrastText" size="md">
            infoHighContrastText
          </Heading>
          <Heading color="successLowContrastText" size="md">
            successLowContrastText
          </Heading>
          <Heading color="successHighContrastText" size="md">
            successHighContrastText
          </Heading>
          <Heading color="warningLowContrastText" size="md">
            warningLowContrastText
          </Heading>
          <Heading color="warningHighContrastText" size="md">
            warningHighContrastText
          </Heading>
          <Heading color="destructiveLowContrastText" size="md">
            destructiveLowContrastText
          </Heading>
          <Heading color="destructiveHighContrastText" size="md">
            destructiveHighContrastText
          </Heading>
        </VStack>
      </VStack>
      <Divider />
      <VStack gap={6} alignItems="flex-start">
        <Heading as="h3" size="lg">
          Weight Options
        </Heading>
        <VStack width="100%" alignItems="baseline" gap={6}>
          <Heading color="lowContrastText" size="md" fontWeight="thin">
            thin (100)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="extraLight">
            extraLight (200)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="light">
            light (300)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="regular">
            regular (400)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="medium">
            medium (500)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="semiBold">
            semiBold (600)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="bold">
            bold (700)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="extraBold">
            extraBold (800)
          </Heading>
          <Heading color="lowContrastText" size="md" fontWeight="black">
            black (900)
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  );
}

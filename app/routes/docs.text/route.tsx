import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
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
      <Heading as="h1" size="xl">
        Text
      </Heading>
      <VStack gap={4} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Overview
        </Heading>
        <Text as="p">
          The Text component implements the typescale provided by the design
          system's typography theme. It defaults to medium size and left
          aligment, and is stamped into the DOM as a <code>span</code> unless
          otherwise specified via the <code>as</code> prop.
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
          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" size="jumbo" color="lowContrastText">
              Jumbo: Jumbotron or titlemark text.
            </Text>
            <SyntaxHighlighter>{`<Text size="jumbo">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" size="2xl" color="lowContrastText">
              2xl: Hero size. Good for big, bold statements and headlines.
            </Text>
            <SyntaxHighlighter>{`<Text size="2xl">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" size="xl" color="lowContrastText">
              xl: Heading size. Good for page headings.
            </Text>
            <SyntaxHighlighter>{`<Text size="xl">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" size="lg" color="lowContrastText">
              lg: SubHeading size. Good for section headings.
            </Text>
            <SyntaxHighlighter>{`<Text size="lg">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" size="md" color="lowContrastText">
              md: Default. Good for body text, inputs, and most uses.
            </Text>
            <SyntaxHighlighter>{`<Text size="md">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" size="sm" color="lowContrastText">
              sm: Secondary size. Useful for labels and captions.
            </Text>
            <SyntaxHighlighter>{`<Text size="sm">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" size="xs" color="lowContrastText">
              xs: Tertiary size. Good for footnotes.
            </Text>
            <SyntaxHighlighter>{`<Text size="xs">`}</SyntaxHighlighter>
          </VStack>
        </VStack>
      </VStack>

      <Divider />

      <VStack gap={6} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Font Weight Options
        </Heading>
        <Text as="p">Assumes your chosen fonts support all weights.</Text>

        <VStack width="100%" alignItems="baseline" gap={6}>
          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="thin">
              thin (100)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="thin">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="extraLight">
              extraLight (200)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="extraLight">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="light">
              light (300)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="light">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="regular">
              regular (400) (default)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="regular">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="medium">
              medium (500)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="medium">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="semiBold">
              semiBold (600)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="semiBold">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="bold">
              bold (700)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="bold">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="extraBold">
              extraBold (800)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="extraBold">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText" fontWeight="black">
              black (900)
            </Text>
            <SyntaxHighlighter>{`<Text fontWeight="black">`}</SyntaxHighlighter>
          </VStack>
        </VStack>
      </VStack>

      <Divider />

      <VStack gap={6} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Color Options
        </Heading>
        <VStack width="100%" alignItems="baseline" gap={6}>
          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="lowContrastText">
              lowContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="lowContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="highContrastText">
              highContrastText (default)
            </Text>
            <SyntaxHighlighter>{`<Text color="highContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="infoLowContrastText">
              infoLowContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="infoLowContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="infoHighContrastText">
              infoHighContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="infoHighContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="successLowContrastText">
              successLowContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="successLowContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="successHighContrastText">
              successHighContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="successHighContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="warningLowContrastText">
              warningLowContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="warningLowContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="warningHighContrastText">
              warningHighContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="warningHighContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="destructiveLowContrastText">
              destructiveLowContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="destructiveLowContrastText">`}</SyntaxHighlighter>
          </VStack>

          <VStack width="100%" alignItems="flex-start" gap={2}>
            <Text as="p" color="destructiveHighContrastText">
              destructiveHighContrastText
            </Text>
            <SyntaxHighlighter>{`<Text color="destructiveHighContrastText">`}</SyntaxHighlighter>
          </VStack>
        </VStack>
      </VStack>

      <VStack gap={6} alignItems="flex-start" as="section">
        <Heading as="h3" size="lg">
          Tag Options
        </Heading>
        <Text as="p">
          The Text component defaults to a <code>span</code> element. You can
          change this by passing the <code>as</code> prop with one of the
          following values.
        </Text>
        <VStack gap={1} as="ul" alignItems="flex-start">
          <Text as="li">
            <code>span</code> (default)
          </Text>
          <Text as="li">
            <code>p</code>
          </Text>
          <Text as="li">
            <code>h1</code>
          </Text>
          <Text as="li">
            <code>h2</code>
          </Text>
          <Text as="li">
            <code>h3</code>
          </Text>
          <Text as="li">
            <code>h4</code>
          </Text>
          <Text as="li">
            <code>h5</code>
          </Text>
          <Text as="li">
            <code>h6</code>
          </Text>
          <Text as="li">
            <code>label</code>
          </Text>
          <Text as="li">
            <code>li</code>
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}

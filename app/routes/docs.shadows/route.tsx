import { Box, Text, VStack, Heading, HStack } from "~/components/ui";
import { Sprinkles } from "~/styles/sprinkles.css";

function ShadowBox({ shadow }: { shadow: Sprinkles["boxShadow"] }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={4}
      borderRadius="md"
      boxShadow={shadow}
      backgroundColor="elementBackground"
      color="highContrastText"
      style={{
        width: "90px",
        height: "90px",
      }}
    >
      {`${shadow}`}
    </Box>
  );
}

export default function ShadowsRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <VStack gap={4} width="100%" alignItems="flex-start">
        <Heading as="h1" size="xl">
          Shadows
        </Heading>
        <Text as="p">
          Box and derived components (Stack, etc) have a boxShadow prop that
          accepts a shadow key from the theme. This scale is very similar to
          Tailwind CSS's shadow scale.
        </Text>
        <HStack gap={8} flexWrap="wrap">
          <ShadowBox shadow="inner" />
          <ShadowBox shadow="sm" />
          <ShadowBox shadow="base" />
          <ShadowBox shadow="md" />
          <ShadowBox shadow="lg" />
          <ShadowBox shadow="xl" />
          <ShadowBox shadow="2xl" />
        </HStack>
      </VStack>
      <Text as="p">
        Note that in dark mode, shadows disappear. It does not look proper to
        have shadows lighter than a background, and so elevation is expressed
        via background color instead.
      </Text>
    </VStack>
  );
}

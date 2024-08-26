import { Text, VStack, Heading } from "~/components/ui";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";
import { BoxExample } from "./BoxExample";
import BoxExampleString from "./BoxExample?raw";
import { BoxAsExample } from "./BoxAsExample";
import BoxAsExampleString from "./BoxAsExample?raw";

export default function BoxRoute() {
  return (
    <VStack gap={4} width="100%" alignItems="flex-start">
      <Heading>Box</Heading>
      <Text as="p">
        The Macaron Box is a polymorphic component that is constrained by
        Sprinkles properties (Atoms).
      </Text>
      <Text>
        This component is primarily intended for making other components and for
        rapid layouts. Also see the Stack components for common flexBox needs.
        Neither can be used to make an SVG.
      </Text>
      <Text>
        When more design control is needed, use `style` from
        @vanilla-extract/css in a companion .css.ts file with the component or
        HTML Element that best suits your needs.
      </Text>

      <BoxExample />

      <SyntaxHighlighter>{BoxExampleString}</SyntaxHighlighter>

      <Heading size="lg">"as" prop</Heading>
      <Text as="p">
        Using the "as" prop, you can create a Box component that renders as
        another HTML element.
      </Text>
      <BoxAsExample />
      <SyntaxHighlighter>{BoxAsExampleString}</SyntaxHighlighter>
    </VStack>
  );
}

import { Link } from "@remix-run/react";
import { Titlemark } from "~/components/logo/Titlemark";
import { VStack, Heading, Text } from "~/components/ui";

export default function IntroductionRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Titlemark />
      <VStack width="100%" alignItems="flex-start" as="section">
        <Heading as="h1" size="xl">
          Introduction
        </Heading>
        <Text as="p">
          Macarons is a design system with styled UI components intended for
          React projects. It was built with{" "}
          <Link to="https://vanilla-extract.style" target="_blank">
            Vanilla Extract
          </Link>{" "}
          and{" "}
          <Link to="https://www.radix-ui.com/" target="_blank">
            Radix Primitives
          </Link>
          , and is heavily influenced by{" "}
          <Link to="https://ui.shadcn.com/" target="_blank">
            shadcn/ui
          </Link>
          . It also draws inspiration and lessons from the use of Material UI,
          Tailwind, and Chakra UI.
        </Text>
        <Text as="p">
          Macarons was originally created to make a{" "}
          <Link to="https://remix.run" target="_blank">
            Remix
          </Link>{" "}
          app that supports{" "}
          <Link
            to="https://remix.run/docs/en/main/guides/streaming"
            target="_blank"
          >
            SSR Streaming
          </Link>{" "}
          for users with limited bandwith and spotty internet connections.
        </Text>
      </VStack>
      <VStack width="100%" alignItems="flex-start" as="section">
        <Heading as="h4" size="md">
          Why Macarons?
        </Heading>
        <VStack gap={2} width="100%" alignItems="flex-start" as="ul">
          <Text as="li">
            • Makes custom Design Systems and Tokens easy to work with and
            understand.
          </Text>
          <Text as="li">• Balances flexibility with ease-of-use.</Text>
          <Text as="li">
            • Leverages TypeScript via Vanilla Extract and Sprinkles to make it
            faster and easier to apply valid styles in your code.
          </Text>
        </VStack>
        <Text as="p">
          The most obvious question when using Radix Primitives for UI is, "why
          not use Radix Themes?" The reason is similar to why shadcn/ui exists:
          Macarons gives the user complete control over their own design system.
        </Text>
        <Text as="p">
          While a basic design system is provided here, it is relatively easy to
          create new scales, tokens, or a completely different system structure.
          Macarons provides a lot of flexibility compared to many UI component
          systems. If you don't need or want this control, there are plenty of
          great options out there.
        </Text>
      </VStack>

      <VStack width="100%" alignItems="flex-start" as="section">
        <Heading as="h4" size="md">
          Priorities
        </Heading>
        <Text as="p">
          Macarons balances the needs for rapid development, flexibility, and
          future maintenance. It prioritizes user experience and accessibility
          along with easy developer onboarding —— or just being able to pick it
          back up after not looking at it for a couple of months!
        </Text>
        <Text as="p">
          Like the app it was developed alongside, Macarons recognizes the
          future potential need to swap out any library or tech stack decision
          or approach for better solutions if they come along.{" "}
        </Text>
      </VStack>
      <VStack width="100%" alignItems="flex-start" as="section">
        <Heading as="h4" size="md">
          Non-Goals
        </Heading>
        <Text as="p">
          So what was deprioritized? Macarons does not attempt to be a
          comprehensive solution, nor one that can be installed via npm. This is
          more like a starter kit to expand upon, and a good foundation for
          building out a front end. Follow or modify the patterns shown here to
          add more components, tokens, or other design system aspects.
        </Text>
      </VStack>
      <Text as="p">
        Next: <Link to="/docs/philosophy">Philosophy</Link>
      </Text>
    </VStack>
  );
}

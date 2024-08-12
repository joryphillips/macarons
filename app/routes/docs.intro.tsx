import { Link } from "@remix-run/react";
import { VStack, Heading, Text } from "~/components/ui";

export default function IntroductionRoute() {
  return (
    <VStack
      gap={6}
      paddingBottom={8}
      maxWidth="prose"
      width="100%"
      alignItems="flex-start"
      as="article"
    >
      <VStack gap={4} width="100%" alignItems="flex-start" as="section">
        <Heading as="h3" size="xl">
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
          <Link to="https://chakra-ui.com/" target="_blank">
            Chakra UI
          </Link>{" "}
          and{" "}
          <Link to="https://ui.shadcn.com/" target="_blank">
            shadcn/ui
          </Link>
          .
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
      <VStack gap={4} width="100%" alignItems="flex-start" as="section">
        <Heading as="h4" size="lg">
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
      <VStack gap={4} width="100%" alignItems="flex-start" as="section">
        <Heading as="h4" size="lg">
          Non-Goals
        </Heading>
        <Text as="p">
          So what was deprioritized? Macarons does not attempt to be a
          comprehensive solution, nor one that can be installed via npm. This is
          more like a starter kit to expand upon, and a good foundation for
          building out a front end. Follow or modify the patterns shown here to
          add more components, tokens, or other design system aspects.
        </Text>

        <Text as="p">
          Next: <Link to="/docs/philosophy">Philosophy</Link>
        </Text>
      </VStack>
    </VStack>
  );
}

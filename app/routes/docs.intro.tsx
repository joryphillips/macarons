import { Link } from "@remix-run/react";
import { VStack, Heading, Text } from "~/components/ui";

export default function IntroductionRoute() {
  return (
    <VStack
      gap={8}
      paddingBottom={8}
      maxWidth="prose"
      width="100%"
      alignItems="flex-start"
    >
      <Heading as="h3" size="xl">
        Introduction
      </Heading>
      <Text as="p">
        Madeleines is a design and UI component system intended for React
        projects. It was built with{" "}
        <Link to="https://www.radix-ui.com/" target="_blank">
          Radix
        </Link>{" "}
        and{" "}
        <Link to="https://vanilla-extract.style" target="_blank">
          Vanilla Extract,
        </Link>{" "}
        and is heavily influenced by{" "}
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
        Madeleines was originally created to make a{" "}
        <Link to="https://remix.run" target="_blank">
          Remix
        </Link>{" "}
        app that supports{" "}
        <Link
          to="https://remix.run/docs/en/1.19.3/guides/streaming"
          target="_blank"
        >
          SSR Streaming
        </Link>{" "}
        for users with limited bandwith and spotty internet connections.
      </Text>
      <Text as="p">
        Madeleines is intended for intitial rapid app development, not
        production use. It is opinionated, but is built in a way that makes it
        easy to customize and extend.
      </Text>
      <Text as="p">
        If you want something more mature and have no qualms about Tailwind,{" "}
        <Link to="https://ui.shadcn.com/" target="_blank">
          shadcn/ui
        </Link>{" "}
        may be right for you. If you want something more mature and don't care
        about SSR Streaming,{" "}
        <Link to="https://chakra-ui.com/" target="_blank">
          Chakra UI
        </Link>{" "}
        has just about everything you need to build your app. If you need
        control over your own design system, and want something simple to build
        from, keep reading.
      </Text>
    </VStack>
  );
}

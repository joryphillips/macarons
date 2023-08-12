import { Link } from "@remix-run/react";
import { VStack, Heading, Text, Divider } from "~/components/ui";

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
      <Divider />
      <Heading as="h3" size="lg">
        Goals and Requirements
      </Heading>
      <VStack width="100%" alignItems="flex-start" gap={8}>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            Don't reinvent the wheel
          </Heading>{" "}
          <Text as="p">
            The world does not need yet another component system, and you don't
            have the time or budget to make your own from scratch. Extending
            unstyled/barebones UI components is an advantageous solution; not
            having to build, and worse, <strong>maintain</strong>, the
            challenging parts means more time for iteration and refinement.
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            A11y baked in
          </Heading>{" "}
          <Text as="p">
            Accessibility is a must for any product with any users. Some might
            argue that it is not needed for an early stage product. What if one
            of your first critical path users needs it and you don't have it?
            Don't sink your business before it even gets started!
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            React
          </Heading>
          <Text as="p">
            While we have a special place in our hearts for Web Components,
            React is what most devs know, and if you plan to scale, you're going
            to need to hire some. However, if you can make a valid argument to
            an investor for using Svelte, or similar, then go for it!!
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            Minimize bytes delivered to the device
          </Heading>
          <Text as="p">
            We developed an app using this system with users that are often are
            doing their work in possibly subterranean places with thick concrete
            walls, questionable wifi, and tons of electronic equipment
            everywhere. A top priority from day one was minimizing bytes
            delivered to a device. Done right,{" "}
            <Link
              to="https://remix.run/docs/en/1.19.3/guides/streaming"
              target="_blank"
            >
              SSR and Streaming
            </Link>{" "}
            provide a better user experience for these folks, and as a result,
            everyone else too. Just like a11y!
          </Text>
          <Text as="p">
            At the time of initial development, this precluded the use of all
            Emotion-based UI systems (Chakra, Mantine, etc) and led us to{" "}
            <Link to="https://vanilla-extract.style" target="_blank">
              Vanilla Extract
            </Link>
            . Switching to this system from Chakra UI dropped our app's bundle
            size by 140kb and reduced initial site load time by nearly half a
            second on a gigabit interrnet connection.
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            Minimize learning new things
          </Heading>
          <Text as="p">
            Working with or modifiying some design systems is like flying the
            space shuttle. Let's keep it simple and minimize the learning curve.
            To that end: eschew the mental overhead of devs needing to learn
            utility css classes. Now, Tailwind is awesome, and if you love it,
            once again, check out{" "}
            <Link to="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </Link>
            .
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            Avoid CSS scoping problems
          </Heading>
          <Text as="p">
            Never again add a css class prefix to prevent rules from leaking
            from their intended component. (Hello, Web Components!) It's a
            bummer to have to add <strong>.input</strong> to everything related
            to your input, then realize that someone else is already using that
            in one of your imports, and you have to go back and change it to{" "}
            <strong>.input-custom-to-this-project</strong> or something. Anyway,
            Vanilla Extract makes avoiding all this a breeze.
          </Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Heading as="h4" size="md">
            Theming-ready and highly customizable
          </Heading>
          <Text as="p">
            Light + dark mode + general theming support. Built with Vanilla
            Extract and Sprinkles. And now you know how we chose the name{" "}
            <Link to="https://en.wikipedia.org/wiki/Madeleine_(cake)">
              Madeleines.
            </Link>
          </Text>
        </VStack>
      </VStack>
      <Divider />
      <Heading as="h3" size="lg">
        Nice-To-Haves
      </Heading>
      <VStack as="ul" width="100%" alignItems="flex-start" gap={8}>
        <Text as="p">
          Control application of themes in one location only: individual
          components should not need selectors for dark mode.
        </Text>
        <Text as="p">
          Box component for great DX and rapid iteration. Once you have
          experienced building a webpage with a Box, you'll want it for
          everything.
        </Text>
      </VStack>
    </VStack>
  );
}

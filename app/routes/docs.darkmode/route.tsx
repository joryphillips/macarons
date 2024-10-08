import { ThemeToggle } from "~/components/ThemeToggle/ThemeToggle";
import { Heading, HStack, Text, VStack } from "~/components/ui";

export default function DarkmodeRoute() {
  return (
    <VStack marginBottom={8} width="100%" alignItems="flex-start">
      <Heading>Dark Mode</Heading>
      <Text as="p">Macaroons implements light and dark mode via themes.</Text>
      <HStack>
        <ThemeToggle />
        <Text fontWeight="bold" as="p" size="sm">
          Click the icon to toggle between light and dark mode
        </Text>
      </HStack>
      <Text as="p">
        A theme toggle component is included. It is a simple button that toggles
        between light and dark mode. An assumption is made that if the user's
        device automatically switches to light or dark, that they would like the
        app to also switch.
      </Text>
      <Text as="p">
        The Radix color palette offers light and dark versions of all its
        colors. When dark theme is activated, all the colors in the app are
        swapped out for their dark counterparts. This allows us to use one
        designation for colors app-wide, instead of specifying two different
        names based on the mode each time a color is used. It is a tremendous
        affordance in developer experience.
      </Text>
      <Text>
        Note that since the Macarons documentation site itself does not include
        server-side rendering, some aspects of SSR implementation are missing,
        such as storing the user's preference in a cookie, and code that ensures
        that a flash of the wrong theme is not visible as the server render
        transitions to the client.
      </Text>
    </VStack>
  );
}

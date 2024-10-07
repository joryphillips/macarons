import { Avatar, Heading, Text, VStack } from "~/components/ui";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

const avatarString = `<Avatar imageSource="https://i.pravatar.cc/150" userName="Jane Doe" userInitials="JD" />`;
const avatarFallbackString = `<Avatar imageSource="http://brokenimagelink.com" userName="Randy Marsh" userInitials="RM" />`;

export default function AvatarRoute() {
  return (
    <VStack spacing={8} alignItems="flex-start" width="100%">
      <VStack spacing={4} alignItems="flex-start">
        <Heading as="h1" size="xl">
          Avatar
        </Heading>

        <Text as="p">
          The Avatar component is used to display a user's profile picture or
          initials. It is commonly used in navigation bars, user profiles, and
          comments sections. If the image source is not available, the Avatar
          component will display the user's initials. The userName is used as
          the image's alt text.
        </Text>
      </VStack>

      <VStack spacing={8} alignItems="flex-start" width="100%" maxWidth="xs">
        <VStack spacing={4} alignItems="flex-start" width="100%">
          <Heading as="h2" size="lg">
            Standard
          </Heading>
          <Avatar
            imageSource="https://i.pravatar.cc/150?u=consistent3"
            userName="Jane Doe"
            userInitials="JD"
          />
          <SyntaxHighlighter>{avatarString}</SyntaxHighlighter>
        </VStack>
        <VStack spacing={4} alignItems="flex-start" width="100%">
          <Heading as="h2" size="lg">
            Fallback
          </Heading>
          <Avatar
            imageSource="http://brokenimagelink.com"
            userName="Randy Marsh"
            userInitials="RM"
          />
          <SyntaxHighlighter>{avatarFallbackString}</SyntaxHighlighter>
        </VStack>
      </VStack>
    </VStack>
  );
}

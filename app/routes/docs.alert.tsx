import { Alert, Heading, Text, VStack } from "~/components/ui";

export default function AlertRoute() {
  return (
    <VStack spacing={8} alignItems="flex-start" width="100%">
      <Heading as="h2" size="xl">
        Alert
      </Heading>
      <Text as="p">
        The alert component is used to display messages to the user. It can be
        used to display information, warnings, errors, and success. It can also
        be used inline in a page layout or used as a "butter" or "snack" bar
        that displays at the top of the page, often below a menu bar.
      </Text>
      <Alert status="info" maxWidth="xs" width="100%">
        <span>Info</span>
      </Alert>
      <Alert status="warning" maxWidth="xs" width="100%">
        <span>Warning</span>
      </Alert>
      <Alert status="success" maxWidth="xs" width="100%">
        <span>Success</span>
      </Alert>
      <Alert status="error" maxWidth="xs" width="100%">
        <span>Error</span>
      </Alert>
      <Heading as="h3" size="lg">
        Customizing
      </Heading>
      <Alert
        borderStyle="none"
        showIcon={false}
        status="info"
        maxWidth="xs"
        width="100%"
      >
        Custom Alert
      </Alert>
      <Heading as="h3" size="lg">
        Props and Defaults
      </Heading>
      <Text as="p">
        <VStack spacing={2} alignItems="flex-start">
          <code>status="info"</code>
          <code>showIcon=&#123;true&#125;</code>
          <code>borderRadius="sm"</code>
          <code>borderStyle="solid"</code>
          <code>borderWidth="double"</code>
          <code>padding={3}</code>
          <code>display="flex"</code>
          <code>flexDirection="row"</code>
          <code>alignItems="center"</code>
          <code>gap={2}</code>
        </VStack>
      </Text>
    </VStack>
  );
}

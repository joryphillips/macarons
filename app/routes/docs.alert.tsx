import { Alert, Heading, VStack } from "~/components/ui";

export default function AlertRoute() {
  return (
    <VStack spacing={8} alignItems="flex-start" width="100%">
      <Heading as="h2" size="xl">
        Alert
      </Heading>
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
    </VStack>
  );
}

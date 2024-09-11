import { Alert, Heading, Text, VStack } from "~/components/ui";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

const infoAlertString = `<Alert status="info">Info</Alert>`;
const warningAlertString = `<Alert status="warning">Warning</Alert>`;
const successAlertString = `<Alert status="success">Success</Alert>`;
const errorAlertString = `<Alert status="error">Error</Alert>`;
const customAlertString = `<Alert borderRadius="none" borderStyle="none" showIcon={false}>
  Custom Alert
</Alert>`;

export default function AlertRoute() {
  return (
    <VStack spacing={8} alignItems="flex-start" width="100%">
      <VStack spacing={4} alignItems="flex-start">
        <Heading as="h1" size="xl">
          Alert
        </Heading>

        <Text as="p">
          The alert component is used to display messages to the user. It can be
          used to display information, warnings, errors, and success. It can
          also be used inline in a page layout or used as a "butter" or "snack"
          bar that displays at the top of the page, often below a menu bar.
        </Text>
        <Alert status="warning" width="100%">
          Alert
        </Alert>
        <Text as="p">
          The alert component extends the Box component and adds a border,
          background color, and an icon to the left of the message. Alert's
          "status" prop controls its background color, text color, and border
          color via styleVariants. These values can be changed in Alert.css.ts.
        </Text>
      </VStack>

      <VStack spacing={8} alignItems="flex-start" width="100%" maxWidth="xs">
        <VStack spacing={4} alignItems="flex-start" width="100%">
          <Alert status="info" width="100%">
            Info
          </Alert>
          <SyntaxHighlighter>{infoAlertString}</SyntaxHighlighter>
        </VStack>

        <VStack spacing={4} alignItems="flex-start" width="100%">
          <Alert status="warning" width="100%">
            Warning
          </Alert>
          <SyntaxHighlighter>{warningAlertString}</SyntaxHighlighter>
        </VStack>
        <VStack spacing={4} alignItems="flex-start" width="100%">
          <Alert status="success" width="100%">
            Success
          </Alert>
          <SyntaxHighlighter>{successAlertString}</SyntaxHighlighter>
        </VStack>

        <VStack spacing={4} alignItems="flex-start" width="100%">
          <Alert status="error" width="100%">
            Error
          </Alert>
          <SyntaxHighlighter>{errorAlertString}</SyntaxHighlighter>
        </VStack>
      </VStack>

      <VStack spacing={4} alignItems="flex-start" width="100%">
        <Heading as="h3" size="lg">
          Customizing
        </Heading>
        <Text as="p">
          Quick customization is possible via the the default props listed
          below.
        </Text>
        <Alert borderRadius="none" borderStyle="none" showIcon={false}>
          Custom Alert
        </Alert>
        <SyntaxHighlighter>{customAlertString}</SyntaxHighlighter>
      </VStack>
      <Heading as="h3" size="lg">
        Default Props
      </Heading>
      <VStack spacing={4} alignItems="flex-start">
        <SyntaxHighlighter>{`<Alert
  status="info"
  showIcon={true}
  borderRadius="sm"
  borderStyle="solid"
  borderWidth="double"
  padding={3}
  display="flex"
  flexDirection="row"
  alignItems="center"
  gap={2}
>
// equivalent to 
<Alert>
`}</SyntaxHighlighter>
      </VStack>
    </VStack>
  );
}

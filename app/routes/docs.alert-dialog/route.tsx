import { useState } from "react";
import { VStack, Heading, Button, Text } from "~/components/ui";
import { AlertDialogExample } from "./AlertDialogExample";
import AlertDialogExampleString from "./AlertDialogExample?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

export default function AlertDialogRoute() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <VStack gap={8} alignItems="flex-start" width="100%">
      <VStack gap={4} alignItems="flex-start" width="100%">
        <Heading>Alert Dialog</Heading>
        <Text as="p">
          The alert dialog component is used to focus the user's attention on a
          required action. It primarily differs from a regular dialog in that
          clicking outside the dialog does not close it.
        </Text>
        <Text as="p">AlertDialog imports styles from Dialog.</Text>
      </VStack>
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      <AlertDialogExample
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
      <SyntaxHighlighter>{AlertDialogExampleString}</SyntaxHighlighter>
    </VStack>
  );
}

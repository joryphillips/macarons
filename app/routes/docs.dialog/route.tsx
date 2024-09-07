import { useState } from "react";
import { VStack, Heading, Button, Text } from "~/components/ui";
import { DialogExample } from "./DialogExample";
import dialogExampleString from "./DialogExample.tsx?raw";
import { SyntaxHighlighter } from "~/components/SyntaxHighlighter/SyntaxHighlighter";

export default function DialogRoute() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Dialog</Heading>
      <Text as="p">
        The dialog component is used to show information above other content in
        a window. It can be closed via action or clicking outside the dialog
        box.
      </Text>
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      <DialogExample dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      <SyntaxHighlighter>{dialogExampleString}</SyntaxHighlighter>
    </VStack>
  );
}

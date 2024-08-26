import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  VStack,
  Heading,
  Button,
  Text,
  HStack,
} from "~/components/ui";

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
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <VStack spacing={4} alignItems="flex-start" width="100%">
            <DialogTitle asChild>
              <Heading as="h2" size="lg">
                Dialog Title
              </Heading>
            </DialogTitle>
            <DialogDescription asChild>
              <Text as="p">
                Dialog description area. Give your user clear instructions and
                details here.
              </Text>
            </DialogDescription>
            <HStack width="100%" justifyContent="flex-end">
              <DialogClose asChild>
                <Button onClick={() => setDialogOpen(false)}>Close</Button>
              </DialogClose>
            </HStack>
          </VStack>
        </DialogContent>
      </Dialog>
    </VStack>
  );
}

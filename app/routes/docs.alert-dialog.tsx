import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  VStack,
  Heading,
  Button,
} from "~/components/ui";

export default function AlertDialogRoute() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Alert Dialog</Heading>
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <VStack spacing={8} alignItems="flex-start" width="100%">
            <AlertDialogHeader>Dialog Header</AlertDialogHeader>
            <AlertDialogDescription>
              Dialog description area. Give your user clear instructions and
              details here.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button type="button" variant="subtle">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button onClick={() => setDialogOpen(false)} variant="primary">
                Confirm
              </Button>
            </AlertDialogFooter>
          </VStack>
        </AlertDialogContent>
      </AlertDialog>
    </VStack>
  );
}

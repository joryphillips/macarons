import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  VStack,
  Heading,
  Button,
  Text,
  AlertDialogAction,
  HStack,
} from "~/components/ui";

export default function AlertDialogRoute() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <VStack gap={4} width="100%" alignItems="flex-start">
      <Heading>Alert Dialog</Heading>
      <Text as="p">
        The alert dialog component is used to focus the user's attention on a
        required action. It primarily differs from a regular dialog in that
        clicking outside the dialog does not close it.
      </Text>
      <Text as="p">AlertDialog imports styles from Dialog.</Text>
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <VStack spacing={4} alignItems="flex-start" width="100%">
            <AlertDialogTitle asChild>
              <Heading as="h2" size="lg">
                Alert Dialog Title
              </Heading>
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <Text as="p">
                Dialog description area. Give your user clear instructions and
                details here.
              </Text>
            </AlertDialogDescription>
            <HStack width="100%" justifyContent="flex-end">
              <AlertDialogCancel asChild>
                <Button type="button" variant="subtle">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  onClick={() => setDialogOpen(false)}
                  variant="destructive"
                >
                  Confirm
                </Button>
              </AlertDialogAction>
            </HStack>
          </VStack>
        </AlertDialogContent>
      </AlertDialog>
    </VStack>
  );
}

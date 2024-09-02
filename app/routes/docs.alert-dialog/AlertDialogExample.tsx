import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
} from "~/components/ui";

export function AlertDialogExample({
  dialogOpen = false,
  setDialogOpen,
}: {
  dialogOpen: boolean;
  setDialogOpen: (dialogOpen: boolean) => void;
}) {
  return (
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
          <HStack justifyContent="flex-end" width="100%">
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
  );
}

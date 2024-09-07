import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Heading,
  HStack,
  Text,
  VStack,
} from "~/components/ui";

export function DialogExample({
  dialogOpen = false,
  setDialogOpen,
}: {
  dialogOpen: boolean;
  setDialogOpen: (dialogOpen: boolean) => void;
}) {
  return (
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
  );
}

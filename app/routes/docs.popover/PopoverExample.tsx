import {
  Button,
  Card,
  Heading,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "~/components/ui";

export function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Trigger</Button>
      </PopoverTrigger>
      <PopoverContent asChild>
        <Card background="activeElementBackground">
          <VStack gap={4} alignItems="flex-start">
            <Heading size="lg">Popover Content</Heading>
            <Text size="sm">
              This is the content of the popover. You can put anything you want
              in here.
            </Text>
          </VStack>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

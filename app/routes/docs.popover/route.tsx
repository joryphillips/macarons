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

export default function PopoverRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Popover</Heading>
      <Text as="p">
        The popover component is used to display additional information or
        actions when a user interacts with a trigger element.
      </Text>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Trigger</Button>
        </PopoverTrigger>
        <PopoverContent asChild>
          <Card background="activeElementBackground">
            <VStack gap={4} alignItems="flex-start">
              <Heading size="lg">Popover Content</Heading>
              <Text size="sm">
                This is the content of the popover. You can put anything you
                want in here.
              </Text>
            </VStack>
          </Card>
        </PopoverContent>
      </Popover>
    </VStack>
  );
}

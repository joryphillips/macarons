import {
  VStack,
  Heading,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  Text,
} from "~/components/ui";

export default function DropdownRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Dropdown</Heading>
      <Text as="p">
        The dropdown component is used to show a list of actions or options when
        a user clicks on a trigger element. It is distinguished from a Select
        component in that it is not intended to store or display a selected
        value.
      </Text>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </VStack>
  );
}

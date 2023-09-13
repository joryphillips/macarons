import {
  VStack,
  Heading,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
} from "~/components/ui";

export default function DropdownRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Dropdown</Heading>
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

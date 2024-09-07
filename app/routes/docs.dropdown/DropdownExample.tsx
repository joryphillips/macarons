import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui";

export function DropdownExample() {
  return (
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
  );
}

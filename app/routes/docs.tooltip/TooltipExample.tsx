import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui";

export function TooltipExample() {
  return (
    <Tooltip open>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover over me</Button>
      </TooltipTrigger>
      <TooltipContent>This is default tooltip content style.</TooltipContent>
    </Tooltip>
  );
}

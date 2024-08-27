import {
  Button,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui";

export function TooltipCustomExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover over me too</Button>
      </TooltipTrigger>
      <TooltipContent asChild>
        <Text size="sm">
          This is slightly more custom-styled tooltip content.
        </Text>
      </TooltipContent>
    </Tooltip>
  );
}

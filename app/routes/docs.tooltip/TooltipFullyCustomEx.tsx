import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui";
import { customTooltipContentStyles } from "./TooltipFullyCustomExample.css";
import clsx from "clsx";
import { uIText } from "~/components/ui/Text/Text.css";

export function TooltipFullyCustomExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover over me as well</Button>
      </TooltipTrigger>
      <TooltipContent
        className={clsx(customTooltipContentStyles, uIText["lg"])}
      >
        This is more custom-styled tooltip content.
      </TooltipContent>
    </Tooltip>
  );
}

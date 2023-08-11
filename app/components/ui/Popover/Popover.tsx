import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import { popup } from "./Popover.css";

const Popover = PopoverPrimitive.Root;

/** Use asChild and a child component for styling.  */
const PopoverTrigger = PopoverPrimitive.Trigger;

/** Use asChild and a child component for styling.  */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "start", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={clsx(popup, className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };

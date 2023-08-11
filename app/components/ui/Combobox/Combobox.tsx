import { Check, ChevronsUpDown, X } from "lucide-react";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/Button/Button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/Command/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/Popover/Popover";
import type { SelectOption } from "~/types/SelectOption";
import { Box } from "../Layout/Box";
import { HStack } from "../Layout/Stack";
import {
  commandGroupCheckIcon,
  commandGroupCheckIconActive,
  commandGroupCheckIconInactive,
  popoverClearButton,
  popoverContent,
  popoverTriggerButton,
  popoverTriggerButtonIcon,
} from "./Combobox.css";

export function Combobox({
  name,
  placeholder = "Select...",
  value,
  options,
  isDisabled = false,
  isClearable = false,
  onComboboxSelection = (value) => undefined,
}: {
  name?: string;
  placeholder?: string;
  /** The "value" string associated with a pre-selected option. */
  value?: string;
  options: SelectOption[];
  isDisabled?: boolean;
  isClearable?: boolean;
  onComboboxSelection?: (value: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectionValue, setSelectionValue] = useState<string | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<
    string | undefined
  >();

  const equipmentFilter = (item: SelectOption) => {
    if (!searchInputValue || searchInputValue.length === 0) {
      return true;
    }
    const searchTermsLowerArray = searchInputValue.toLowerCase().split(" ");
    return searchTermsLowerArray.every((term) =>
      item.label.toLowerCase().includes(term)
    );
  };

  useEffect(() => {
    setSelectionValue(value ?? null);
  }, [value]);

  const onClearValueClick = (e: React.MouseEvent) => {
    // Prevent the popover from opening on clear
    e.stopPropagation();
    setSelectionValue(null);
    onComboboxSelection(null);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <HStack
        position="relative"
        width="100%"
        justifyContent="space-between"
        borderWidth="standard"
        borderRadius="sm"
      >
        <PopoverTrigger asChild disabled={isDisabled}>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={popoverTriggerButton}
          >
            {selectionValue
              ? options.find((item) => item.value === selectionValue)?.label
              : placeholder}
          </Button>
        </PopoverTrigger>
        <input type="hidden" name={name} value={selectionValue || ""} />
        <Box
          position="absolute"
          right={0}
          style={{ pointerEvents: selectionValue ? "auto" : "none" }}
        >
          {isClearable && selectionValue ? (
            <Button
              className={clsx(popoverClearButton)}
              variant="ghost"
              onClick={(e) => onClearValueClick(e)}
            >
              <X />
            </Button>
          ) : (
            <div className={popoverTriggerButtonIcon}>
              <ChevronsUpDown />
            </div>
          )}
        </Box>
      </HStack>

      <PopoverContent className={popoverContent}>
        <Command shouldFilter={false}>
          <CommandInput
            placeholder={placeholder}
            value={searchInputValue}
            onValueChange={setSearchInputValue}
          />
          <CommandEmpty>Nothing found.</CommandEmpty>
          <CommandList>
            {options.filter(equipmentFilter).map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(_selectedValue: string) => {
                  setSelectionValue(item.value);
                  setOpen(false);
                  onComboboxSelection(item.value);
                }}
              >
                <Check
                  className={clsx(
                    commandGroupCheckIcon,
                    selectionValue === item.value
                      ? commandGroupCheckIconActive
                      : commandGroupCheckIconInactive
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

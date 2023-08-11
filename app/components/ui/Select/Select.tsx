import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { ChevronsUpDown, X } from "lucide-react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { base as baseReset, input as inputReset } from "~/styles/reset.css";
import type { SelectOption } from "~/types/SelectOption";
import { Button } from "../Button/Button";
import { defaultScrollBehavior } from "../Input/Input";
import { inputStyles } from "../Input/Input.css";
import { Label } from "../Label/Label";
import { HStack, VStack } from "../Layout/Stack";
import type { BoxProps } from "../Layout/Box";
import { Box } from "../Layout/Box";
import { Card } from "../Layout/Card";
import { Text } from "../Text/Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip/Tooltip";
import { selectInputStyle } from "./Select.css";

function getOptionFromSelectValue(
  value: string | undefined,
  options: SelectOption[]
): SelectOption | undefined {
  if (!value) return;

  return options.find((o) => o.value === value);
}

interface SelectDesignProps extends BoxProps {
  spacing?: BoxProps["paddingBottom"];
  justify?: BoxProps["justifyContent"];
}

interface SelectProps {
  name?: string;
  isDisabled?: boolean;
  label?: string;
  /** Additional input instructions to show below the input. Hides if errorText
   * is present. */
  infoText?: string;
  /** Error message to show below the input. Will show if present. */
  errorText?: string;
  options: SelectOption[];
  listHeading?: string;
  listItemIcon?: LucideIcon;
  onInputChange?: (value: string) => void;
  isSearchable?: boolean;
  /** A custom name for the search input during form submission. Make sure it is unique. */
  searchInputName?: string;
  onSelectionChange?: (item?: SelectOption) => void;
  /** If selectedValue matches an option value, that option will be selected. */
  selectedValue?: string;
  placeholder?: string;
  props?: SelectDesignProps;
}

export function Select({
  name,
  label,
  infoText,
  errorText,
  isDisabled = false,
  options = [],
  listHeading,
  listItemIcon,
  onInputChange,
  isSearchable = false,
  searchInputName = "select-search-input",
  onSelectionChange,
  selectedValue,
  placeholder,
  ...props
}: SelectProps & SelectDesignProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userInput, setUserInput] = useState<string>("");
  const [userSelection, setUserSelection] = useState<string>(
    selectedValue ?? ""
  );
  const [optionId, setOptionId] = useState<string | null>(null);
  const getSelectedOption = useMemo(
    () => getOptionFromSelectValue(userSelection, options),
    [userSelection, options]
  );
  const [filteredOptions, setFilteredOptions] =
    useState<SelectOption[]>(options);

  const labelFilter = useCallback(
    (option: SelectOption) => {
      if (!userInput) return true;
      return option.label
        .toLowerCase()
        .includes(userInput.toLowerCase().trim());
    },
    [userInput]
  );

  useEffect(() => {
    setUserSelection(selectedValue ?? "");
  }, [selectedValue]);

  useEffect(() => {
    setFilteredOptions(options.filter(labelFilter));
  }, [labelFilter, options, userInput]);

  useEffect(() => {
    if (options.length === 0) {
      setUserSelection("");
    }
  }, [options]);

  const comboboxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLElement>(null);

  const ListItemIcon = listItemIcon;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowDropdown(true);
    setUserInput(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  const handleArrowDown = () => {
    setShowDropdown(true);

    const index = filteredOptions.findIndex((o) => o.value === optionId);

    const id =
      index === filteredOptions.length - 1
        ? // if we're at the end of the list, go back to the top
          filteredOptions[0].value
        : // otherwise, go to the next item
          filteredOptions[index + 1].value;

    setOptionId(id);

    const item = document.getElementById(id);
    item?.scrollIntoView(defaultScrollBehavior);
  };

  const handleArrowUp = () => {
    const index = filteredOptions.findIndex((o) => o.value === optionId);

    const id =
      index === 0 || index === -1
        ? // if we're at the top of the list, go to the end
          filteredOptions[filteredOptions.length - 1].value
        : // otherwise, go to the previous item
          filteredOptions[index - 1].value;

    setOptionId(id);

    const item = document.getElementById(id);
    item?.scrollIntoView(defaultScrollBehavior);
  };

  const onSelect = (item: SelectOption) => () => {
    setUserSelection(item.value);
    setUserInput("");
    if (onSelectionChange) {
      onSelectionChange(item);
    }
    setShowDropdown(false);
  };

  const handleInputKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    switch (key) {
      case "ArrowDown":
        handleArrowDown();
        break;
      case "ArrowUp":
        handleArrowUp();
        break;
      case "Backspace":
        setUserSelection("");
        break;
      case "Escape":
        setUserInput("");
        setOptionId(null);
        setShowDropdown(false);
        break;
      case "Enter":
        if (optionId == null) break;
        const item = filteredOptions.find((o) => o.value === optionId);
        if (!item) break;
        onSelect(item)();
        break;

      default:
        break;
    }
  };

  const handleFocus = () => {
    setShowDropdown(true);
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setOptionId(null);
    setShowDropdown(false);
  };

  // save label as an id for label
  const labelId = `${label?.toLowerCase().replace(/\s/g, "-")}-label`;

  const getPlaceholder = () => {
    if (!options.length) {
      return "No options to select";
    }
    if (userSelection) {
      return "";
    }
    if (placeholder) return placeholder;
    return "Select...";
  };

  return (
    <VStack width="100%" alignItems="flex-start" spacing={2} {...props}>
      <Box width="100%" position="relative">
        <VStack width="100%" alignItems="flex-start" spacing={2}>
          {label && <Label id={labelId}>{label}</Label>}
          <Box width="100%" position="relative">
            <Box
              ref={comboboxRef}
              aria-labelledby={labelId}
              width="100%"
              position="relative"
              role="combobox"
              aria-expanded={showDropdown}
              display="inline-flex"
              gap={2}
              className={clsx(baseReset, inputReset, inputStyles)}
              tabIndex={0}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyUp={handleInputKeyUp}
              // stop the input from flashing when the enter key is pressed
              onKeyDown={(e: KeyboardEvent) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              {getSelectedOption?.label && (
                <Text style={{ minWidth: "50%" }}>
                  {getSelectedOption.label}
                </Text>
              )}
              <input
                type="hidden"
                name={name}
                value={getSelectedOption?.value || ""}
              />
              {isSearchable && (
                <input
                  type="text"
                  name={searchInputName}
                  className={clsx(baseReset, inputReset, selectInputStyle)}
                  ref={inputRef}
                  autoComplete="off"
                  value={userInput}
                  disabled={isDisabled}
                  onChange={handleInputChange}
                  placeholder={getPlaceholder()}
                  aria-label="Search"
                />
              )}
            </Box>

            <Box position="absolute" right={0} top={0}>
              {userSelection ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      aria-label="Clear selection"
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setUserSelection("");
                        setUserInput("");
                        if (onSelectionChange) {
                          onSelectionChange();
                        }
                      }}
                    >
                      <X />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Clear selection</TooltipContent>
                </Tooltip>
              ) : (
                <Box
                  aria-hidden="true"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ width: "40px", height: "40px" }}
                  // (hack) effectively toggles with onClick comboboxRef focus
                  pointerEvents={showDropdown ? "none" : "auto"}
                  onClick={() => {
                    comboboxRef.current?.focus();
                  }}
                >
                  <ChevronsUpDown />
                </Box>
              )}
            </Box>
          </Box>
        </VStack>
        {options.length > 0 && showDropdown && filteredOptions.length > 0 && (
          <Card
            position="absolute"
            marginTop={1}
            padding={2}
            borderRadius="sm"
            borderWidth="standard"
            // borderColor="gray300"
            borderStyle="solid"
            boxShadow="md"
            zIndex={1}
            style={{
              overflowY: "auto",
              maxHeight: "300px",
            }}
          >
            <VStack
              as="ul"
              gap={4}
              alignItems="flex-start"
              width="100%"
              ref={listboxRef}
            >
              {listHeading && (
                <Box paddingX={2} paddingTop={2}>
                  <Text size="sm" fontWeight="medium">
                    {listHeading}
                  </Text>
                </Box>
              )}
              {filteredOptions.map((item, index) => (
                <Button
                  className={clsx(
                    filteredOptions[index].value === optionId ? "active" : ""
                  )}
                  key={item.value}
                  id={item.value}
                  variant="ghost"
                  width="full"
                  // must use onMouseUp + Down for selection to work
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  onMouseUp={onSelect(item)}
                  asChild
                >
                  <HStack
                    as="li"
                    gap={4}
                    paddingRight={2}
                    width="100%"
                    alignItems="center"
                  >
                    {ListItemIcon && <ListItemIcon />}
                    <Text size="sm" fontWeight="regular">
                      {item.label}
                    </Text>
                  </HStack>
                </Button>
              ))}
            </VStack>
          </Card>
        )}
      </Box>
      <VStack spacing={2} alignItems="flex-start" width="100%">
        {!errorText && infoText && <Text size="sm">{infoText}</Text>}
        {errorText && <Text size="sm">{errorText}</Text>}
      </VStack>
    </VStack>
  );
}

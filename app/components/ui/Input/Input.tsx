import clsx from "clsx";
import { X } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { forwardRef, useRef } from "react";
import { base as baseReset, input as inputReset } from "~/styles/reset.css";
import { Button } from "../Button/Button";
import { Label } from "../Label/Label";
import { Box } from "../Layout/Box";
import { VStack } from "../Layout/Stack";
import { Text } from "../Text/Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip/Tooltip";
import {
  errorTextStyles,
  inputSizeVariants,
  inputStyles,
  invalid,
} from "./Input.css";

export const defaultScrollBehavior: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "nearest",
};

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export interface InputProps extends InputAttributes {
  size?: keyof typeof inputSizeVariants;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "default",
      isDisabled = false,
      isInvalid = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <input
        disabled={isDisabled}
        className={clsx(
          baseReset,
          inputReset,
          inputSizeVariants[size],
          inputStyles,
          isInvalid && invalid,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputWithLabel = forwardRef<
  HTMLInputElement,
  InputProps & { label: string; onClear?: () => void }
>(
  (
    {
      label,
      isDisabled = false,
      isInvalid = false,
      size = "default",
      className,
      name,
      onClear,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const labelId = `${label.toLowerCase().replace(" ", "_")}-label`;
    return (
      <VStack width="100%" alignItems="flex-start" spacing={1}>
        <Label htmlFor={labelId}>{label}</Label>
        <Box width="100%" position="relative">
          <Input
            ref={inputRef}
            name={name}
            id={labelId}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            size={size}
            className={className}
            {...props}
          />
          {onClear && !!props.value && (
            <Box position="absolute" right={0} top={0} padding={1}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    aria-label="Clear selection"
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      onClear();
                      inputRef.current?.focus();
                    }}
                  >
                    <X />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Clear selection</TooltipContent>
              </Tooltip>
            </Box>
          )}
        </Box>
      </VStack>
    );
  }
);
InputWithLabel.displayName = "InputWithLabel";

const InputWithInfo = forwardRef<
  HTMLInputElement,
  InputProps & {
    label: string;
    /** Additional input instructions to show below the input. Hides if errorText
     * is present. */
    infoText?: string;
    /** Error message to show below the input. Will show if present. */
    errorText?: string;
  }
>(
  (
    {
      name,
      label,
      infoText,
      errorText,
      isDisabled = false,
      size = "default",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <VStack width="100%" alignItems="flex-start" spacing={1}>
        <InputWithLabel
          ref={ref}
          name={name}
          label={label}
          isDisabled={isDisabled}
          isInvalid={!!errorText}
          size={size}
          className={className}
          autoComplete="off"
          {...props}
        />
        <VStack spacing={2} alignItems="flex-start" width="100%">
          {!errorText && infoText && <Text size="xs">{infoText}</Text>}
          {errorText && (
            <Text size="xs" className={errorTextStyles}>
              {errorText}
            </Text>
          )}
        </VStack>
      </VStack>
    );
  }
);
InputWithInfo.displayName = "InputWithInfo";

export { Input, InputWithInfo, InputWithLabel };

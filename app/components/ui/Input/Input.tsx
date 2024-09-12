import clsx from "clsx";
import { X } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { forwardRef, useId, useRef } from "react";
import { IconButton } from "../Button/Button";
import { Label } from "../Label/Label";
import { Box } from "../Layout/Box";
import { VStack } from "../Layout/Stack";
import { Text } from "../Text/Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip/Tooltip";
import {
  errorTextStyles,
  inputContainerStyles,
  inputStyles,
  inputClearButtonStyles,
  invalidStyles,
} from "./Input.css";

export const defaultScrollBehavior: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "nearest",
};

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export interface InputProps extends InputAttributes {
  size?: keyof typeof inputStyles;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

const MinimalInput = forwardRef<HTMLInputElement, InputProps>(
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
          inputStyles[size],
          isInvalid && invalidStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
MinimalInput.displayName = "MinimalInput";

type InputWithLabelProps = InputProps & {
  label?: string;
  onClear?: () => void;
};

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      id,
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
    const labelId = `${useId()}-${id ?? label}`;
    return (
      <VStack width="100%" alignItems="flex-start" spacing={1}>
        {!!label && <Label htmlFor={labelId}>{label}</Label>}
        <Box className={inputContainerStyles}>
          <MinimalInput
            ref={inputRef}
            name={name}
            id={labelId}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            size={size}
            className={className}
            {...props}
          />
          {onClear && (!!props.value || !!props.defaultValue) && (
            <Box className={inputClearButtonStyles[size]}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <IconButton
                    aria-label="Clear selection"
                    variant="ghost"
                    size={size === "sm" ? "sm" : "default"}
                    onClick={(e) => {
                      e.preventDefault();
                      onClear();
                      inputRef.current?.focus();
                    }}
                  >
                    <X />
                  </IconButton>
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
  InputWithLabelProps & {
    label?: string;
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
        {(!!errorText || !!infoText) && (
          <VStack spacing={2} alignItems="flex-start" width="100%">
            {!errorText && infoText && <Text size="xs">{infoText}</Text>}
            {errorText && (
              <Text size="xs" className={errorTextStyles}>
                {errorText}
              </Text>
            )}
          </VStack>
        )}
      </VStack>
    );
  }
);
InputWithInfo.displayName = "InputWithInfo";

export { InputWithInfo as Input };

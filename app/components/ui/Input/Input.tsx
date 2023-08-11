import clsx from "clsx";
import { X } from "lucide-react";
import { forwardRef, useRef } from "react";
import { base as baseReset, input as inputReset } from "~/styles/reset.css";
import { Button } from "../Button/Button";
import { Label } from "../Label/Label";
import { Box } from "../Layout/Box";
import { VStack } from "../Layout/Stack";
import { Text } from "../Text/Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip/Tooltip";
import { inputStyles } from "./Input.css";

export const defaultScrollBehavior: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "nearest",
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isDisabled?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isDisabled = false, className, ...props }, ref) => {
    return (
      <input
        disabled={isDisabled}
        className={clsx(baseReset, inputReset, inputStyles, className)}
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
>(({ label, isDisabled = false, className, name, onClear, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelId = `${label.toLowerCase().replace(" ", "_")}-label`;
  return (
    <VStack width="100%" alignItems="flex-start" spacing={2}>
      <Label htmlFor={labelId}>{label}</Label>
      <Box width="100%" position="relative">
        <Input
          ref={inputRef}
          name={name}
          id={labelId}
          isDisabled={isDisabled}
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
});
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
      className,
      ...props
    },
    ref
  ) => {
    return (
      <VStack width="100%" alignItems="flex-start" spacing={2}>
        <InputWithLabel
          ref={ref}
          name={name}
          label={label}
          isDisabled={isDisabled}
          className={className}
          autoComplete="off"
          {...props}
        />
        <VStack spacing={2} alignItems="flex-start" width="100%">
          {!errorText && infoText && <Text size="sm">{infoText}</Text>}
          {errorText && <Text size="sm">{errorText}</Text>}
        </VStack>
      </VStack>
    );
  }
);
InputWithInfo.displayName = "InputWithInfo";

export { Input, InputWithLabel, InputWithInfo };

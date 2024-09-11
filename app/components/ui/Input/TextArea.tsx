import clsx from "clsx";
import * as React from "react";
import { base as baseReset, input as inputReset } from "~/styles/reset.css";
import { inputBaseStyles, textAreaStyles, invalidStyles } from "./Input.css";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isDisabled?: boolean;
  isInvalid?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isDisabled = false, isInvalid = false, className, ...props }, ref) => {
    return (
      <textarea
        disabled={isDisabled}
        className={clsx(
          baseReset,
          inputReset,
          inputBaseStyles,
          textAreaStyles,
          isInvalid && invalidStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName = "Textarea";

export { TextArea };

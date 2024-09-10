import { useState } from "react";
import { InputWithLabel } from "~/components/ui";

export function Clearable() {
  const [clearableInputValue, setClearableInputValue] = useState("clearable");

  return (
    <InputWithLabel
      label="Clearable Input"
      placeholder="placeholder"
      value={clearableInputValue}
      onClear={() => setClearableInputValue("")}
      onChange={(e) => setClearableInputValue(e.target.value)}
    />
  );
}

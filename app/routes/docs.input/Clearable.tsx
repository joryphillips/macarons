import { useState } from "react";
import { Input } from "~/components/ui";

export function Clearable() {
  const [clearableInputValue, setClearableInputValue] = useState("clearable");

  return (
    <Input
      label="Clearable Input"
      placeholder="placeholder"
      value={clearableInputValue}
      onClear={() => setClearableInputValue("")}
      onChange={(e) => setClearableInputValue(e.target.value)}
    />
  );
}

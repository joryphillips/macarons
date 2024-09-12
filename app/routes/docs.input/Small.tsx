import { useState } from "react";
import { Input, VStack } from "~/components/ui";

export function Small() {
  const [clearableSmallInputValue, setClearableSmallInputValue] =
    useState("small clearable");

  return (
    <VStack>
      <Input size="sm" placeholder="small placeholder" />
      <Input
        size="sm"
        placeholder="small with label placeholder"
        label="small with label"
      />
      <Input
        size="sm"
        placeholder="small clearable placeholder"
        label="small with label"
        value={clearableSmallInputValue}
        onClear={() => setClearableSmallInputValue("")}
        onChange={(e) => setClearableSmallInputValue(e.target.value)}
      />
    </VStack>
  );
}

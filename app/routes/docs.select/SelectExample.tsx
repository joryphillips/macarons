import { useState } from "react";
import {
  Text,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui";

export function SelectExample() {
  const [selection, setSelection] = useState<string | null>(null);

  const selectItems = [
    { value: "beets", label: "Beets" },
    {
      value: "celery",
      label: "Celery",
    },
    {
      value: "artichokes",
      label: "Artichokes",
    },
    {
      value: "carrots",
      label: "Carrots",
    },
  ];

  return (
    <>
      <Select onValueChange={setSelection} name="veggie options">
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          {selectItems.map((item, index) => (
            <SelectItem
              key={item.value}
              value={item.value}
              truncate={index === 2}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Text as="p">Selected value: {selection ?? "No selection"}</Text>
    </>
  );
}

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
      value: "a long name",
      label: "A really long vegetable or legume name",
    },
    {
      value: "a very long truncated name",
      label: `A very long truncated vegetable or legume name that is 
        really too long and has no business being in a dropdown, 
        does it? I mean, really?`,
    },
    {
      value: "a very very long name",
      label: `A very very long non-truncated vegetable or legume name 
        that is really too long and has no business being in a dropdown, 
        does it? I mean, really?`,
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

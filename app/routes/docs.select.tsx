import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select/Select";

import { VStack, Heading, Text } from "~/components/ui";

export default function SelectRoute() {
  const [selection, setSelection] = useState<string | null>(null);

  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Select</Heading>
      <Select onValueChange={setSelection} name="veggie options">
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="celery">Celery</SelectItem>
          <SelectItem value="beets">Beets</SelectItem>
          <SelectItem value="a long name">
            A really long vegetable or legume name
          </SelectItem>
          <SelectItem value="a very long truncated name" truncate>
            A very long truncated vegetable or legume name that is really too
            long and has no business being in a dropdown, does it? I mean,
            really?
          </SelectItem>
          <SelectItem value="a very very long name">
            A very very long vegetable or legume name that is really too long
            and has no business being in a dropdown, does it? I mean, really?
          </SelectItem>
        </SelectContent>
      </Select>
      <Text>Selected value: {selection ?? "No selection"}</Text>
    </VStack>
  );
}

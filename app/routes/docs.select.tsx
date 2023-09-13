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
      <Select onValueChange={setSelection}>
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="celery">Celery</SelectItem>
          <SelectItem value="beets">Beets</SelectItem>
          <SelectItem value="a long name">
            A really long vegetable or legume name
          </SelectItem>
        </SelectContent>
      </Select>
      <Text>Selected value: {selection ?? "No selection"}</Text>
    </VStack>
  );
}

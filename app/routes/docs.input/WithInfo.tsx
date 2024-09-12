import { Input } from "~/components/ui";

// prettier-ignore
export function WithInfo() {
  return (
    <Input
      placeholder="placeholder"
      label="Label"
      infoText="Descriptive text"
    />
  );
}

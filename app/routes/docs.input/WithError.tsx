import { Input } from "~/components/ui";

// prettier-ignore
export function WithError() {
  return (
    <Input
      placeholder="placeholder"
      defaultValue="Invalid input value"
      label="Label"
      infoText="Descriptive text"
      errorText="Descriptive error text"
    />
  );
}

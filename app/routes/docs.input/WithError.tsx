import { InputWithInfo } from "~/components/ui";

// prettier-ignore
export function WithError() {
  return (
    <InputWithInfo
      placeholder="placeholder"
      defaultValue="Invalid input value"
      label="Label"
      errorText="Descriptive error text"
    />
  );
}

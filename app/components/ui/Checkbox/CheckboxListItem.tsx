import { Checkbox } from "./Checkbox";
import { Label } from "../Label/Label";
import { HStack } from "../Layout/Stack";

interface CheckboxListItemProps {
  /**
   * Identifer returned when there is a change to checked status. Also used with
   * name prop inside <Checkbox> for form submission.
   */
  id: string;
  /** Label for the checkbox */
  label: string;
  /** Checked state of the checkbox */
  checked: boolean;
  /** Name of the hidden input field to be submitted with form */
  name?: string;
  /** Disables the checkbox */
  isDisabled?: boolean;
  onCheckedChange: (checked: boolean, id: string) => void;
}

export function CheckboxListItem({
  name,
  id,
  label,
  checked,
  isDisabled = false,
  onCheckedChange,
}: CheckboxListItemProps) {
  const onChange = (checked: boolean) => {
    onCheckedChange(checked, id);
  };

  return (
    <HStack width="100%" gap={4} alignItems="flex-start">
      <Checkbox
        name={name}
        value={id}
        id={id}
        disabled={isDisabled}
        checked={checked}
        onCheckedChange={onChange}
        variant="primary"
      ></Checkbox>
      <Label htmlFor={id} aria-disabled={isDisabled} cursor="pointer">
        {label}
      </Label>
    </HStack>
  );
}

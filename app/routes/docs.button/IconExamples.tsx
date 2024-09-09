import { ChevronDown, InfoIcon } from "lucide-react";
import { Button } from "~/components/ui";

export function IconExample() {
  return (
    <>
      <Button prefixIcon={InfoIcon}>With Prefix Icon</Button>{" "}
      <Button suffixIcon={ChevronDown}>With Suffix Icon</Button>
      <Button prefixIcon={InfoIcon} suffixIcon={ChevronDown}>
        With Prefix and Suffix Icon
      </Button>
    </>
  );
}

import { Link } from "@remix-run/react";
import { ChevronDown, InfoIcon } from "lucide-react";
import { VStack, Heading, Button } from "~/components/ui";

export default function ButtonRoute() {
  return (
    <VStack gap={8} marginBottom={8} width="100%" alignItems="flex-start">
      <Heading>Button</Heading>
      <Button>Default</Button>
      <Button size="sm">Size Small</Button>
      <Button size="lg">Size Large</Button>

      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="ghost">Ghost</Button>
      <Button asChild variant="link">
        <Link to="/docs/button">Link</Link>
      </Button>
      <Button isDisabled>Disabled</Button>
      <Button prefixIcon={InfoIcon}>With Prefix Icon</Button>
      <Button suffixIcon={ChevronDown}>With Suffix Icon</Button>
      <Button prefixIcon={InfoIcon} suffixIcon={ChevronDown}>
        With Prefix and Suffix Icon
      </Button>

      <Button variant="outline" width="3xs">
        With a specific width and very long text
      </Button>
      <Button variant="outline">
        Without a specific width and very long text
      </Button>
    </VStack>
  );
}

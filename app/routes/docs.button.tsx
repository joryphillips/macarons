import { Link } from "@remix-run/react";
import { VStack, Heading, Button } from "~/components/ui";

export default function ButtonRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Button</Heading>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="ghost">Ghost</Button>
      <Button asChild variant="link">
        <Link to="/docs/button">Link</Link>
      </Button>
      <Button isDisabled>Disabled</Button>
    </VStack>
  );
}

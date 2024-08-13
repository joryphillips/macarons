import {
  VStack,
  Heading,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Button,
} from "~/components/ui";

export default function TooltipRoute() {
  return (
    <VStack gap={8} width="100%" alignItems="flex-start">
      <Heading>Tooltip</Heading>
      <Text>
        The tooltip component is used to display additional information when a
        user hovers over a trigger element. The base Radix tooltip content
        component will position itself dynamically based on proximity to window
        edges.
      </Text>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover over me</Button>
        </TooltipTrigger>
        <TooltipContent asChild>
          <Text>This is the tooltip content</Text>
        </TooltipContent>
      </Tooltip>
    </VStack>
  );
}

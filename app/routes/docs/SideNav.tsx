import { NavBarLink } from "~/components/NavBarLink/NavBarLink";
import { StackProps, VStack, Divider, Box, Heading } from "~/components/ui";
import { sideNavStyles } from "./docs.css";

function NavBarHeading({ children }: { children: React.ReactNode }) {
  return (
    <Box width="100%" padding={2}>
      <Heading as="h3" size="sm" color="highContrastText">
        {children}
      </Heading>
    </Box>
  );
}

export function SideNav({
  hideSideNav,
  ...props
}: StackProps & { hideSideNav: () => void }) {
  return (
    <VStack className={sideNavStyles} as="nav" {...props}>
      <NavBarLink onClick={hideSideNav} to="/docs/intro">
        Introduction
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/philosophy">
        Philosophy
      </NavBarLink>

      <Divider />

      <NavBarHeading>Theme/Design System</NavBarHeading>

      <NavBarLink onClick={hideSideNav} to="/docs/color">
        Color
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/darkmode">
        Dark mode
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/shadows">
        Shadows
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/spacing">
        Spacing
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/border">
        Border and Radius
      </NavBarLink>

      <Divider />

      <NavBarHeading>Layout</NavBarHeading>

      <NavBarLink onClick={hideSideNav} to="/docs/box">
        Box
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/stack">
        Stack
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/card">
        Card
      </NavBarLink>

      <Divider />

      <NavBarHeading>Components</NavBarHeading>

      <NavBarLink onClick={hideSideNav} to="/docs/alert">
        Alert
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/alert-dialog">
        Alert Dialog
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/badge">
        Badge
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/button">
        Button
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/checkbox">
        Checkbox
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/dialog">
        Dialog
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/divider">
        Divider
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/dropdown">
        Dropdown
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/input">
        Input
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/label">
        Label
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/popover">
        Popover
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/select">
        Select
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/spinner">
        Spinner
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/tooltip">
        Tooltip
      </NavBarLink>

      <Divider />

      <NavBarHeading>Typography</NavBarHeading>

      <NavBarLink onClick={hideSideNav} to="/docs/text">
        Text
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/textarea">
        Textarea
      </NavBarLink>
      <NavBarLink onClick={hideSideNav} to="/docs/heading">
        Heading
      </NavBarLink>
    </VStack>
  );
}

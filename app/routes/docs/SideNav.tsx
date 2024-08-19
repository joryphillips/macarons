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
  hideSidebar,
  ...props
}: StackProps & { hideSidebar: () => void }) {
  return (
    <VStack className={sideNavStyles} as="nav" {...props}>
      <VStack
        width="100%"
        alignItems="flex-start"
        paddingX={{ mobile: 2, tablet: 0 }}
      >
        <NavBarLink onClick={hideSidebar} to="/docs/intro">
          Introduction
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/philosophy">
          Philosophy
        </NavBarLink>

        <Divider />

        <NavBarHeading>Theme/Design System</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/color">
          Color
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/darkmode">
          Dark mode
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/shadows">
          Shadows
        </NavBarLink>
        <NavBarLink disabled onClick={hideSidebar} to="/docs/spacing">
          Spacing
        </NavBarLink>
        <NavBarLink disabled onClick={hideSidebar} to="/docs/border">
          Border and Radius
        </NavBarLink>
        <NavBarLink disabled onClick={hideSidebar} to="/docs/breakpoints">
          Breakpoints
        </NavBarLink>

        <Divider />

        <NavBarHeading>Layout</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/box">
          Box
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/stack">
          Stack
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/card">
          Card
        </NavBarLink>

        <Divider />

        <NavBarHeading>Components</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/alert">
          Alert
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/alert-dialog">
          Alert Dialog
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/badge">
          Badge
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/button">
          Button
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/checkbox">
          Checkbox
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/dialog">
          Dialog
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/divider">
          Divider
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/dropdown">
          Dropdown
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/input">
          Input
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/label">
          Label
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/popover">
          Popover
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/select">
          Select
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/spinner">
          Spinner
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/tooltip">
          Tooltip
        </NavBarLink>

        <Divider />

        <NavBarHeading>Typography</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/text">
          Text
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/heading">
          Heading
        </NavBarLink>
      </VStack>
    </VStack>
  );
}

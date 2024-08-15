import { NavLink as RemixNavLink } from "@remix-run/react";
import { Box } from "~/components/ui";
import { navLinkStyles } from "./NavBarLink.css";
import clsx from "clsx";

export function NavBarLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Box width="100%">
      <RemixNavLink to={to}>
        {({ isActive, isPending }) => (
          <Box
            className={isActive ? clsx(navLinkStyles, "active") : navLinkStyles}
          >
            {children}
          </Box>
        )}
      </RemixNavLink>
    </Box>
  );
}

import { NavLink } from "@remix-run/react";
import { navLinkStyles } from "./NavBarLink.css";
import clsx from "clsx";

export function NavBarLink({
  to,
  children,
  onClick,
  disabled = false,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <NavLink
      aria-disabled={disabled}
      aria-description={
        disabled ? "This link is disabled" : "navigation link to " + to
      }
      to={to}
      className={({ isActive, isPending }) =>
        clsx(navLinkStyles, {
          active: isActive,
          disabled: isPending || disabled,
        })
      }
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        } else if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </NavLink>
  );
}

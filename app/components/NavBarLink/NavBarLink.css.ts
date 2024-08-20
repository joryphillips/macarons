import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const { colors } = vars;
const { primary } = colors;

export const navBarLinkStyles = style({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  borderRadius: vars.border.radius.sm,
  padding: vars.spacing[2],
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
  outline: "none",
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: "transparent",
  color: primary.lowContrastText,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: primary.hoveredElementBackground,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 ${vars.border.width.double} ${primary.elementBorder}`,
    },
    "&.disabled": {
      cursor: "not-allowed",
      color: primary.subtleBorder,
    },
    "&:active, &.active": {
      backgroundColor: primary.activeElementBackground,
      color: primary.highContrastText,
    },
  },
});

import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const { colors } = vars;
const { standard, info, primary } = colors;

export const navLinkStyles = style({
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  minWidth: vars.contentWidth["4xs"],
  borderRadius: vars.border.radius.sm,
  padding: vars.spacing[2],
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
  outline: "none",
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: "transparent",
  backgroundColor: standard.appBackground,
  color: primary.lowContrastText,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: primary.hoveredElementBackground,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 ${vars.border.width.double} ${info.elementBorder}`,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    "&:active, &.active": {
      backgroundColor: primary.activeElementBackground,
      color: primary.highContrastText,
      boxShadow: "none",
    },
  },
});
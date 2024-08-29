import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { animationSelectors } from "../Dropdown/Dropdown.css";
import { easeInOut } from "polished";

const elementBackground = vars.colors.standard.elementBackground;
const elementBorder = vars.colors.standard.elementBorder;

export const content = style({
  zIndex: vars.zIndex.dropdowns,
  minWidth: vars.contentSize["4xs"],
  overflow: "hidden",
  borderRadius: vars.border.radius.sm,
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: elementBorder,
  backgroundColor: elementBackground,
  padding: vars.spacing["1"],
  boxShadow: vars.boxShadow.md,
  animationFillMode: "both",
  animationTimingFunction: easeInOut("quad"),
  animationDuration: "150ms",
  selectors: animationSelectors,
});

export const viewPort = style({
  padding: 5,
});

export const item = style({
  width: vars.contentSize["xs"],
  borderRadius: vars.border.radius.sm,
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
  outline: "none",
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "150ms",
  selectors: {
    "&[data-state=checked]": {
      backgroundColor: vars.colors.standard.activeSolidBackground,
      color: vars.colors.standard.textOnSolidBackground,
    },
    "&[data-highlighted]": {
      backgroundColor: vars.colors.standard.solidBackground,
      color: vars.colors.standard.textOnSolidBackground,
    },
    "&[data-disabled]": {
      pointerEvents: "none",
      backgroundColor: vars.colors.standard.subtleBackground,
    },
  },
});

export const label = style({
  padding: `0 ${vars.spacing[6]}`,
  color: vars.colors.standard.lowContrastText,
});

export const separator = style({
  height: vars.border.width.standard,
  backgroundColor: vars.colors.primary.elementBackground,
  margin: vars.spacing[2],
});

export const scrollButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: elementBackground,
  color: vars.colors.standard.lowContrastText,
  cursor: "default",
});

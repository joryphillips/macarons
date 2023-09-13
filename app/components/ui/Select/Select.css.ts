import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { animationSelectors } from "../Dropdown/Dropdown.css";
import { easeInOut } from "polished";

const elementBackground = vars.colors.standard.elementBackground;
const elementBorder = vars.colors.standard.elementBorder;

export const content = style({
  zIndex: 50,
  minWidth: vars.contentWidth["4xs"],
  overflow: "hidden",
  borderRadius: vars.border.radius.xs,
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
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: vars.border.radius.xs,
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]} ${vars.spacing["2"]} ${vars.spacing["8"]}`,
  outline: "none",
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "150ms",
  selectors: {
    "&[data-highlighted]": {
      backgroundColor: vars.colors.standard.solidBackground,
      color: vars.colors.standard.textOnSolidBackground,
    },
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
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

export const itemIndicator = style({
  position: "absolute",
  left: vars.spacing[1],
  width: vars.spacing[6],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const scrollButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: elementBackground,
  color: vars.colors.standard.lowContrastText,
  cursor: "default",
});

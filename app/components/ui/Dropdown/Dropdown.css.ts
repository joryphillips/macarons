import { keyframes, style } from "@vanilla-extract/css";
import { easeInOut } from "polished";
import {
  animateIn,
  slideInFromBottom2,
  slideInFromLeft2,
  slideInFromRight2,
  slideInFromTop2,
} from "~/theme/animations";
import { vars } from "~/theme/theme.css";

const elementBackground = vars.colors.standard.elementBackground;
const elementBorder = vars.colors.standard.elementBorder;
const hoveredElementBackground = vars.colors.standard.hoveredElementBackground;
const activeElementBackground = vars.colors.standard.activeElementBackground;
const lowContrastText = vars.colors.standard.lowContrastText;

export const subTrigger = style({
  display: "flex",
  cursor: "default",
  userSelect: "none",
  alignItems: "center",
  borderRadius: vars.border.radius.sm,
  paddingTop: vars.spacing["2"],
  paddingRight: vars.spacing["2"],
  paddingBottom: vars.spacing["2"],
  paddingLeft: vars.spacing["2"],
  fontWeight: vars.weight.regular,
  outline: "none",
  transition: "background-color 0.2s",
  backgroundColor: elementBackground,
  selectors: {
    "&:focus-visible": {
      backgroundColor: hoveredElementBackground,
    },
    "&[data-state=open]": {
      backgroundColor: activeElementBackground,
    },
  },
});

export const subTriggerInset = style({
  paddingLeft: vars.spacing[8],
});

export const animationSelectors = {
  '&[data-state="open"]': {
    animationName: `${keyframes(animateIn)}`,
  },
  '&[data-state="closed"]': {
    animationName: `${keyframes(animateIn)}`,
    animationDirection: "reverse",
  },
  '&[data-side="right"]': {
    animationName: `${keyframes(slideInFromLeft2)}`,
  },
  '&[data-side="left"]': {
    animationName: `${keyframes(slideInFromRight2)}`,
  },
  '&[data-side="bottom"]': {
    animationName: `${keyframes(slideInFromTop2)}`,
  },
  '&[data-side="top"]': {
    animationName: `${keyframes(slideInFromBottom2)}`,
  },
};

export const subContent = style({
  zIndex: vars.zIndex.dropdowns,
  minWidth: "8rem",
  overflow: "hidden",
  borderRadius: vars.border.radius.xs,
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: elementBorder,
  backgroundColor: elementBackground,
  paddingTop: vars.spacing["1"],
  paddingRight: vars.spacing["1"],
  paddingBottom: vars.spacing["1"],
  paddingLeft: vars.spacing["1"],
  color: lowContrastText,
  boxShadow: vars.boxShadow.md,
  animationDuration: "150ms",
  animationFillMode: "both",
  animationTimingFunction: easeInOut("quad"),
  selectors: animationSelectors,
});

export const content = style({
  zIndex: vars.zIndex.dropdowns,
  minWidth: vars.contentWidth["4xs"],
  overflow: "hidden",
  borderRadius: vars.border.radius.xs,
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: elementBorder,
  backgroundColor: elementBackground,
  padding: vars.spacing["1"],
  color: lowContrastText,
  boxShadow: vars.boxShadow.md,
  animationFillMode: "both",
  animationTimingFunction: easeInOut("quad"),
  animationDuration: "150ms",
  selectors: animationSelectors,
});

export const menuItem = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: vars.border.radius.xs,
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
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
      backgroundColor: vars.colors.standard.subtleBackground,
    },
  },
});

export const commonInset = style({
  paddingLeft: vars.spacing[8],
});

export const checkboxItem = style([
  menuItem,
  { paddingLeft: vars.spacing[8], paddingRight: vars.spacing[2] },
]);

export const itemIndicator = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: vars.spacing[4],
  width: vars.spacing[4],
  left: vars.spacing[2],
});

export const radioItem = checkboxItem;

export const menuLabel = style({
  paddingLeft: vars.spacing[2],
  paddingRight: vars.spacing[2],
  paddingTop: vars.spacing[2],
  paddingBottom: vars.spacing[2],
  fontWeight: vars.weight.semiBold,
  color: vars.colors.standard.highContrastText,
});

export const separator = style({
  marginTop: vars.spacing["1"],
  marginBottom: vars.spacing["1"],
  marginLeft: `-${vars.spacing["1"]}`,
  marginRight: `-${vars.spacing["1"]}`,
  height: "1px",
  backgroundColor: elementBackground,
});

export const shortcut = style({
  marginLeft: "auto",
  fontWeight: vars.weight.semiBold,
  letterSpacing: "0.25em",
  color: lowContrastText,
});

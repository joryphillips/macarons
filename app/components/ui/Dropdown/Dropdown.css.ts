import { keyframes, style } from "@vanilla-extract/css";
import {
  slideInFromBottom2,
  slideInFromLeft2,
  slideInFromRight2,
  slideInFromTop2,
} from "~/theme/animations";
import { vars } from "~/theme/theme.css";

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
  // fontSize: vars.text.standard.desktop.fontSize,
  fontWeight: vars.weight.regular,
  outline: "none",
  transition: "background-color 0.2s",
  backgroundColor: vars.colors.standard.elementBackground,
  selectors: {
    "&:focus-visible": {
      backgroundColor: vars.colors.standard.hoveredElementBackground,
    },
    "&[data-state=open]": {
      backgroundColor: vars.colors.standard.activeElementBackground,
    },
  },
});

export const subTriggerInset = style({
  paddingLeft: vars.spacing[8],
});

export const subContent = style({
  zIndex: 50,
  minWidth: "8rem",
  overflow: "hidden",
  borderRadius: vars.border.radius.xs,
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: vars.colors.standard.elementBorder,
  backgroundColor: vars.colors.standard.elementBackground,
  paddingTop: vars.spacing["1"],
  paddingRight: vars.spacing["1"],
  paddingBottom: vars.spacing["1"],
  paddingLeft: vars.spacing["1"],
  color: vars.colors.standard.lowContrastText,
  boxShadow: vars.boxShadow.md,
  animationDuration: "150ms",
  animationFillMode: "both",
  selectors: {
    '&[data-side="right"]': {
      animation: `${keyframes(
        slideInFromLeft2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="left"]': {
      animation: `${keyframes(
        slideInFromRight2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="bottom"]': {
      animation: `${keyframes(
        slideInFromTop2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="top"]': {
      animation: `${keyframes(
        slideInFromBottom2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  },
});

export const content = style({
  zIndex: 50,
  minWidth: "8rem",
  overflow: "hidden",
  borderRadius: vars.border.radius.sm,
  borderWidth: "1px",
  borderStyle: "solid",
  backgroundColor: vars.colors.standard.appBackground,
  padding: vars.spacing["1"],
  color: vars.colors.standard.lowContrastText,
  boxShadow: vars.boxShadow.md,
  animationFillMode: "both",
  selectors: {
    '&[data-side="right"]': {
      animation: `${keyframes(
        slideInFromLeft2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="left"]': {
      animation: `${keyframes(
        slideInFromRight2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="bottom"]': {
      animation: `${keyframes(
        slideInFromTop2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="top"]': {
      animation: `${keyframes(
        slideInFromBottom2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  },
});

export const menuItem = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: vars.border.radius.xs,
  paddingTop: vars.spacing["2"],
  paddingRight: vars.spacing["2"],
  paddingBottom: vars.spacing["2"],
  paddingLeft: vars.spacing["2"],
  // fontSize: vars.text.small.desktop.fontSize,
  fontWeight: vars.weight.regular,
  outline: "none",
  transition: "background-color 0.2s",
  selectors: {
    "&:focus-visible": {
      backgroundColor: vars.colors.standard.hoveredElementBackground,
    },
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
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
  // fontSize: vars.text.standard.desktop.fontSize,
  fontWeight: vars.weight.semiBold,
  color: vars.colors.standard.highContrastText,
});

export const separator = style({
  marginTop: vars.spacing["1"],
  marginBottom: vars.spacing["1"],
  marginLeft: `-${vars.spacing["1"]}`,
  marginRight: `-${vars.spacing["1"]}`,
  height: "1px",
  backgroundColor: vars.colors.standard.elementBackground,
});

export const shortcut = style({
  marginLeft: "auto",
  // fontSize: vars.fontSize.he,
  fontWeight: vars.weight.semiBold,
  letterSpacing: "0.25em",
  color: vars.colors.standard.lowContrastText,
});

import { style } from "@vanilla-extract/css";
import {
  fadeIn,
  fadeIn90,
  fadeOut,
  slideInFromBottom0,
  slideInFromBottom10,
  zoomIn90,
} from "~/theme/animations";
import { vars } from "~/theme/theme.css";

export const dialogPortal = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 50,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  "@media": {
    "(min-width: 640px)": {
      alignItems: "center",
    },
  },
});

export const dialogOverlay = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 50,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
  backdropFilter: `blur(20px)`,
  transitionDuration: `100ms`,
  selectors: {
    "&[data-state=closed]": {
      animation: `${fadeOut} 100ms ease-in-out`,
    },
    "&[data-state=open]": {
      animationName: `${fadeIn} 100ms ease-in-out`,
    },
  },
});

export const dialogContent = style({
  position: "fixed",
  zIndex: 50,
  display: "grid",
  width: "100%",
  gap: vars.spacing[4],
  borderRadius: vars.border.radius.sm,
  backgroundColor: vars.colors.standard.subtleBackground,
  padding: vars.spacing[6],
  selectors: {
    "&[data-state=open]": {
      animationName: `${fadeIn90}, ${slideInFromBottom10}`,
      animationDuration: "100ms, 150ms",
      animationTimingFunction: "ease-in-out, ease-in-out",
    },
    "&[data-state=closed]": {
      animationName: `${fadeOut}, ${slideInFromBottom0}`,
      animationDuration: "100ms, 150ms",
      animationTimingFunction: "ease-in-out, ease-in-out",
    },
  },
  "@media": {
    "screen and (min-width: 640px)": {
      maxWidth: vars.contentWidth.sm,
      animation: `{keyframes: ${zoomIn90}} 150ms ease-in-out`,
    },
    "screen and (min-width: 768px)": {
      animation: `{keyframes: ${slideInFromBottom0}} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  },
});

export const dialogCloseButton = style({
  position: "absolute",
  top: vars.spacing["1"],
  right: vars.spacing["1"],
  borderRadius: vars.border.radius.sm,
  opacity: 0.7,
  transition: "opacity 150ms ease-in-out",
  selectors: {
    "&:hover, &:focus-visible": {
      opacity: 1,
      outline: "none",
      borderWidth: vars.border.width.standard,
      borderColor: vars.colors.standard.hoveredElementBorder,
      borderStyle: "solid",
    },
    "&:disabled": {
      pointerEvents: "none",
    },
    "&[data-state=open]": {
      backgroundColor: vars.colors.standard.activeElementBackground,
    },
    "&[data-state=open]:focus-visible": {
      borderWidth: vars.border.width.double,
      borderColor: vars.colors.standard.hoveredElementBorder,
    },
  },
});

export const dialogCloseIcon = style({
  width: vars.spacing["4"],
  height: vars.spacing["4"],
});

export const dialogHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["2"],
  textAlign: "center",
  "@media": {
    "screen and (min-width: 640px)": {
      textAlign: "left",
    },
  },
});

export const dialogFooter = style({
  display: "flex",
  flexDirection: "column-reverse",
  "@media": {
    "screen and (min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: "0.5rem",
    },
  },
});

export const dialogTitle = style({
  // fontSize: vars.heading.h3.desktop.fontSize,
  fontWeight: vars.weight.semiBold,
  color: vars.colors.standard.highContrastText,
});

export const dialogDescription = style({
  // fontSize: vars.text.small.desktop.fontSize,
  color: vars.colors.standard.highContrastText,
});

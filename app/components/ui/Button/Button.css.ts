import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const { colors } = vars;
const { standard, info, primary, destructive } = colors;

const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  borderRadius: vars.border.radius.sm,
  fontSize: "1rem",
  fontWeight: "500",
  fontFamily: vars.fonts,
  minWidth: "2.5rem",
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
  outline: "none",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  backgroundColor: info.solidBackground,
  // TEMP flipping as the background is a dark blue
  color: standard.textOnSolidBackground,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: info.hoveredSolidBackground,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${info.elementBorder}`,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    "&:active": {
      backgroundColor: info.activeSolidBackground,
      boxShadow: "none",
    },
  },
});

export const disabledStyle = style({
  cursor: "not-allowed",
  pointerEvents: "none",
  opacity: 0.5,
});

export const buttonStyleVariants = styleVariants({
  default: [buttonBase],
  destructive: [
    buttonBase,
    {
      backgroundColor: destructive.solidBackground,
      // flipping gray and graydark for color as the background is a dark red
      color: standard.appBackground,
      selectors: {
        "&:hover": {
          backgroundColor: destructive.hoveredSolidBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${destructive.elementBorder}`,
        },
        "&:active": {
          backgroundColor: destructive.hoveredSolidBackground,
          boxShadow: "none",
        },
      },
    },
  ],
  outline: [
    buttonBase,
    {
      backgroundColor: standard.elementBackground,
      color: standard.highContrastText,
      borderColor: standard.elementBorder,
      selectors: {
        "&:focus-visible": {
          outline: "none",
          borderColor: "transparent",
          boxShadow: `0 0 0 2px ${standard.hoveredElementBorder}`,
        },
        "&:hover": {
          backgroundColor: standard.hoveredElementBackground,
        },
        "&:active": {
          backgroundColor: standard.activeElementBackground,
          boxShadow: "none",
        },
      },
    },
  ],
  subtle: [
    buttonBase,
    {
      backgroundColor: standard.subtleBackground,
      color: standard.lowContrastText,
      selectors: {
        "&:hover": {
          backgroundColor: standard.hoveredElementBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${standard.hoveredElementBorder}`,
        },
        "&:active, &.active": {
          backgroundColor: standard.activeElementBackground,
          boxShadow: "none",
        },
      },
    },
  ],
  ghost: [
    buttonBase,
    {
      backgroundColor: "transparent",
      color: standard.highContrastText,
      selectors: {
        "&:hover": {
          backgroundColor: standard.hoveredElementBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${standard.hoveredElementBorder}`,
        },
        "&:active, &.active": {
          backgroundColor: standard.activeElementBackground,
          boxShadow: "none",
        },
      },
    },
  ],
  link: [
    buttonBase,
    {
      backgroundColor: "transparent",
      color: info.lowContrastText,
      fontSize: "1rem",
      borderWidth: 0,
      justifyContent: "flex-start",
      textDecorationOffset: "0.25rem",
      selectors: {
        "&:focus": {
          outline: "none",
          boxShadow: "none",
          textDecoration: "underline",
        },
        "&:focus-visible": {
          outline: "none",
          boxShadow: "none",
          textDecoration: "underline",
        },
        "&:hover": {
          textDecoration: "underline",
          backgroundColor: "transparent",
          color: info.highContrastText,
        },
        "&:active": {
          backgroundColor: "transparent",
          color: info.highContrastText,
        },
      },
    },
  ],
  primary: [
    buttonBase,
    {
      borderColor: "transparent",
      backgroundColor: primary.solidBackground,
      color: "#FFFFFF",
      selectors: {
        "&:hover": {
          backgroundColor: primary.hoveredSolidBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${primary.elementBorder}`,
        },
        "&:active": {
          backgroundColor: primary.activeSolidBackground,
          boxShadow: "none",
        },
      },
    },
  ],
});

export const buttonSizeVariants = styleVariants({
  default: {
    height: "2.5rem",
    padding: "0.75rem 1rem",
  },
  sm: {
    height: "2rem",
    padding: "0.5rem 0.75rem",
    fontSize: "0.875rem",
  },
  lg: {
    height: "3rem",
    padding: "1rem 1.5rem",
    fontSize: "1.125rem",
  },
  listItem: {
    height: "7rem",
    padding: "1rem 1.5rem",
    fontSize: "1.125rem",
  },
  none: {
    height: "auto",
    padding: "0",
  },
  icon: {
    height: "40px",
    width: "40px",
    padding: 0,
  },
});

export const buttonWidthVariants = styleVariants({
  auto: {
    width: "auto",
  },
  full: {
    width: "100%",
  },
  half: {
    width: "50%",
  },
  oneThird: {
    width: "33.333%",
  },
});

// spinner animation keyframes
const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

// loading spinner styles
export const loadingSpinner = style({
  animation: `${spin} 1s linear infinite`,
});

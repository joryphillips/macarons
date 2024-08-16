import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { uIText } from "../Text/Text.css";

const { colors } = vars;
const { standard, info, primary, destructive } = colors;

const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  minWidth: vars.contentWidth["4xs"],
  borderRadius: vars.border.radius.sm,
  fontWeight: vars.weight.medium,
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
  outline: "none",
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: "transparent",
  backgroundColor: info.solidBackground,
  color: standard.textOnSolidBackground,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: info.hoveredSolidBackground,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 ${vars.border.width.double} ${info.elementBorder}`,
    },
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: info.subtleBackground,
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
  default: [buttonBase, uIText["default"]],
  destructive: [
    buttonBase,
    {
      backgroundColor: destructive.solidBackground,
      color: destructive.textOnSolidBackground,
      selectors: {
        "&:hover": {
          backgroundColor: destructive.hoveredSolidBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${destructive.elementBorder}`,
        },
        "&:active": {
          backgroundColor: destructive.activeSolidBackground,
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
          boxShadow: `0 0 0 ${vars.border.width.double} ${standard.hoveredElementBorder}`,
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
      borderColor: standard.subtleBorder,
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
      color: primary.textOnSolidBackground,
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
  default: [
    {
      height: vars.spacing[10],
      padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
    },
    uIText["default"],
  ],
  sm: [
    {
      height: vars.spacing[8],
      padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
    },
    uIText["sm"],
  ],
  lg: [
    {
      height: vars.spacing[12],
      padding: `${vars.spacing[4]} ${vars.spacing[6]}`,
    },
    uIText["lg"],
  ],
  listItem: {
    height: "7rem",
    padding: "1rem 1.5rem",
    fontSize: "1.125rem",
  },
  none: {
    height: "auto",
    padding: "0",
  },
});

export const iconSizeVariants = styleVariants({
  default: {
    minWidth: vars.spacing[8],
    width: vars.spacing[8],
    height: vars.spacing[8],
    padding: 0,
  },
  sm: {
    minWidth: vars.spacing[6],
    width: vars.spacing[6],
    height: vars.spacing[6],
    padding: 0,
  },
});

export const buttonJustifyContentVariants = styleVariants({
  center: {
    justifyContent: "center", // default
  },
  start: {
    justifyContent: "flex-start",
  },
  end: {
    justifyContent: "flex-end",
  },
  justify: {
    justifyContent: "space-between",
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
  "4xs": {
    width: vars.contentWidth["4xs"],
  },
  "3xs": {
    width: vars.contentWidth["3xs"],
  },
  "2xs": {
    width: vars.contentWidth["2xs"],
  },
  xs: {
    width: vars.contentWidth.xs,
  },
});

const prefixAndSuffixBase = {
  minWidth: "1.25rem",
  width: "1.25rem",
  height: "1.25rem",
};

export const buttonPrefixIcon = style({
  ...prefixAndSuffixBase,
  marginRight: vars.spacing[4],
});

export const buttonSuffixIcon = style({
  ...prefixAndSuffixBase,
  marginLeft: vars.spacing[4],
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

import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { uIText } from "../Text/Text.css";
import { pinkA, pinkDarkA, grayDark, whiteA, blackA } from "@radix-ui/colors";

const { colors } = vars;
const { standard, info, primary, success, destructive, textOnSolidBackground } = colors;

const buttonBasics = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  borderRadius: vars.border.radius.sm,
  fontWeight: vars.weight.medium,
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
  outline: "none",
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: "transparent",
  cursor: "pointer",
}

// TODO: reconfigure IconButton styles to avoid using !important
export const noBorderStyle = style({
  borderStyle: "none!important",
});

export const buttonBasicsStyles = style(buttonBasics);

const buttonBase = style({
  ...buttonBasics,
  minWidth: vars.contentSize["4xs"],
  backgroundColor: info.solidBackground,
  color: textOnSolidBackground,
  selectors: {
    "&:hover": {
      backgroundColor: info.hoveredSolidBackground,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 ${vars.border.width.double} ${info.elementBorder}`,
    },
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: info.activeElementBackground,
      color: info.lowContrastText,
    },
    "&:focus-visible:disabled": {
      boxShadow: `0 0 0 ${vars.border.width.double} ${info.elementBorder}`,
    },
    "&:active": {
      filter: "brightness(95%)",
      boxShadow: "none",
    },
  },
});

const ghostPrimary = {
  backgroundColor: "transparent",
  color: primary.highContrastText,
  borderColor: primary.elementBorder,
  selectors: {
    "&:hover": {
      // TODO: add to theme so that we don't need a .dark selector
      backgroundColor: pinkA.pinkA4,
    },
    ".dark &:hover": {
      // TODO: add to theme so that we don't need a .dark selector
      backgroundColor: pinkDarkA.pinkA4,
    },
    "&:focus-visible": {
      borderColor: primary.hoveredElementBorder,
      boxShadow: `0 0 0 2px ${primary.hoveredElementBorder}`,
    },
    "&:active, &.active": {
      backgroundColor: primary.activeElementBackground,
      boxShadow: "none",
    },
  },
};


/**
 * NOTE: we don't want colors for this component variant to change
 * in the usual way in dark mode, which more or less flips the scale,
 * as we expect it to always be used on dark backgrounds (images
 * that are dark in light mode are still dark in dark mode).
 * We are using high contrast values for text and the border.
 */
const ghostOnDark = {
  backgroundColor: "transparent",
  color: grayDark.gray12,
  borderColor: grayDark.gray12,
  selectors: {
    "&:hover": {
      backgroundColor: whiteA.whiteA4,
    },
    "&:focus-visible": {
      borderColor: grayDark.gray12,
      boxShadow: `0 0 0 2px ${grayDark.gray12}`,
    },
    "&:active, &.active": {
      backgroundColor: whiteA.whiteA5,
      boxShadow: "none",
    },
  },
};

export const ghostPrimaryStyles = style({
  ...buttonBasics,
  ...ghostPrimary});

export const buttonStyleVariants = styleVariants({
  default: [buttonBase, uIText["default"]],
  success: [
    buttonBase,
    {
      backgroundColor: success.solidBackground,
      color: textOnSolidBackground,
      selectors: {
        "&:hover": {
          backgroundColor: success.hoveredSolidBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${success.elementBorder}`,
        },
        "&:active": {
          filter: "brightness(95%)",
          boxShadow: "none",
        },
      },
    },
  ],
  destructive: [
    buttonBase,
    {
      backgroundColor: destructive.solidBackground,
      color: textOnSolidBackground,
      selectors: {
        "&:hover": {
          backgroundColor: destructive.hoveredSolidBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${destructive.elementBorder}`,
        },
        "&:active": {
          filter: "brightness(95%)",
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
          borderColor: standard.hoveredElementBorder,
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
      borderColor: standard.elementBorder,
      selectors: {
        // TODO: add to theme so that we don't need a .dark selector
        "&:hover": {
          backgroundColor: blackA.blackA4,
        },
        ".dark &:hover": {
          backgroundColor: whiteA.whiteA4,
        },
        "&:focus-visible": {
          borderColor: standard.hoveredElementBorder,
          boxShadow: `0 0 0 2px ${standard.hoveredElementBorder}`,
        },
        "&:active, &.active": {
          backgroundColor: standard.activeElementBackground,
          boxShadow: "none",
        },
      },
    },
  ],
  ghostPrimary: [
    buttonBase,
    ghostPrimary,
  ],
  ghostOnDark: [
    buttonBase,
    ghostOnDark,
  ],
  primary: [
    buttonBase,
    {
      borderColor: "transparent",
      backgroundColor: primary.solidBackground,
      color: textOnSolidBackground,
      selectors: {
        "&:hover": {
          backgroundColor: primary.hoveredSolidBackground,
        },
        "&:focus-visible": {
          boxShadow: `0 0 0 2px ${primary.elementBorder}`,
        },
        "&:active": {
          filter: "brightness(95%)",
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
    width: vars.contentSize["4xs"],
  },
  "3xs": {
    width: vars.contentSize["3xs"],
  },
  "2xs": {
    width: vars.contentSize["2xs"],
  },
  xs: {
    width: vars.contentSize.xs,
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

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const loadingSpinner = style({
  animation: `${spin} 1s linear infinite`,
});

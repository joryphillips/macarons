import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { uIText } from "../Text/Text.css";
import { base as baseReset, input as inputReset } from "~/styles/reset.css";

const { colors } = vars;
const { standard, destructive } = colors;

export const inputContainerStyles = style({
  // Use grid as a hack to overlay the clear button on top of the input.
  // This avoids the stacking context issues with absolute & relative positioning.
  display: "grid",
  width: "100%",
});

export const inputBaseStyles = style({
  display: "flex",
  alignItems: "center",
  height: vars.spacing[10],
  width: "100%",
  borderRadius: vars.border.radius.sm,
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: standard.elementBorder,
  backgroundColor: "transparent",
  paddingTop: vars.spacing[2],
  paddingBottom: vars.spacing[2],
  color: standard.highContrastText,
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
  // Use grid as a hack to overlay the clear button on top of the input.
  // This avoids the stacking context issues with absolute & relative positioning.
  gridRowStart: 1,
  gridColumnStart: 1,
  selectors: {
    "&::placeholder": {
      color: standard.lowContrastText,
    },
    "&:focus": {
      outline: "none",
      borderColor: "transparent",
    },
    "&:focus, &:focus-visible, &:focus-within": {
      boxShadow: `0 0 0 2px ${standard.elementBorder}`,
    },
    "&:disabled": {
      cursor: "not-allowed",
      borderColor: standard.subtleBorder,
    },
  },
});

export const clearButtonStylesBase = style({
  padding: vars.spacing[1],
  width: "fit-content",
  // Use grid as a hack to overlay the clear button on top of the input.
  // This avoids the stacking context issues with absolute & relative positioning.
  gridRowStart: 1,
  gridColumnStart: 1,
});

export const inputClearButtonStyles = styleVariants({
  default: [clearButtonStylesBase,
    {
      marginLeft: `calc(100% - ${vars.spacing[10]})`,
    },
  ],
  sm: [clearButtonStylesBase,
    {
      marginLeft: `calc(100% - ${vars.spacing[8]})`,
    },
  ],
});

export const inputStyles = styleVariants({
  default: [
    baseReset,
    inputReset,
    inputBaseStyles,
    {
      height: vars.spacing[10],
      paddingLeft: vars.spacing[3],
      paddingRight: vars.spacing[10],
    },
    uIText["default"],
  ],
  sm: [
    baseReset,
    inputReset,
    inputBaseStyles,
    {
      height: vars.spacing[8],
      paddingLeft: vars.spacing[2],
      paddingRight: vars.spacing[8],    },
    uIText["sm"],
  ],
});

export const invalid = style({
  borderColor: destructive.elementBorder,
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: "transparent",
    },
    "&:focus, &:focus-visible, &:focus-within": {
      boxShadow: `0 0 0 2px ${destructive.elementBorder}`,
    },
  },
});

export const textAreaStyles = style({
  height: "5rem",
});

export const errorTextStyles = style({
  color: destructive.lowContrastText,
});

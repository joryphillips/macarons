import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { uIText } from "../Text/Text.css";

const { colors } = vars;
const { standard, destructive } = colors;

export const inputStyles = style({
  display: "flex",
  alignItems: "center",
  height: vars.spacing[10],
  width: "100%",
  borderRadius: vars.border.radius.sm,
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: standard.elementBorder,
  backgroundColor: "transparent",
  padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
  color: standard.highContrastText,
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
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
      opacity: 0.5,
    },
  },
});

export const inputSizeVariants = styleVariants({
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

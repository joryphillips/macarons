import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const { colors } = vars;
const { standard } = colors;

export const inputStyles = style({
  display: "flex",
  alignItems: "center",
  height: "2.5rem",
  width: "100%",
  borderRadius: vars.border.radius.sm,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: standard.elementBorder,
  backgroundColor: "transparent",
  padding: "0.5rem 0.75rem",
  fontSize: "1rem",
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

export const textAreaStyles = style({
  height: "5rem",
});

import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const labelStyles = style({
  display: "inline-block",
  fontFamily: vars.fonts,
  lineHeight: "1rem",
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
});

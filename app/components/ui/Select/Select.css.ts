import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const selectInputStyle = style({
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  color: vars.colors.standard.highContrastText,
});

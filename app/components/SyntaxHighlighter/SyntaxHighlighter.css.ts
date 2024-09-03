import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const syntaxHighlighterContainer = style({
  maxWidth: vars.contentSize["prose"],
  maxHeight: "50vh",
  width: "100%",
  overflow: "auto",
  borderRadius: vars.border.radius.sm,
  borderStyle: "solid",
  borderWidth: vars.border.width.standard,
  borderColor: vars.colors.standard.elementBorder,
});
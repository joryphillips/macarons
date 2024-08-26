import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const syntaxHighlighterContainer = style({
  maxWidth: vars.contentWidth["prose"],
  maxHeight: "50vh",
  width: "100%",
  overflow: "scroll",
  borderRadius: vars.border.radius.sm,
  borderStyle: "solid",
  borderWidth: vars.border.width.standard,
  borderColor: vars.colors.standard.elementBorder,
});
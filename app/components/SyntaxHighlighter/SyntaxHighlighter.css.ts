import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const containerStyles = style({
  maxWidth: vars.contentSize["prose"],
  maxHeight: "50vh",
  width: "100%",
  overflow: "auto",
  padding: vars.spacing[4],
  borderRadius: vars.border.radius.sm,
  borderStyle: "solid",
  borderWidth: vars.border.width.standard,
  borderColor: vars.colors.standard.elementBorder,
});

export const lineStyles = style({
  textAlign: "left",
  margin: "1em 0",
  lineHeight: 1.3,
  fontSize: vars.typescale.sm,
  fontFamily: "monospace",
  overflowX: "scroll",
});

export const lineNumberStyles = style({
  display: "inline-block",
  width: "2rem",
  userSelect: "none",
});
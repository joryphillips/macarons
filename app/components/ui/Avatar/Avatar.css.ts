import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { typescale } from "~/theme/typography";

export const rootStyles = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: vars.spacing[12],
  height: vars.spacing[12],
  borderRadius: vars.border.radius.full,
  backgroundColor: vars.colors.standard.elementBackground,

});

export const imageStyles = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const fallbackStyles = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.colors.primary.highContrastText,
  backgroundColor: vars.colors.primary.elementBackground,
  fontSize: typescale.md,
  fontWeight: vars.weight.medium,
});

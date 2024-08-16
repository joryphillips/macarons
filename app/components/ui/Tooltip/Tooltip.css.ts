import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const tooltipContentStyles = style({
  borderRadius: vars.border.radius.sm,
  borderWidth: "1px",
  padding: "0.75rem 0.75rem",
  fontSize: "0.875rem",
  color: vars.colors.standard.appBackground,
  backgroundColor: vars.colors.primary.solidBackground,
  opacity: "0.93",
  boxShadow: vars.boxShadow.md,
  overflow: "hidden",
  fontWeight: 400,
  lineHeight: "1.25rem",
});

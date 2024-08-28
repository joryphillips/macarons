import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const tooltipContentStyles = style({
  zIndex: vars.zIndex.tooltip,
  borderRadius: vars.border.radius.sm,
  padding: vars.spacing[3],
  color: vars.colors.standard.appBackground,
  backgroundColor: vars.colors.primary.solidBackground,
  opacity: "0.93",
  boxShadow: vars.boxShadow.md,
  overflow: "hidden",
});

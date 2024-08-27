// TooltipFullyCustomExample.css.ts

import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const customTooltipContentStyles = style({
  borderRadius: vars.border.radius.lg,
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
  color: vars.colors.standard.highContrastText,
  backgroundColor: vars.colors.warning.solidBackground,
  opacity: "0.75",
  boxShadow: vars.boxShadow["2xl"],
});
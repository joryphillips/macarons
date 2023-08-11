import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const { colors } = vars;
const { standard, info, success, warning, error } = colors;

const badgeBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "2rem",
  height: "1.5rem",
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.border.radius.full,
  backgroundColor: standard.elementBackground,
});

export const badgeText = style({
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: vars.weight.semiBold,
  color: standard.highContrastText,
});

export const badgeVariants = styleVariants({
  standard: [
    badgeBase,
    {
      backgroundColor: standard.elementBackground,
      color: standard.highContrastText,
    },
  ],
  info: [
    badgeBase,
    {
      backgroundColor: info.elementBackground,
      color: info.highContrastText,
    },
  ],
  success: [
    badgeBase,
    {
      backgroundColor: success.elementBackground,
      color: success.highContrastText,
    },
  ],
  warning: [
    badgeBase,
    {
      backgroundColor: warning.elementBackground,
      color: warning.highContrastText,
    },
  ],
  error: [
    badgeBase,
    {
      backgroundColor: error.elementBackground,
      color: error.highContrastText,
    },
  ],
});

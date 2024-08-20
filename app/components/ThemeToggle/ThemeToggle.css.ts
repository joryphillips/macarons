import { createVar, style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const toggleBrightness = createVar();
const toggleContent = createVar();
const focusRingColor = createVar();

export const themeToggleClasses = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.border.radius.sm,
  cursor: "pointer",
  outline: "none",
  fontSize: 24,
  height: 42,
  width: 42,
  vars: {
    [toggleBrightness]: "0",
    [focusRingColor]: vars.colors.info.elementBorder,
  },
  ":focus-visible": {
    boxShadow: `0px 0px 0px 2px ${focusRingColor}`,
  },
  "::before": {
    content: toggleContent,
    filter: `contrast(0) brightness(${toggleBrightness})`,
  },
});

import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const macaronStyles = style({
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "120ms",
  selectors: {
    "&:hover": {
      transform: "translateY(-3px)",
    },
    "&:active": {
      transform: "translateY(1px)",
    },
  }
});
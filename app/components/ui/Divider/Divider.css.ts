import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const horizontalStyles = {
  width: "100%",
  height: "1px",
};

const verticalStyles = {
  height: "100%",
  width: "1px",
};

const dividerBase = style({
  backgroundColor: vars.colors.standard.subtleBorder,
});

export const dividerStyles = styleVariants({
  horizontal: [dividerBase, horizontalStyles],
  vertical: [dividerBase, verticalStyles],
});

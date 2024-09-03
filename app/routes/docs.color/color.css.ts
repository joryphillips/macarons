import { style } from "@vanilla-extract/css";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";
import { typescale } from "~/theme/typography";

function getFontSize(token: keyof typeof typescale) {
  return {
    fontSize: `${typescale[token]}`,
  };
}

const breakPointStyles = {
  [`screen and (min-width: ${breakpoints.small}px)`]: {
    width: "3.5rem",
    height: "3.5rem",
  },
  [`screen and (min-width: ${breakpoints.desktop}px)`]: {
    width: "4.5rem",
    height: "4.5rem",
  },
}

export const colorChip = style({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: vars.border.radius.md,
  boxShadow: vars.boxShadow.base,
  "@media": breakPointStyles,
});

export const colorLabel = style({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width: "2.5rem",
  height: "2.5rem",
  hyphens: "auto",  
  textAlign: "center",
  verticalAlign: "bottom",
  "@media": breakPointStyles,
});

export const colorTableLabelSize = style({
  ...getFontSize("xs"),
  "@media": {
    [`screen and (min-width: ${breakpoints.small}px)`]: {
      ...getFontSize("sm"),
    },
  },
});
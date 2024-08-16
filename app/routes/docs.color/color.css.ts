import { style } from "@vanilla-extract/css";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";
import { baseTypescaleTokens } from "~/theme/typography";

function getFontSize(token: keyof typeof baseTypescaleTokens) {
  return {
    fontSize: `${baseTypescaleTokens[token]}rem`,
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
  width: "3rem",
  height: "3rem",
  borderRadius: vars.border.radius.md,
  boxShadow: vars.boxShadow.base,
  "@media": breakPointStyles,
});

export const colorLabel = style({
  textAlign: "center",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width: "3rem",
  height: "3rem",
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
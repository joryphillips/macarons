import { style } from "@vanilla-extract/css";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";

const lowerPageHeight = `calc(100vh - ${vars.spacing[10]})`;

export const sideNavStyles = style({
  boxSizing:"border-box",
  position:"fixed",
  maxWidth:"100%",
  top:vars.spacing[10],
  bottom: 0,
  gap:vars.spacing[2],
  paddingTop:vars.spacing[2],
  paddingRight:vars.spacing[2],
  paddingLeft:vars.spacing[2],
  paddingBottom:vars.spacing[12],
  alignItems:"flex-start",
  backgroundColor:vars.colors.standard.appBackground,
  height:lowerPageHeight,
  width:"100%",
  overflowY:"auto",
  outline:"none",
  borderRadius: vars.border.radius.sm,


  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      position:"sticky",
      maxWidth:vars.contentWidth["3xs"],
    }
  },
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${vars.colors.primary.hoveredElementBorder}`,
    },
  }
});

export const articleStyles = style({
   paddingTop:vars.spacing[4],
   paddingBottom:vars.spacing[8],
   width:"100%",
   maxWidth:vars.contentWidth["prose"],
});
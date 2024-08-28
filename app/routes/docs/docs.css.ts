import { style } from "@vanilla-extract/css";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";

export const lowerPageContainerStyles = style({ 
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  maxWidth:vars.contentWidth["xl"],
  marginTop:vars.spacing[10],
  marginLeft:"auto",
  marginRight:"auto",
  width:"100%",
  alignItems:"flex-start",
  boxSizing:"border-box",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop:`calc(${vars.spacing[10]})`,
    }
  }
});

export const sideNavStyles = style({
  zIndex: vars.zIndex.sideBar,
  boxSizing:"border-box",
  position:"fixed",
  minWidth:vars.contentWidth["3xs"],
  top:vars.spacing[10],
  bottom: 0,
  gap:vars.spacing[2],
  padding:vars.spacing[2],
  alignItems:"flex-start",
  backgroundColor:vars.colors.standard.appBackground,
  height:`calc(100vh - ${vars.spacing[10]})`,
  width:"100%",
  overflowY:"auto",
  outline:"none",
  borderRadius: vars.border.radius.sm,

  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      width:"auto",
      maxWidth:vars.contentWidth["2xs"],
      position:"sticky",
      height:`calc(100vh - ${vars.spacing[10]} - 2px)`,
      paddingBottom:vars.spacing[12],
    }
  },
  selectors: {
    "&:focus-visible": {
      boxShadow: `inset 0 0 0 2px ${vars.colors.primary.subtleBorder}`,
    },
  }
});

export const mainContentPanelStyles = style({
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  width:"100%",

  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      maxWidth: `calc(100% - ${vars.contentWidth["3xs"]})`,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      maxWidth:"100%"
    },
  }
});

export const articleStyles = style({
   paddingTop:vars.spacing[4],
   paddingRight:vars.spacing[4],
   paddingLeft:vars.spacing[4],
   paddingBottom:vars.spacing[12],
   width:"100%",
   maxWidth:vars.contentWidth["prose"],
});
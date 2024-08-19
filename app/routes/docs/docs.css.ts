import { style } from "@vanilla-extract/css";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";

export const sideNavStyles = style({
  position:"fixed",
  maxWidth:"100%",
  top:vars.spacing[12],
  gap:0,
  paddingTop:vars.spacing[4],
  paddingRight:0,

  paddingBottom:vars.spacing[12],
  alignItems:"flex-start",
  backgroundColor:vars.colors.standard.appBackground,
  height:"calc(100vh - 52px)",
  width:"100%",
  overflowY:"scroll",

  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      position:"relative",
      maxWidth:vars.contentWidth["3xs"],
      top:"auto",
      gap: 4,
      paddingTop:0,
      paddingRight:vars.spacing[4],
    }
  } 
});

// position={{ mobile: "fixed", tablet: "relative" }}
// width="100%"
// maxWidth={{ tablet: "3xs", mobile: "100%" }}
// top={{ mobile: 12, tablet: "auto" }}
// gap={{ mobile: 0, tablet: 4 }}
// paddingTop={{ mobile: 4, tablet: 0 }}
// paddingRight={{ mobile: 0, tablet: 4 }}
// paddingBottom={12}
// alignItems="flex-start"
// backgroundColor="appBackground"
// height="100vh"
// overflowY="scroll"
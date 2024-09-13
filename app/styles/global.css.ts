import { globalStyle } from "@vanilla-extract/css";
import { darkMode, lightMode } from "~/theme/colorMode";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";
import { breakPointFontRelativeSize } from "~/theme/typography";

const { colors } = vars;
const { standard, info } = colors;

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

/**
 * Controls the font and scaling of the entire app based on the defined
 * breakpoints. We are using relative units for font size, so that users are
 * able to increase the font size in their browser settings, which is important
 * for accessibility.
 */
globalStyle("html", {
  fontFamily: vars.fonts,
  background: standard.appBackground,
  color: standard.highContrastText,
  fontSize: `${breakPointFontRelativeSize.mobile * 100}%`,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: `${breakPointFontRelativeSize.tablet * 100}%`,
      // prevent page jump when scrollbar appears
      overflowY: "scroll",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: `${breakPointFontRelativeSize.desktop * 100}%`,
    },
  },
});

globalStyle(`.${lightMode}`, {
  colorScheme: "light",
});

globalStyle(`.${darkMode}`, {
  colorScheme: "dark",
});

globalStyle("a", {
  color: info.lowContrastText,
  textDecoration: "none",
});

globalStyle("table", {
  borderSpacing: 0,
});

globalStyle("th", {
  textAlign: "left",
});

globalStyle("td, th", {
  paddingTop: vars.spacing[1],
  paddingBottom: vars.spacing[1],
  paddingLeft: vars.spacing[3],
  paddingRight: vars.spacing[3],
});

globalStyle("ul", {
  margin: 0,
  paddingInlineStart: 0,
});

globalStyle("ul li", {
  lineHeight: "1.5",
  marginLeft: "1rem",
});

globalStyle("strong", { fontWeight: vars.weight.semiBold });

globalStyle("pre", { margin: 0 });

globalStyle("code", {
  fontFamily: "monospace",
  fontSize: "90%",
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.border.radius.xs,
  backgroundColor: vars.colors.standard.hoveredElementBackground,
});

// Prevent page jump when dropdown appears
// https://github.com/radix-ui/primitives/issues/1925
globalStyle("html body[data-scroll-locked]", {
  marginRight: "0px!important",
})
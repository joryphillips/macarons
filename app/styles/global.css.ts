import { globalStyle } from "@vanilla-extract/css";
import { darkMode, lightMode } from "~/styles/colorMode";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";
import { breakPointFontSizePx } from "~/theme/typography";

const { colors } = vars;
const { standard, info } = colors;

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily: vars.fonts,
  background: standard.appBackground,
  color: standard.highContrastText,
  fontSize: `${breakPointFontSizePx.mobile}px`,
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: `${breakPointFontSizePx.tablet}px`,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: `${breakPointFontSizePx.desktop}px`,
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

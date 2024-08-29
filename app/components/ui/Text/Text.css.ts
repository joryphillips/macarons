import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { typescale } from "~/theme/typography";

const base = {
  margin: 0,
  fontFamily: vars.fonts,
};

const PROSE_LINE_HEIGHT = 1.667;

function getFontSize(token: keyof typeof typescale) {
  return {
    fontSize: typescale[token],
  };
}

export const textScale = styleVariants({
  "jumbo": [base, getFontSize("jumbo")],
  "2xl": [base, getFontSize("2xl")],
  xl: [base, getFontSize("xl")],
  lg: [base, getFontSize("lg")],
  md: [base, { ...getFontSize("md"), lineHeight: PROSE_LINE_HEIGHT }],
  sm: [base, { ...getFontSize("sm"), lineHeight: PROSE_LINE_HEIGHT }],
  xs: [base, { ...getFontSize("xs"), lineHeight: PROSE_LINE_HEIGHT }],
});

export const uIText = styleVariants({
  default: [base, getFontSize("md")],
  sm: [base, getFontSize("sm")],
  lg: [base, getFontSize("lg")],
});

export const truncate = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const textAlignStyles = styleVariants({
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  justify: { textAlign: "justify" },
});

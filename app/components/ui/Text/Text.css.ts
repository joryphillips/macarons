import { styleVariants, style } from "@vanilla-extract/css";
import { createStyleObject } from "@capsizecss/core";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";
import { baseTypescaleTokens, fontMetrics } from "~/theme/typography";
import { stripUnit } from "polished";

export const textBase = style({
  margin: 0,
  fontFamily: vars.fonts,
});

const LINE_GAP_RATIO = {
  prose: 1, // 1:1 ratio font height to line gap
  none: 0, // no gap
  normal: undefined, // default line gap for font size
} as const;

/**
 * Note that instead of using the vanilla-extract capsize function, we are using
 * createStyleObject to get the font and line height values. This is because we
 * are using relative units for font size and line height (hence the `stripUnit`
 * function), and letting global styles control scaling at the defined
 * breakpoints. As a result, users are able to increase the font size in their
 * browser settings, which is important for accessibility.
 */
function getStyles(
  token: keyof typeof baseTypescaleTokens,
  lineGapRatio: number | undefined
) {
  const fontSize = baseTypescaleTokens[token];
  const lineGap = lineGapRatio != null ? lineGapRatio * fontSize : undefined;

  const styleParam = token.includes("ui")
    ? {
        capHeight: fontSize,
        lineGap,
        fontMetrics,
      }
    : {
        fontSize,
        lineGap,
        fontMetrics,
      };

  const fontStyle = createStyleObject(styleParam);

  return style({
    fontSize: `${stripUnit(fontStyle.fontSize)}rem`,
    lineHeight:
      fontStyle.lineHeight === "normal"
        ? fontStyle.lineHeight
        : `${stripUnit(fontStyle.lineHeight)}rem`,
    "::before": fontStyle["::before"],
    "::after": fontStyle["::after"],
    "@media": {
      [`screen and (min-width: ${breakpoints.tablet}px)`]: {
        fontSize: `${stripUnit(fontStyle.fontSize)}rem`,
        lineHeight:
          fontStyle.lineHeight === "normal"
            ? fontStyle.lineHeight
            : `${stripUnit(fontStyle.lineHeight)}rem`,
        "::before": fontStyle["::before"],
        "::after": fontStyle["::after"],
      },
      [`screen and (min-width: ${breakpoints.desktop}px)`]: {
        fontSize: `${stripUnit(fontStyle.fontSize)}rem`,
        lineHeight:
          fontStyle.lineHeight === "normal"
            ? fontStyle.lineHeight
            : `${stripUnit(fontStyle.lineHeight)}rem`,
        "::before": fontStyle["::before"],
        "::after": fontStyle["::after"],
      },
    },
  });
}

export const textScale = styleVariants({
  "2xl": [textBase, getStyles("2xl", LINE_GAP_RATIO.normal)],
  xl: [textBase, getStyles("xl", LINE_GAP_RATIO.normal)],
  lg: [textBase, getStyles("lg", LINE_GAP_RATIO.normal)],
  md: [textBase, getStyles("md", LINE_GAP_RATIO.prose)],
  sm: [textBase, getStyles("sm", LINE_GAP_RATIO.prose)],
  xs: [textBase, getStyles("xs", LINE_GAP_RATIO.prose)],
  uiMd: [textBase, getStyles("uiMd", LINE_GAP_RATIO.prose)],
  uiSm: [textBase, getStyles("uiSm", LINE_GAP_RATIO.normal)],
});

export const textAlignStyles = styleVariants({
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  justify: { textAlign: "justify" },
});

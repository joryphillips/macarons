import { styleVariants, style } from "@vanilla-extract/css";
import { createStyleObject } from "@capsizecss/core";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";
import {
  baseTypescaleTokens,
  breakPointFontRelativeSize,
  fontMetrics,
} from "~/theme/typography";
import { stripUnit } from "polished";

export const textBase = style({
  margin: 0,
  fontFamily: vars.fonts,
});

function getFontSize({
  breakPoint,
  token,
}: {
  breakPoint: keyof typeof breakPointFontRelativeSize;
  token: keyof typeof baseTypescaleTokens;
}) {
  return baseTypescaleTokens[token] * breakPointFontRelativeSize[breakPoint];
}

function getStyles(
  token: keyof typeof baseTypescaleTokens,
  lineGapRatio: {
    mobile: number | undefined;
    tablet: number | undefined;
    desktop: number | undefined;
  } = {
    mobile: undefined,
    tablet: undefined,
    desktop: undefined,
  }
) {
  const mobileFontSize = getFontSize({ breakPoint: "mobile", token });
  const tabletFontSize = getFontSize({ breakPoint: "tablet", token });
  const desktopFontSize = getFontSize({ breakPoint: "desktop", token });

  const styleMobile = createStyleObject({
    fontSize: mobileFontSize,
    lineGap: lineGapRatio.mobile
      ? lineGapRatio.mobile * mobileFontSize
      : undefined,
    fontMetrics,
  });

  const styleTablet = createStyleObject({
    fontSize: tabletFontSize,
    lineGap: lineGapRatio.tablet
      ? lineGapRatio.tablet * tabletFontSize
      : undefined,
    fontMetrics,
  });

  const styleDesktop = createStyleObject({
    fontSize: desktopFontSize,
    lineGap: lineGapRatio.desktop
      ? lineGapRatio.desktop * desktopFontSize
      : undefined,
    fontMetrics,
  });

  return style({
    fontSize: `${stripUnit(styleMobile.fontSize)}rem`,
    lineHeight:
      styleMobile.lineHeight === "normal"
        ? styleMobile.lineHeight
        : `${stripUnit(styleMobile.lineHeight)}rem`,
    "::before": styleMobile["::before"],
    "::after": styleMobile["::after"],
    "@media": {
      [`screen and (min-width: ${breakpoints.tablet}px)`]: {
        fontSize: `${stripUnit(styleTablet.fontSize)}rem`,
        lineHeight:
          styleTablet.lineHeight === "normal"
            ? styleTablet.lineHeight
            : `${stripUnit(styleTablet.lineHeight)}rem`,
        "::before": styleTablet["::before"],
        "::after": styleTablet["::after"],
      },
      [`screen and (min-width: ${breakpoints.desktop}px)`]: {
        fontSize: `${stripUnit(styleDesktop.fontSize)}rem`,
        lineHeight:
          styleDesktop.lineHeight === "normal"
            ? styleDesktop.lineHeight
            : `${stripUnit(styleDesktop.lineHeight)}rem`,
        "::before": styleDesktop["::before"],
        "::after": styleDesktop["::after"],
      },
    },
  });
}

/**
 * Note that without the `lineGap` property, the line height will be
 * the default line height for the font size. These values provide more spacing
 * than the default for better legibility. They are multiplied by the font size.
 * Example: `lineGap: 0.8 * fontSize`, so if the font size is 16px, the line gap
 * will be 12.8px. For body text, generally, the smaller the font size / screen,
 * the larger the line gap proportion should be.
 */
const readableTextLineGapRatios = {
  desktop: 0.8,
  tablet: 0.85,
  mobile: 0.9,
};

export const textScale = styleVariants({
  "2xl": [textBase, getStyles("2xl")],
  xl: [textBase, getStyles("xl")],
  lg: [textBase, getStyles("lg")],
  md: [textBase, getStyles("md", readableTextLineGapRatios)],
  sm: [textBase, getStyles("sm", readableTextLineGapRatios)],
  xs: [textBase, getStyles("xs", readableTextLineGapRatios)],
});

export const textAlignStyles = styleVariants({
  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  justify: { textAlign: "justify" },
});

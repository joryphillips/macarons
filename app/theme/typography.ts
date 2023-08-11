import lexendMetrics from "@capsizecss/metrics/lexend";
import { precomputeValues } from "@capsizecss/vanilla-extract";
import { modularScale } from "polished";

export const fonts = "'Lexend Variable', -apple-system, system-ui, sans-serif";

export const weight = {
  thin: "100",
  extraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
} as const;

// We could also use the fromFile utility with a proper path to the font file,
// instead of overriding the family name.
export const fontMetrics = {
  ...lexendMetrics,
  familyName: "Lexend Variable",
};

export const breakPointFontSizePx = {
  mobile: 16,
  tablet: 18,
  desktop: 20,
} as const;

/**
 * Roughly major third scale, dropping some values.
 */
export const baseTypescaleTokens = {
  "2xl": Number(modularScale(4, 1, "majorThird")),
  xl: Number(modularScale(2, 1, "majorThird")),
  lg: Number(modularScale(1, 1, "majorThird")),
  md: 1,
  sm: Number(modularScale(-1, 1, "majorThird")),
  xs: Number(modularScale(-2, 1, "majorThird")),
} as const;

/**
 * Use capsize for font sizes and line heights.
 * lineGap is the px distance from the baseline and cap height of the next line.
 * lineGap can be 1:1 with fontSize for UI elements, but for multi-line text, it
 * should be based on the width of the text container and whether used for
 * headings or body text.
 *
 * https://seek-oss.github.io/capsize/
 */
export function getCapsizeValues({
  fontSizeRem,
  lineGap,
  breakPoint,
}: {
  fontSizeRem: number;
  lineGap: number;
  breakPoint: keyof typeof breakPointFontSizePx;
}) {
  return precomputeValues({
    fontSize: fontSizeRem * breakPointFontSizePx[breakPoint],
    lineGap,
    fontMetrics,
  });
}

const breakPointContract: Record<keyof typeof breakPointFontSizePx, string> = {
  mobile: "",
  tablet: "",
  desktop: "",
} as const;

/**
 * ui elements should typically only use default, secondary, and tertiary, in
 * that order of frequency
 */
export const typeScaleContract = {
  "2xl": breakPointContract,
  xl: breakPointContract,
  lg: breakPointContract,
  md: breakPointContract,
  sm: breakPointContract,
  xs: breakPointContract,
};

type BreakpointTypescale = Record<keyof typeof breakPointFontSizePx, string>;

type TokenTypescale = Record<
  keyof typeof baseTypescaleTokens,
  BreakpointTypescale
>;

/**
 * For each typescale token, calculate typography styles for each breakpoint
 */
export function getTypographyScalesByBreakpoint(
  option: keyof ReturnType<typeof getCapsizeValues> = "fontSize"
): TokenTypescale {
  return Object.entries(baseTypescaleTokens).reduce((acc, [token, lineGap]) => {
    return {
      ...acc,
      [token]: Object.entries(breakPointFontSizePx).reduce(
        (acc, [breakPoint]) => {
          const capSizeValues = getCapsizeValues({
            fontSizeRem:
              baseTypescaleTokens[token as keyof typeof baseTypescaleTokens],
            lineGap,
            breakPoint: breakPoint as keyof typeof breakPointFontSizePx,
          });
          return {
            ...acc,
            [breakPoint]: capSizeValues[option],
          };
        },
        {} as BreakpointTypescale
      ),
    };
  }, {} as TokenTypescale);
}

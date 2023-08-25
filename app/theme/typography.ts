import lexendMetrics from "@capsizecss/metrics/lexend";
import { modularScale } from "polished";

const FONT_FAMILY_NAME = "Lexend Variable";

export const fonts = `'${FONT_FAMILY_NAME}', -apple-system, system-ui, sans-serif`;

// We could also use the fromFile utility with a proper path to the font file,
// instead of overriding the family name.
export const fontMetrics = {
  ...lexendMetrics,
  familyName: FONT_FAMILY_NAME,
};

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

/**
 * These relative sizes might seem small, but we are using Capsize to size
 * according to the actual height of capital letters for easier grid alignment.
 */
export const breakPointFontRelativeSize = {
  mobile: 0.75, // ~17px when base font size is 16px
  tablet: 0.8125, // ~18.5px when base font size is 16px
  desktop: 0.875, // ~20px when base font size is 16px
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

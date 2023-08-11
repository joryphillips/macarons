import lexendMetrics from "@capsizecss/metrics/lexend";
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

export const breakPointFontRelativeSize = {
  mobile: 1,
  tablet: 1.125,
  desktop: 1.25,
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

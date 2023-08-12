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
  uiMd: Number(modularScale(-1, 1, "majorThird")),
  sm: Number(modularScale(-1, 1, "majorThird")),
  uiSm: Number(modularScale(-2, 1, "majorThird")),
  xs: Number(modularScale(-2, 1, "majorThird")),
} as const;

const FONT_FAMILY_NAME = "Lexend Variable";
export const fonts = `'${FONT_FAMILY_NAME}', -apple-system, system-ui, sans-serif`;

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
  mobile: 1, // 16px when base font size is 16px
  tablet: 1.125, // 18px when base font size is 16px
  desktop: 1.25, // 20px when base font size is 16px
} as const;

/**
 * Roughly major third scale, dropping some values. Originally
 * calculated with polished modular scale function.
 * https://polished.js.org/docs/#modularscale
 * 
 * example: `const lg = modularScale(6, 1, "majorThird")`
 */
export const typescale = {
  jumbo: "3.8rem",
  "2xl": "2.45rem",
  xl: "1.5625rem",
  lg: "1.25rem",
  md: "1rem",
  sm: "0.8rem",
  xs: "0.64rem",
} as const;

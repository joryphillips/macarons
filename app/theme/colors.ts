import {
  indigo,
  indigoDark,
  red,
  redDark,
  grass,
  grassDark,
  pink,
  pinkDark,
  gray,
  grayDark,
  yellow,
  yellowDark,
  blackA,
  whiteA,
} from "@radix-ui/colors";

/**
 *  https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
 */
const radixColorScale = {
  /** Radix Color Scale Step 1: App background, or text on solid backgrounds */
  appBackground: "",
  /** Radix Color Scale Step 2: Subtle background */
  subtleBackground: "",
  /** Radix Color Scale Step 3: UI element background */
  elementBackground: "",
  /** Radix Color Scale Step 4: Hovered UI element background */
  hoveredElementBackground: "",
  /** Radix Color Scale Step 5: Active / Selected UI element background */
  activeElementBackground: "",
  /** Radix Color Scale Step 6: Subtle borders and separators */
  subtleBorder: "",
  /** Radix Color Scale Step 7: UI element border and focus rings */
  elementBorder: "",
  /** Radix Color Scale Step 8: Hovered UI element border */
  hoveredElementBorder: "",
  /** Radix Color Scale Step 9: Solid backgrounds */
  solidBackground: "",
  /** Radix Color Scale Step 10: Hovered solid backgrounds */
  hoveredSolidBackground: "",
  /** Radix Color Scale Step 11: Low-contrast text, or active solid backgrounds */
  lowContrastText: "",
  /** Radix Color Scale Step 12: High-contrast text */
  highContrastText: "",
} as const;

type RadixScale = keyof typeof radixColorScale;

export const colorStateContract = {
  primary: radixColorScale,
  standard: radixColorScale,
  info: radixColorScale,
  success: radixColorScale,
  warning: radixColorScale,
  destructive: radixColorScale,
  // Exceptions that are stand-alone and outside the scale
  overlay: "",
  textOnSolidBackground: "",
};

/**
 * Alias Radix color scales to color states. If the Radix color system changes,
 * this function will need to be updated. Relies on the fact that there are 12
 * steps in the Radix color scale and 12 colors/shades in each palette. Things will
 * get weird if this changes.
 */
function aliasStatesToColors(
{ colorScale, colorName }: { colorScale: Record<string, string>; colorName: string; }): Record<RadixScale, string> {
  const colorScaleKeys = Object.keys(colorScale);
  const colorTokens = Object.keys(radixColorScale) as RadixScale[];
  if (colorScaleKeys.length !== colorTokens.length) {
    throw new Error(
      `Token and Color scale lengths are inconsistent. Token length: ${colorTokens.length}, Color scale length: ${colorScaleKeys.length}
      `
    );
  }
  return colorTokens.reduce((acc, key, index) => {
    return {
      ...acc,
      [key]: colorScale[`${colorName}${index + 1}`],
    };
  }, {} as Record<RadixScale, string>);
}

export const lightColorStateTheme = {
  primary: aliasStatesToColors({ colorScale: pink, colorName: "pink" }), // anything other than gray, red, or yellow
  standard: aliasStatesToColors({ colorScale: gray, colorName: "gray" }),
  info: aliasStatesToColors({ colorScale: indigo, colorName: "indigo" }),
  success: aliasStatesToColors({ colorScale: grass, colorName: "grass" }),
  warning: aliasStatesToColors({ colorScale: yellow, colorName: "yellow" }),
  destructive: aliasStatesToColors({ colorScale: red, colorName: "red" }), // errors or destructive actions
  overlay: blackA.blackA9,
  textOnSolidBackground: grayDark.gray12,
};

// NOTE that the colorName property does not use the word "Dark"
export const darkColorStateTheme = {
  primary: aliasStatesToColors({ colorScale: pinkDark, colorName: "pink" }), // anything other than gray, red or yellow
  standard: aliasStatesToColors({ colorScale: grayDark, colorName: "gray" }),
  info: aliasStatesToColors({ colorScale: indigoDark, colorName: "indigo" }),
  success: aliasStatesToColors({ colorScale: grassDark, colorName: "grass" }),
  warning: aliasStatesToColors({ colorScale: yellowDark, colorName: "yellow" }),
  destructive: aliasStatesToColors({ colorScale: redDark, colorName: "red" }), // errors or destructive actions
  overlay: whiteA.whiteA9,
  textOnSolidBackground: grayDark.gray12,
};

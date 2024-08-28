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

/**
 * Additional token aliases for better DX. Values must match keys of the
 * radixColorScale object.
 */
const tokenAliases = {
  textOnSolidBackground: "appBackground",
  activeSolidBackground: "lowContrastText",
} as const;

export const colorTokenContract = {
  ...radixColorScale,
  ...tokenAliases,
};

type TokenContract = keyof typeof colorTokenContract;

export const colorStateContract = {
  primary: colorTokenContract,
  standard: colorTokenContract,
  info: colorTokenContract,
  success: colorTokenContract,
  warning: colorTokenContract,
  destructive: colorTokenContract,
  // Make an exception for overlay, which is stand-alone and not a scale
  overlay: "",
};

/**
 * Alias Radix color scales to color states. If the Radix color system changes,
 * this function will need to be updated. Relies on the fact that there are 12
 * steps in the Radix color scale and 12 colors/shades in each palette. Things will
 * get weird if this changes.
 */
function aliasStatesToColors(
  colorScale: Record<string, string>,
  colorName: string
): Record<RadixScale, string> {
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

/**
 * Merges the color scale with the token aliases. See important notes above in aliasStatesToColors.
 */
function getAliases(
{ colorScale, colorName }: { colorScale: Record<string, string>; colorName: string; }): Record<TokenContract, string> {
  const scale = aliasStatesToColors(colorScale, colorName);
  const additionalAliases = Object.entries(tokenAliases).reduce(
    (acc, [newAlias, scaleKey]) => {
      if (!(scaleKey in scale)) {
        throw new Error(`Token ${scaleKey} is not in the color scale.`);
      }
      return {
        ...acc,
        [newAlias]: scale[scaleKey],
      };
    },
    {} as Record<keyof typeof tokenAliases, string>
  );
  return {
    ...scale,
    ...additionalAliases,
  };
}

export const lightColorStateTheme = {
  primary: getAliases({ colorScale: pink, colorName: "pink" }), // anything other than gray, red, or yellow
  standard: getAliases({ colorScale: gray, colorName: "gray" }),
  info: getAliases({ colorScale: indigo, colorName: "indigo" }),
  success: getAliases({ colorScale: grass, colorName: "grass" }),
  warning: getAliases({ colorScale: yellow, colorName: "yellow" }),
  destructive: getAliases({ colorScale: red, colorName: "red" }), // errors or destructive actions
  overlay: blackA.blackA9,
};

// NOTE that the colorName property does not use the word "Dark"
export const darkColorStateTheme = {
  primary: getAliases({ colorScale: pinkDark, colorName: "pink" }), // anything other than gray, red or yellow
  standard: getAliases({ colorScale: grayDark, colorName: "gray" }),
  info: getAliases({ colorScale: indigoDark, colorName: "indigo" }),
  success: getAliases({ colorScale: grassDark, colorName: "grass" }),
  warning: getAliases({ colorScale: yellowDark, colorName: "yellow" }),
  destructive: getAliases({ colorScale: redDark, colorName: "red" }), // errors or destructive actions
  overlay: whiteA.whiteA9,
};

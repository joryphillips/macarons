import {
  blue,
  blueDark,
  red,
  redDark,
  grass,
  grassDark,
  gray,
  grayDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";

/** Alias grass to green */
const green = {
  green1: grass.grass1,
  green2: grass.grass2,
  green3: grass.grass3,
  green4: grass.grass4,
  green5: grass.grass5,
  green6: grass.grass6,
  green7: grass.grass7,
  green8: grass.grass8,
  green9: grass.grass9,
  green10: grass.grass10,
  green11: grass.grass11,
  green12: grass.grass12,
} as const;

/** Alias grassDark to greenDark */
const greenDark = {
  green1: grassDark.grass1,
  green2: grassDark.grass2,
  green3: grassDark.grass3,
  green4: grassDark.grass4,
  green5: grassDark.grass5,
  green6: grassDark.grass6,
  green7: grassDark.grass7,
  green8: grassDark.grass8,
  green9: grassDark.grass9,
  green10: grassDark.grass10,
  green11: grassDark.grass11,
  green12: grassDark.grass12,
} as const;

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
  error: colorTokenContract,
  destructive: colorTokenContract,
};

/**
 * Alias Radix color scales to color states. If the Radix color system changes,
 * this function will need to be updated.
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
 * Merges the color scale with the token aliases.
 */
function getAliases(
  colorScale: Record<string, string>,
  colorName: string
): Record<TokenContract, string> {
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
  primary: getAliases(green, "green"), // anything other than gray, red, or yellow
  standard: getAliases(gray, "gray"),
  info: getAliases(blue, "blue"),
  success: getAliases(green, "green"),
  warning: getAliases(yellow, "yellow"),
  error: getAliases(red, "red"),
  destructive: getAliases(red, "red"), // same as error
};

// NOTE that the property names do not have the word "Dark" in them
export const darkColorStateTheme = {
  primary: getAliases(greenDark, "green"), // anything other than gray, red or yellow
  standard: getAliases(grayDark, "gray"),
  info: getAliases(blueDark, "blue"),
  success: getAliases(greenDark, "green"),
  warning: getAliases(yellowDark, "yellow"),
  error: getAliases(redDark, "red"),
  destructive: getAliases(redDark, "red"), // same as error
};

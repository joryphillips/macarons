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

export const lightPalette = {
  ...yellow,
  ...gray,
  ...green,
  ...blue,
  ...red,
} as const;

export const darkPalette = {
  ...yellowDark,
  ...grayDark,
  ...greenDark,
  ...blueDark,
  ...redDark,
} as const;

/**
 *  https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
 */
export const colorTokenContract = {
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
  /** Radix Color Scale Step 11: Low-contrast text */
  lowContrastText: "",
  /** Radix Color Scale Step 12: High-contrast text */
  highContrastText: "",
} as const;

type ColorToken = keyof typeof colorTokenContract;

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
function aliasColorToTokens(
  colorScale: Record<string, string>,
  colorName: string
): Record<ColorToken, string> {
  const colorScaleKeys = Object.keys(colorScale);
  const colorTokens = Object.keys(
    colorTokenContract
  ) as (keyof typeof colorTokenContract)[];
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
  }, {} as Record<ColorToken, string>);
}

export const lightColorStateTheme = {
  primary: aliasColorToTokens(green, "green"), // anything other than gray, red, or yellow
  standard: aliasColorToTokens(gray, "gray"),
  info: aliasColorToTokens(blue, "blue"),
  success: aliasColorToTokens(green, "green"),
  warning: aliasColorToTokens(yellow, "yellow"),
  error: aliasColorToTokens(red, "red"),
  destructive: aliasColorToTokens(red, "red"), // same as error
};

// NOTE that the property names do not have the word "Dark" in them
export const darkColorStateTheme = {
  primary: aliasColorToTokens(greenDark, "green"), // anything other than gray, red or yellow
  standard: aliasColorToTokens(grayDark, "gray"),
  info: aliasColorToTokens(blueDark, "blue"),
  success: aliasColorToTokens(greenDark, "green"),
  warning: aliasColorToTokens(yellowDark, "yellow"),
  error: aliasColorToTokens(redDark, "red"),
  destructive: aliasColorToTokens(redDark, "red"), // same as error
};

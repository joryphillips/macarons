import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import {
  colorStateContract,
  darkColorStateTheme,
  lightColorStateTheme,
} from "./colors";
import { boxShadow } from "./shadows";
import { spacing } from "./spacing";
import { fonts, weight, typescale } from "./typography";
import { contentSize } from "./contentSize";
import { border } from "./border";
import { zIndex } from "./zIndex";

export const vars = createThemeContract({
  colors: colorStateContract,
  fonts: "",
  typescale: {
    jumbo: "",
    "2xl": "",
    xl: "",
    lg: "",
    md: "",
    sm: "",
    xs: "",
  },
  weight: {
    thin: "",
    extraLight: "",
    light: "",
    regular: "",
    medium: "",
    semiBold: "",
    bold: "",
    extraBold: "",
    black: "",
  },
  spacing: {
    auto: "auto",
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "",
    10: "",
    12: "",
  },
  boxShadow: {
    inner: "",
    none: "",
    sm: "",
    base: "",
    md: "",
    lg: "",
    xl: "",
    "2xl": "",
  },
  contentSize: {
    "4xs": "",
    "3xs": "",
    "2xs": "",
    xs: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    "2xl": "",
    "100%": "",
    "100vw": "",
    "100vh": "",
    auto: "",
    fit: "",
    min: "",
    max: "",
    prose: "",
  },
  border: {
    width: {
      none: "",
      standard: "",
      double: "",
      large: "",
      xlarge: "",
    },
    radius: {
      none: "",
      xs: "",
      sm: "",
      md: "",
      lg: "",
      full: "",
    },
  },
  zIndex: {
    base: "",
    topBar: "",
    sideBar: "",
    overlay: "",
    overlayContent: "",
    dropdowns: "",
    popover: "",
    tooltip: "",
  },
  transitionPropertyCommon: "",
});

const commonVars = {
  fonts,
  typescale,
  weight,
  spacing,
  boxShadow,
  contentSize,
  border,
  zIndex,
  transitionPropertyCommon:
    "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform",
};

createGlobalTheme(":root", vars, {
  colors: lightColorStateTheme,
  ...commonVars,
});

createGlobalTheme(":root.dark", vars, {
  colors: darkColorStateTheme,
  ...commonVars,
});

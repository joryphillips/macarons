import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import {
  colorStateContract,
  darkColorStateTheme,
  lightColorStateTheme,
} from "./colors";
import { boxShadow } from "./shadows";
import { spacing } from "./spacing";
import { fonts, weight } from "./typography";

export const vars = createThemeContract({
  colors: colorStateContract,
  fonts: "",
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
    none: "",
    xs: "",
    sm: "",
    base: "",
    md: "",
    lg: "",
    xl: "",
  },
  contentWidth: {
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
  transitionPropertyCommon: "",
});

const commonVars = {
  fonts,
  weight,
  spacing,
  boxShadow,
  contentWidth: {
    "4xs": "8rem",
    "3xs": "12rem",
    "2xs": "20rem",
    xs: "30rem",
    sm: "36rem",
    md: "48rem",
    lg: "64rem",
    xl: "72rem",
    "2xl": "80rem",
    "100%": "100%",
    auto: "auto",
    fit: "fit-content",
    min: "min-content",
    max: "max-content",
    prose: "65ch",
  },
  border: {
    width: {
      none: "0",
      standard: "1px",
      double: "2px",
      large: "4px",
      xlarge: "8px",
    },
    radius: {
      none: "0",
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      full: "9999px",
    },
  },
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

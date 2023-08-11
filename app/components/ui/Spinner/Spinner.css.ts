import { styleVariants } from "@vanilla-extract/css";

export const spinnerVariables = {
  xs: { width: "1rem", height: "1rem" },
  sm: { width: "1.5rem", height: "1.5rem" },
  md: { width: "2rem", height: "2rem" },
  lg: { width: "3rem", height: "3rem" },
  xl: { width: "4rem", height: "4rem" },
};

export const spinnerSizes = styleVariants(spinnerVariables);

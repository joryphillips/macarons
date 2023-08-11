import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const checkboxBase = style({
  height: "1rem",
  width: "1rem",
  borderRadius: "0.125rem",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.colors.standard.elementBorder,
  backgroundColor: vars.colors.standard.elementBackground,
  transitionProperty: vars.transitionPropertyCommon,
  transitionDuration: "200ms",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.standard.hoveredElementBackground,
      borderColor: vars.colors.standard.hoveredElementBorder,
    },
    "&:focus": {
      outline: "none",
      borderColor: "transparent",
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${vars.colors.standard.hoveredElementBorder}`,
    },
    "&:checked": {
      backgroundColor: vars.colors.standard.solidBackground,
      borderColor: vars.colors.standard.solidBackground,
    },
    "&[aria-checked=true]": {
      backgroundColor: vars.colors.standard.solidBackground,
      borderColor: vars.colors.standard.solidBackground,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

export const checkboxStyles = styleVariants({
  default: [checkboxBase],
  primary: [
    checkboxBase,
    {
      backgroundColor: vars.colors.primary.elementBackground,
      borderColor: vars.colors.primary.elementBorder,
      color: vars.colors.primary.lowContrastText,
      selectors: {
        "&:hover": {
          backgroundColor: vars.colors.primary.hoveredElementBackground,
          borderColor: vars.colors.primary.hoveredElementBorder,
          color: vars.colors.primary.highContrastText,
        },
        "&[aria-checked=true]": {
          backgroundColor: vars.colors.primary.solidBackground,
          borderColor: vars.colors.primary.solidBackground,
          color: vars.colors.primary.appBackground,
        },
        "&:checked": {
          backgroundColor: vars.colors.primary.solidBackground,
          borderColor: vars.colors.primary.solidBackground,
          color: vars.colors.primary.appBackground,
        },
        "&&[aria-checked]:hover": {
          backgroundColor: vars.colors.primary.hoveredSolidBackground,
          borderColor: vars.colors.primary.hoveredSolidBackground,
        },
        "&:focus-visible": {
          borderColor: "transparent",
          boxShadow: `0 0 0 2px ${vars.colors.primary.hoveredSolidBackground}`,
        },
      },
    },
  ],
});

export const checkStyle = style({
  height: "1.25rem",
  width: "1.25rem",
});

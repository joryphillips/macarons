import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";

const space = vars.spacing;
export type Space = keyof typeof space;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    small: { "@media": `screen and (min-width: ${breakpoints.small}px)` },
    tablet: { "@media": `screen and (min-width: ${breakpoints.tablet}px)` },
    desktop: { "@media": `screen and (min-width: ${breakpoints.desktop}px)` },
  },
  defaultCondition: "mobile",
  properties: {
    borderBottomLeftRadius: vars.border.radius,
    borderBottomRightRadius: vars.border.radius,
    borderRadius: vars.border.radius,
    borderTopLeftRadius: vars.border.radius,
    borderTopRightRadius: vars.border.radius,
    boxShadow: vars.boxShadow,

    top: vars.spacing,
    bottom: vars.spacing,
    left: vars.spacing,
    right: vars.spacing,

    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    marginTop: space,

    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,

    height: ["auto", "100%", "inherit", "100vh"],
    width: vars.contentWidth,
    maxWidth: vars.contentWidth,
    minWidth: vars.contentWidth,
    rotate: ["0deg", "45deg", "90deg", "135deg", "180deg", "225deg", "270deg", "315deg"],

    opacity: [0, 1],

    zIndex: [-1, 0, 1],
    position: ["absolute", "relative", "fixed", "sticky"],
    display: ["none", "block", "inline", "inline-block", "inline-flex", "flex", "grid"],

    flexShrink: [0],
    flexGrow: [0, 1],
    alignContent: ["flex-start", "center", "flex-end", "stretch"],
    alignItems: ["baseline", "flex-start", "center", "flex-end", "stretch"],
    justifyContent: [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-evenly",
    ],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],

    gap: space,

    overflow: ["hidden", "auto", "scroll", "visible"],
    overflowX: ["hidden", "auto", "scroll", "visible"],
    overflowY: ["hidden", "auto", "scroll", "visible"],

    textAlign: ["left", "center", "right"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    inset: ["top", "bottom", "left", "right"],
  },
});

const backgroundColors =  {
  ...vars.colors.standard,

  primaryAppBackground: vars.colors.primary.appBackground,
  primarySubtleBackground: vars.colors.primary.subtleBackground,
  primaryElementBackground: vars.colors.primary.elementBackground,
  primaryHoveredElementBackground: vars.colors.primary.hoveredElementBackground,
  primaryActiveElementBackground: vars.colors.primary.activeElementBackground,
  primarySolidBackground: vars.colors.primary.solidBackground,
  primaryHoveredSolidBackground: vars.colors.primary.hoveredSolidBackground,
  
  infoAppBackground: vars.colors.info.appBackground,
  infoSubtleBackground: vars.colors.info.subtleBackground,
  infoElementBackground: vars.colors.info.elementBackground,
  infoHoveredElementBackground: vars.colors.info.hoveredElementBackground,
  infoActiveElementBackground: vars.colors.info.activeElementBackground,
  infoSolidBackground: vars.colors.info.solidBackground,
  infoHoveredSolidBackground: vars.colors.info.hoveredSolidBackground,
  
  successAppBackground: vars.colors.success.appBackground,
  successSubtleBackground: vars.colors.success.subtleBackground,
  successElementBackground: vars.colors.success.elementBackground,
  successHoveredElementBackground: vars.colors.success.hoveredElementBackground,
  successActiveElementBackground: vars.colors.success.activeElementBackground,
  successSolidBackground: vars.colors.success.solidBackground,
  successHoveredSolidBackground: vars.colors.success.hoveredSolidBackground,
  
  warningAppBackground: vars.colors.warning.appBackground,
  warningSubtleBackground: vars.colors.warning.subtleBackground,
  warningElementBackground: vars.colors.warning.elementBackground,
  warningHoveredElementBackground: vars.colors.warning.hoveredElementBackground,
  warningActiveElementBackground: vars.colors.warning.activeElementBackground,
  warningSolidBackground: vars.colors.warning.solidBackground,
  warningHoveredSolidBackground: vars.colors.warning.hoveredSolidBackground,
  
  destructiveAppBackground: vars.colors.destructive.appBackground,
  destructiveSubtleBackground: vars.colors.destructive.subtleBackground,
  destructiveElementBackground: vars.colors.destructive.elementBackground,
  destructiveHoveredElementBackground:
    vars.colors.destructive.hoveredElementBackground,
  destructiveActiveElementBackground: vars.colors.destructive.activeElementBackground,
  destructiveSolidBackground: vars.colors.destructive.solidBackground,
  destructiveHoveredSolidBackground: vars.colors.destructive.hoveredSolidBackground,

  // Included for demonstrative purposes in color docs; these ordinarily do not need be included as background colors
  primaryLowContrastText: vars.colors.primary.lowContrastText,
  primaryHighContrastText: vars.colors.primary.highContrastText,
  infoLowContrastText: vars.colors.info.lowContrastText,
  infoHighContrastText: vars.colors.info.highContrastText,
  successLowContrastText: vars.colors.success.lowContrastText,
  successHighContrastText: vars.colors.success.highContrastText,
  warningLowContrastText: vars.colors.warning.lowContrastText,
  warningHighContrastText: vars.colors.warning.highContrastText,
  destructiveLowContrastText: vars.colors.destructive.lowContrastText,
  destructiveHighContrastText: vars.colors.destructive.highContrastText,
  primarySubtleBorder: vars.colors.primary.subtleBorder,
  primaryElementBorder: vars.colors.primary.elementBorder,
  primaryHoveredElementBorder: vars.colors.primary.hoveredElementBorder,
  infoSubtleBorder: vars.colors.info.subtleBorder,
  infoElementBorder: vars.colors.info.elementBorder,
  infoHoveredElementBorder: vars.colors.info.hoveredElementBorder,
  successSubtleBorder: vars.colors.success.subtleBorder,
  successElementBorder: vars.colors.success.elementBorder,
  successHoveredElementBorder: vars.colors.success.hoveredElementBorder,
  warningSubtleBorder: vars.colors.warning.subtleBorder,
  warningElementBorder: vars.colors.warning.elementBorder,
  warningHoveredElementBorder: vars.colors.warning.hoveredElementBorder,
  destructiveSubtleBorder: vars.colors.destructive.subtleBorder,
  destructiveElementBorder: vars.colors.destructive.elementBorder,
  destructiveHoveredElementBorder:
    vars.colors.destructive.hoveredElementBorder,
};

const unresponsiveProperties = defineProperties({
  properties: {
    cursor: ["pointer", "default", "text", "grab", "grabbing", "disabled"],
    pointerEvents: ["none", "auto"],
    borderWidth: vars.border.width,
    borderBottomWidth: vars.border.width,
    borderStyle: ["none", "solid"],
    borderBottomStyle: ["none", "solid"],
    fontWeight: vars.weight,
    background: backgroundColors,
    backgroundColor: backgroundColors,
    color: {
      ...vars.colors.standard,
      primaryLowContrastText: vars.colors.primary.lowContrastText,
      primaryHighContrastText: vars.colors.primary.highContrastText,
      infoLowContrastText: vars.colors.info.lowContrastText,
      infoHighContrastText: vars.colors.info.highContrastText,
      successLowContrastText: vars.colors.success.lowContrastText,
      successHighContrastText: vars.colors.success.highContrastText,
      warningLowContrastText: vars.colors.warning.lowContrastText,
      warningHighContrastText: vars.colors.warning.highContrastText,
      destructiveLowContrastText: vars.colors.destructive.lowContrastText,
      destructiveHighContrastText: vars.colors.destructive.highContrastText,
    },
    borderColor: {
      ...vars.colors.standard,
      primarySubtleBorder: vars.colors.primary.subtleBorder,
      primaryElementBorder: vars.colors.primary.elementBorder,
      primaryHoveredElementBorder: vars.colors.primary.hoveredElementBorder,
      infoSubtleBorder: vars.colors.info.subtleBorder,
      infoElementBorder: vars.colors.info.elementBorder,
      infoHoveredElementBorder: vars.colors.info.hoveredElementBorder,
      successSubtleBorder: vars.colors.success.subtleBorder,
      successElementBorder: vars.colors.success.elementBorder,
      successHoveredElementBorder: vars.colors.success.hoveredElementBorder,
      warningSubtleBorder: vars.colors.warning.subtleBorder,
      warningElementBorder: vars.colors.warning.elementBorder,
      warningHoveredElementBorder: vars.colors.warning.hoveredElementBorder,
      destructiveSubtleBorder: vars.colors.destructive.subtleBorder,
      destructiveElementBorder: vars.colors.destructive.elementBorder,
      destructiveHoveredElementBorder:
        vars.colors.destructive.hoveredElementBorder,
    },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

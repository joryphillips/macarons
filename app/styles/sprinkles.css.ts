import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";

const space = vars.spacing;
export type Space = keyof typeof space;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
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

    opacity: [0, 1],

    zIndex: [-1, 0, 1],
    position: ["absolute", "relative", "fixed", "sticky"],
    display: ["none", "block", "inline", "inline-block", "inline-flex", "flex"],

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
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    flexWrap: ["wrap", "nowrap"],
    top: vars.spacing,
    bottom: vars.spacing,
    left: vars.spacing,
    right: vars.spacing,
    cursor: ["pointer", "default", "text", "grab", "grabbing", "disabled"],
    pointerEvents: ["none", "auto"],
    borderWidth: vars.border.width,
    borderStyle: ["none", "solid"],
    fontWeight: vars.weight,
    background: vars.colors.standard,
    backgroundColor: vars.colors.standard,
    color: {
      ...vars.colors.standard,
      standardLowContrast: vars.colors.standard.lowContrastText,
      standardHighContrast: vars.colors.standard.highContrastText,
      primaryLowContrast: vars.colors.primary.lowContrastText,
      primaryHighContrast: vars.colors.primary.highContrastText,
      infoLowContrast: vars.colors.info.lowContrastText,
      infoHighContrast: vars.colors.info.highContrastText,
      successLowContrast: vars.colors.success.lowContrastText,
      successHighContrast: vars.colors.success.highContrastText,
      warningLowContrast: vars.colors.warning.lowContrastText,
      warningHighContrast: vars.colors.warning.highContrastText,
      destructiveLowContrast: vars.colors.destructive.lowContrastText,
      destructiveHighContrast: vars.colors.destructive.highContrastText,
    },
    borderColor: {
      ...vars.colors.standard,
      standardSubtleBorder: vars.colors.standard.subtleBorder,
      standardElementBorder: vars.colors.standard.elementBorder,
      standardHoveredElementBorder: vars.colors.standard.hoveredElementBorder,
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
  shorthands: {
    inset: ["top", "bottom", "left", "right"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

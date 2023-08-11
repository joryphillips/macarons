import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const commandPrimitive = style({
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: vars.border.radius.sm,
  backgroundColor: vars.colors.standard.appBackground,
});

export const commandDialogContent = style({
  overflow: "hidden",
  padding: 0,
  boxShadow: vars.boxShadow.md,
  // TODO: figure out if we need this
  // selectors: {
  //   [`&[data-${vars.componentName}-overlay]`]: {
  //     backgroundColor: vars.colorMap.red100,
  //   },
  // },
});

export const commandInput = style({
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${vars.colors.standard.subtleBorder}`,
  padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
});

export const commandInputSearch = style({
  marginRight: vars.spacing[2],
  height: vars.spacing[4],
  width: vars.spacing[4],
  flexShrink: 0,
  opacity: 0.5,
});

export const commandPrimitiveInput = style({
  boxSizing: "border-box",
  display: "flex",
  height: "40px",
  width: "100%",
  backgroundColor: "transparent",
  paddingTop: vars.spacing["3"],
  paddingBottom: vars.spacing["3"],
  // fontSize: vars.text.small.desktop.fontSize,
  fontWeight: vars.weight.regular,
  outline: "none",
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    "&::placeholder": {
      color: vars.colors.standard.lowContrastText,
    },
  },
});

export const commandPrimitiveList = style({
  maxHeight: "300px",
  overflowY: "auto",
  overflowX: "hidden",
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
});

export const commandPrimitiveListHeightVariants = styleVariants({
  content: {
    // 216 = header + title + input + spacing
    maxHeight: "calc(100vh - 216px)",
  },
  auto: {
    maxHeight: "auto",
  },
});

export const commandPrimitiveEmpty = style({
  paddingTop: vars.spacing["6"],
  paddingBottom: vars.spacing["6"],
  textAlign: "center",
  // fontSize: vars.text.small.desktop.fontSize,
});

export const commandPrimitiveGroup = style({
  overflow: "hidden",
  paddingTop: vars.spacing["3"],
  paddingBottom: vars.spacing["3"],
  paddingLeft: vars.spacing["2"],
  paddingRight: vars.spacing["2"],
  color: vars.colors.standard.highContrastText,
  selectors: {
    "&[data-parent-route]": {
      opacity: 0.8,
    },
  },
});

export const commandPrimitiveDivider = style({
  marginLeft: `-${vars.spacing["1"]}`,
  marginRight: `-${vars.spacing["1"]}`,
  height: "1px",
  backgroundColor: vars.colors.standard.subtleBorder,
});

export const commandPrimitiveItem = style({
  position: "relative",
  display: "flex",
  cursor: "pointer",
  userSelect: "none",
  alignItems: "center",
  borderRadius: vars.border.radius.sm,
  paddingTop: vars.spacing[2],
  paddingBottom: vars.spacing[2],
  paddingLeft: vars.spacing[2],
  paddingRight: vars.spacing[2],
  // fontSize: vars.text.small.desktop.fontSize,
  fontWeight: vars.weight.regular,
  outline: "none",
  selectors: {
    "&[data-selected]": {
      backgroundColor: vars.colors.standard.activeElementBackground,
    },
    "&[aria-disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
});

export const commandPrimitiveItemShortcut = style({
  marginLeft: "auto",
  // fontSize: vars.text.xsmall.desktop.fontSize,
  letterSpacing: "0.25em",
  color: vars.colors.standard.lowContrastText,
});

globalStyle("[cmdk-group-heading]", {
  userSelect: "none",
  fontSize: "0.875rem",
  color: vars.colors.standard.highContrastText,
  padding: vars.spacing[2],
  display: "flex",
  alignItems: "center",
});

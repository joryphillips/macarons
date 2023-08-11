import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const popoverTriggerButton = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: vars.weight.regular,
});

export const popoverTriggerButtonIcon = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "2.5rem",
  opacity: 0.5,
  zIndex: 0,
  pointerEvents: "none",
});

export const popoverClearButton = style({
  padding: vars.spacing[1],
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.standard.hoveredElementBackground,
    },
  },
});

export const popoverContent = style({
  // TODO: figure out how to use width: 100% instead. See Popover.css.ts
  width: "404px",
  padding: 0,
});

export const commandGroupCheckIcon = style({
  marginRight: vars.spacing[2],
  height: vars.spacing[4],
  width: vars.spacing[4],
});

export const commandGroupCheckIconActive = style({
  opacity: 1,
});

export const commandGroupCheckIconInactive = style({
  opacity: 0,
});

export const commandGroup = style({
  maxHeight: "250px",
  overflowY: "auto",
});

import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import { contentShow } from "~/theme/animations";
import { breakpoints } from "~/theme/breakpoints";

export const portal = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile})`]: {
      alignItems: "center",
    },
  },
  zIndex: 50,
});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
  backdropFilter: "blur(1px)",
  transition: `opacity 150ms ease-in-out`,
  animation: `${overlayShow} 150ms cubic-bezier(0.4, 0, 1, 1)`,
});

export const content = style({
  backgroundColor: vars.colors.standard.elementBackground,
  borderRadius: vars.border.radius.sm,
  boxShadow: vars.boxShadow.md,
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: vars.contentWidth.md,
  maxHeight: "85vh",
  padding: vars.spacing[8],
  animationName: keyframes(contentShow),
  animationDuration: "150ms",
  animationFillMode: "both",
  animationTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

export const footer = style({
  display: "flex",
  width: "100%",
  flexDirection: "column-reverse",
  "@media": {
    [`(min-width: ${breakpoints.small}px)`]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: vars.spacing[2],
    },
  },
});

import { keyframes, style } from "@vanilla-extract/css";
import {
  Timing,
  fadeIn,
  fadeOut,
} from "~/theme/animations";
import { breakpoints } from "~/theme/breakpoints";
import { vars } from "~/theme/theme.css";

export const dialogOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: vars.colors.overlay,
  selectors: {
    "&[data-state=closed]": {
      animation: `${keyframes(fadeOut)} 100ms ${Timing.easeOut}`,
    },
    "&[data-state=open]": {
      animationName: `${keyframes(fadeIn)} 100ms ${Timing.easeInOut}`,
    },
  },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const mobileContentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, 0) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const dialogContent = style({
  position: "fixed",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  maxWidth: vars.contentWidth.sm,
  borderRadius: vars.border.radius.sm,
  backgroundColor: vars.colors.standard.subtleBackground,
  padding: vars.spacing[6],
  animationName: `${mobileContentShow}`, 
  animationDuration: "150ms",
  animationTimingFunction: Timing.easeInOut,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile})`]: {
      width: "85vw",
      padding: vars.spacing[4],
      animationName: `${contentShow}`,
    },
  },
});

export const dialogCloseIconButton = style({
  position: "absolute",
  top: vars.spacing[4],
  right: vars.spacing[4],
  borderRadius: vars.border.radius.sm,
  borderWidth: vars.border.width.standard,
  borderStyle: "solid",
  borderColor: "transparent",
  outlineColor: "transparent",
  opacity: 0.7,
  transition: "opacity 150ms ease-in-out",
  selectors: {
    "&:hover, &:focus-visible": {
      opacity: 1,
      borderColor: vars.colors.standard.hoveredElementBorder,
    },
  },
});

export const dialogCloseIcon = style({
  width: vars.spacing["4"],
  height: vars.spacing["4"],
});

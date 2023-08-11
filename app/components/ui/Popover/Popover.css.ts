import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";
import {
  slideInFromBottom2,
  slideInFromLeft2,
  slideInFromRight2,
  slideInFromTop2,
} from "~/theme/animations";

// TODO: figure out how to get this to work. likely need to not use
// PopoverPrimitive.Portal so that position: absolute is applied.
// globalStyle("[data-radix-popper-content-wrapper]", {
//   position: "absolute!important",
//   width: "100%",
// });

export const popup = style({
  zIndex: 50,
  width: "100%",
  borderRadius: vars.border.radius.sm,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.colors.standard.subtleBorder,
  padding: vars.spacing[4],
  boxShadow: vars.boxShadow.md,
  outline: "none",
  selectors: {
    '&[data-side="right"]': {
      animation: `${keyframes(
        slideInFromLeft2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="left"]': {
      animation: `${keyframes(
        slideInFromRight2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="bottom"]': {
      animation: `${keyframes(
        slideInFromTop2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '&[data-side="top"]': {
      animation: `${keyframes(
        slideInFromBottom2
      )} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  },
});

// app/theme/shadows.ts

const shadowOne = "rgba(45, 55, 72, 0.05)";
const shadowTwo = "rgba(45, 55, 72, 0.1)";

export const boxShadow = {
  inner: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)`,
  none: `0 0 #0000`,
  sm: `0 1px 2px 0 ${shadowOne}`,
  base: `0 1px 3px 0 ${shadowTwo}, 0 1px 2px -1px ${shadowTwo}`,
  md: `0 4px 6px -1px ${shadowTwo}, 0 2px 4px -2px ${shadowTwo}`,
  lg: `0 10px 15px -3px ${shadowTwo}, 0 4px 6px -4px ${shadowTwo}`,
  xl: `0 20px 25px -5px ${shadowTwo}, 0 8px 10px -6px ${shadowTwo}`,
  "2xl": `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
};
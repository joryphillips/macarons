import { style as resetStyles } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const base = resetStyles({
  // Prevent padding and border from affecting element width
  boxSizing: "border-box",

  // Remove margin and padding in all browsers
  margin: 0,
  padding: 0,

  // Allow adding border to element by just adding borderWidth
  borderColor: vars.colors.standard.elementBorder,
  borderStyle: "solid",
  borderWidth: 0,

  color: "currentcolor",
  fontSize: "100%",
  fontFamily: "inherit",
  verticalAlign: "baseline",
  selectors: {
    "&:focus-visible": {
      outline: "none",
    },
  },
});

export const button = resetStyles({
  background: 0,
  border: 0,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
});

// HTML5 display-role reset for older browsers
const block = resetStyles({
  boxSizing: "border-box",
  display: "block",
});

const body = resetStyles({
  lineHeight: 1,
});

const list = resetStyles({
  listStyle: "none",
});

const quote = resetStyles({
  quotes: "none",
  selectors: {
    "&:before, &:after": {
      content: "''",
    },
  },
});

const table = resetStyles({
  borderCollapse: "collapse",
  borderSpacing: 0,
});

const appearance = resetStyles({
  appearance: "none",
});

const field = resetStyles([
  block,
  appearance,
  resetStyles({
    outline: "none",
    "::placeholder": {
      color: vars.colors.standard.lowContrastText,
      opacity: "1",
    },
  }),
]);

// Custom reset rules
const mark = resetStyles({
  backgroundColor: "transparent",
  color: "inherit",
});

const select = resetStyles([
  field,
  resetStyles({
    selectors: {
      "&::-ms-expand": {
        display: "none",
      },
    },
  }),
]);

export const input = resetStyles([
  field,
  resetStyles({
    selectors: {
      // Hide browser increment/decrement buttons
      "&::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
      },
      // Hide browser clear input button
      "&::-ms-clear": {
        display: "none",
      },
      "&::-webkit-search-cancel-button": {
        WebkitAppearance: "none",
      },
    },
  }),
]);

const a = resetStyles({
  textDecoration: "none",
  color: "inherit",
});

export const element = {
  article: block,
  aside: block,
  button,
  details: block,
  div: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  textarea: field,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  input,
} as const;

export type Element = keyof typeof element;

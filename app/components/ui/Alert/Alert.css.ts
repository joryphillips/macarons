import { styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const { colors } = vars;
const { info, success, warning, error } = colors;

export const alertStyles = styleVariants({
  info: [
    {
      backgroundColor: info.elementBackground,
      color: info.lowContrastText,
      borderColor: info.elementBorder,
    },
  ],
  success: [
    {
      backgroundColor: success.elementBackground,
      color: success.lowContrastText,
      borderColor: success.elementBorder,
    },
  ],
  warning: [
    {
      backgroundColor: warning.elementBackground,
      color: warning.lowContrastText,
      borderColor: warning.elementBorder,
    },
  ],
  error: [
    {
      backgroundColor: error.elementBackground,
      color: error.lowContrastText,
      borderColor: error.elementBorder,
    },
  ],
});

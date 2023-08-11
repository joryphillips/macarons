import { styleVariants } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

const { colors } = vars;
const { info, success, warning, error } = colors;

export const alertIconStyles = styleVariants({
  info: [
    {
      backgroundColor: info.elementBackground,
      color: info.lowContrastText,
    },
  ],
  success: [
    {
      backgroundColor: success.elementBackground,
      color: success.lowContrastText,
    },
  ],
  warning: [
    {
      backgroundColor: warning.elementBackground,
      color: warning.lowContrastText,
    },
  ],
  error: [
    {
      backgroundColor: error.elementBackground,
      color: error.lowContrastText,
    },
  ],
});

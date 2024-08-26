import { FC } from "react";

import ReactHighlightSyntax, {
  Language,
  Theme,
  CopyBtnTheme,
} from "react-highlight-syntax";
import { useSpecifiedTheme } from "../ThemeProvider/ThemeProvider";
import { Box } from "../ui";
import { syntaxHighlighterContainer } from "./SyntaxHighlighter.css";

type Props = {
  language?: Language;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
};

export const SyntaxHighlighter: FC<Props> = (props) => {
  const { language = "TypeScript", copy = true, children } = props;
  const { specifiedTheme } = useSpecifiedTheme();

  const theme = specifiedTheme === "dark" ? "AtomOneDark" : "AtomOneLight";
  const copyBtnTheme = specifiedTheme === "dark" ? "Dark" : "Light";

  return (
    <Box className={syntaxHighlighterContainer}>
      <ReactHighlightSyntax
        language={language}
        theme={theme}
        copy={copy}
        copyBtnTheme={copyBtnTheme}
      >
        {children}
      </ReactHighlightSyntax>
    </Box>
  );
};

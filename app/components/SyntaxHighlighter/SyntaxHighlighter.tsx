import { FC } from "react";

import { Highlight, themes } from "prism-react-renderer";
import { useSpecifiedTheme } from "../ThemeProvider/ThemeProvider";
import {
  containerStyles,
  lineStyles,
  lineNumberStyles,
} from "./SyntaxHighlighter.css";
import clsx from "clsx";

type Props = {
  language?: string;
  showLineNumbers?: boolean;
  children: string;
};

export const SyntaxHighlighter: FC<Props> = (props) => {
  const { language = "tsx", showLineNumbers = false, children } = props;
  const { specifiedTheme } = useSpecifiedTheme();

  const theme = specifiedTheme === "dark" ? themes.oneDark : themes.oneLight;

  return (
    <Highlight language={language} theme={theme} code={children}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(className, containerStyles, lineStyles)}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {showLineNumbers && (
                <span className={lineNumberStyles}>{i + 1}</span>
              )}
              {line.map(
                (token, key) =>
                  !(i === tokens.length - 1 && token.empty) && (
                    <span key={key} {...getTokenProps({ token })} />
                  )
              )}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

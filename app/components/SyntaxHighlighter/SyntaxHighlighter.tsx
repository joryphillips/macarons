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
  startLineNumber?: number;
  endLineNumber?: number;
  trimToReactReturnValue?: boolean;
};

const reactReturnStringStart = "return (";
const reactReturnStringEnd = ");";

function getLineNumbersFromString(code: string) {
  const lines = code.split("\n");
  // Add 2 to get the line number (not index) of the line following the return statement
  const startReactLine =
    lines.findIndex((line) => line.includes(reactReturnStringStart)) + 2;
  // The index of reactReturnStringEnd equals the line number of the previous line
  const endReactLine = lines.findIndex((line) =>
    line.includes(reactReturnStringEnd)
  );
  return { startReactLine, endReactLine };
}

function showLine(
  current: number,
  start: number | undefined,
  end: number | undefined
) {
  if (start !== undefined && start > -1 && current + 1 < start) return false;
  if (end !== undefined && end > -1 && current + 1 > end) return false;
  return true;
}

export const SyntaxHighlighter: FC<Props> = (props) => {
  const {
    language = "tsx",
    showLineNumbers = false,
    children,
    startLineNumber,
    endLineNumber,
    trimToReactReturnValue,
  } = props;
  const { specifiedTheme } = useSpecifiedTheme();

  const theme = specifiedTheme === "dark" ? themes.oneDark : themes.oneLight;

  const { startReactLine, endReactLine } = trimToReactReturnValue
    ? getLineNumbersFromString(children)
    : { startReactLine: undefined, endReactLine: undefined };

  const start = startLineNumber ?? startReactLine;
  const end = endLineNumber ?? endReactLine;

  return (
    <Highlight language={language} theme={theme} code={children}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(className, containerStyles, lineStyles)}
          style={style}
        >
          {tokens.map(
            (line, i) =>
              showLine(i, start, end) && (
                <div key={i} {...getLineProps({ line })}>
                  {showLineNumbers && (
                    <span className={lineNumberStyles}>{i + 1}</span>
                  )}
                  {line.map((token, key) => {
                    const initialIndent =
                      start !== undefined && start > 0
                        ? tokens[start - 1][0].content.length
                        : undefined;

                    // if initialIndent is > 0, reduce the indent of this and
                    // all following lines by that amount
                    const indentContent =
                      key === 0 &&
                      initialIndent !== undefined &&
                      initialIndent > 0
                        ? token.content.slice(initialIndent)
                        : token.content;
                    const adjustedToken = { ...token, content: indentContent };

                    return (
                      !(i === tokens.length - 1 && token.empty) && (
                        <span
                          key={key}
                          {...getTokenProps({ token: adjustedToken })}
                        />
                      )
                    );
                  })}
                </div>
              )
          )}
        </pre>
      )}
    </Highlight>
  );
};

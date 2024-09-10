import { FC } from "react";

import { Highlight, themes } from "prism-react-renderer";
import { useSpecifiedTheme } from "../ThemeProvider/ThemeProvider";
import {
  containerStyles,
  lineStyles,
  lineNumberStyles,
} from "./SyntaxHighlighter.css";
import clsx from "clsx";
import { Box, BoxProps } from "../ui";

type Props = {
  language?: string;
  showLineNumbers?: boolean;
  children: string;
  startLineNumber?: number;
  endLineNumber?: number;
  trimToReactReturnValue?: boolean;
};

// NOTE: these are quick & dirty regex checks for a common React pattern.
// For a more robust solution use specific comment markers.

/**
 * Regex to check for "return (" as the only content of a line (ignoring leading whitespace)
 */
const reactReturnStringStart = /^[ \t]*return \($/;
/**
 * Regex to check for ");" as the only content of a line (ignoring leading whitespace)
 */
const reactReturnStringEnd = /^[ \t]*\);$/;

function getLineNumbersFromString(code: string) {
  const lines = code.split("\n");
  // Add 2 to get the line number (not index) of the line following the return statement
  const startReactLine =
    lines.findIndex((line) => reactReturnStringStart.test(line)) + 2;
  // The index of reactReturnStringEnd equals the line number of the previous line
  const endReactLine = lines.findIndex((line) =>
    reactReturnStringEnd.test(line)
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

export const SyntaxHighlighter: FC<Props & BoxProps> = (props) => {
  const {
    language = "tsx",
    showLineNumbers = false,
    children,
    startLineNumber,
    endLineNumber,
    trimToReactReturnValue,
    ...rest
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
        <Box
          as="pre"
          className={clsx(className, containerStyles, lineStyles)}
          style={style}
          width="100%"
          maxWidth="min"
          {...rest}
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
        </Box>
      )}
    </Highlight>
  );
};

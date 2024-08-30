import { vars } from "~/theme/theme.css";
import type { spinnerSizes } from "./Spinner.css";
import { spinnerVariables } from "./Spinner.css";

export interface SpinnerProps {
  size?: keyof typeof spinnerSizes;
  color?: string;
  speed?: string;
}

export function Spinner({
  size = "md",
  color = vars.colors.primary.solidBackground,
  speed = "0.8s",
}: SpinnerProps) {
  return (
    <div
      style={{
        width: `${spinnerVariables[size].width}`,
        height: `${spinnerVariables[size].height}`,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill={color}>
        <path
          opacity=".25"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur={speed}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}

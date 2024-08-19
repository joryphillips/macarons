import { SVGProps } from "react";
import { vars } from "~/theme/theme.css";

/**
 * Using an SVG for the title allows us to get a horizontal scale on the Georgia
 * font without using a transform that mucks up the stacking context of the page.
 */
export function MacaronsTitleSVG({
  width = "100%",
  height = "100%",
  color = vars.colors.primary.lowContrastText,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1596 194"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      {...props}
    >
      <rect
        id="just-macarons-text"
        x="-0"
        y="0"
        width="1595.14"
        height="193.64"
        fill="none"
      />
      <g transform="matrix(0.861516,0,0,1,-834.053,0)">
        <g transform="matrix(352.72,0,0,352.72,2817.95,183.815)"></g>
        <text
          x="971.676px"
          y="183.815px"
          fontFamily="'Georgia', serif"
          fontWeight="700"
          fontStyle="italic"
          fontSize="352.72px"
          fill={color}
        >
          macarons
        </text>
      </g>
    </svg>
  );
}

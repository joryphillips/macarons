import type { SVGProps } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { pink, yellow, cyan, lime } from "@radix-ui/colors";
import { macaronStyles } from "./macaron.css";

type MacaronHue = {
  body: string;
  inner: string;
  outer: string;
};

type Hue = "pink" | "yellow" | "lime" | "cyan";

/**
 * Note that we do not want to use dark theme palettes or the macaroons
 * will not read as pastels (or macaroons). Tones "flip" in dark mode and that
 * works for UI components, but not for macaroons.
 */
function getPalette(hue: Hue) {
  switch (hue) {
    case "pink":
      return pink;
    case "yellow":
      return yellow;
    case "lime":
      return lime;
    case "cyan":
      return cyan;
    default:
      return pink;
  }
}

function getMacaroonHue(hue: Hue, theme: "light" | "dark"): MacaronHue {
  const palette = getPalette(hue);

  // Darken the colors for dark theme
  const bodyStep = theme === "light" ? 6 : 8;
  const innerStep = theme === "light" ? 5 : 7;
  const outerStep = theme === "light" ? 4 : 6;

  return {
    body: palette[`${hue}${bodyStep}` as keyof typeof palette],
    inner: palette[`${hue}${innerStep}` as keyof typeof palette],
    outer: palette[`${hue}${outerStep}` as keyof typeof palette],
  };
}

const pinkMacaron = getMacaroonHue("pink", "light");

function MacaronInsetSVG({
  height = "100%",
  width = "40px",
  macaroonHue = pinkMacaron,
  ...props
}: SVGProps<SVGSVGElement> & {
  macaroonHue: MacaronHue;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 70"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      {...props}
    >
      <g transform="matrix(1,0,0,1,-6994.8,-2636.5)">
        <g
          id="Macaron-Inset-Middle-40px"
          transform="matrix(0.0344381,0,0,0.0844582,6905.06,2429.39)"
        >
          <rect
            x="2605.88"
            y="2452.22"
            width="1160.58"
            height="828.812"
            fill="none"
          />
          <clipPath id="_clip1">
            <rect x="2605.88" y="2452.22" width="1160.58" height="828.812" />
          </clipPath>
          <g clipPath="url(#_clip1)">
            <g id="macaron" transform="matrix(1.0008,0,0,1,0.164898,0)">
              <g
                id="inner-left"
                transform="matrix(17.0146,0,0,35.9602,-117087,-92767.8)"
              >
                <rect
                  x="7057.87"
                  y="2649.19"
                  width="8.526"
                  height="20.564"
                  fill={macaroonHue.inner}
                />
                <path
                  d="M7069.8,2649.19L7069.8,2669.76C7069.8,2670.12 7068.28,2670.41 7066.39,2670.41L7057.87,2670.41C7055.98,2670.41 7054.46,2670.12 7054.46,2669.76L7054.46,2649.19C7054.46,2648.83 7055.98,2648.53 7057.87,2648.53L7066.39,2648.53C7068.28,2648.53 7069.8,2648.83 7069.8,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
                  fill={macaroonHue.body}
                />
              </g>
              <g
                id="inner-right"
                transform="matrix(17.0146,0,0,35.9602,-116859,-92767.8)"
              >
                <rect
                  x="7057.87"
                  y="2649.19"
                  width="8.526"
                  height="20.564"
                  fill={macaroonHue.inner}
                />
                <path
                  d="M7069.8,2649.19L7069.8,2669.76C7069.8,2670.12 7068.28,2670.41 7066.39,2670.41L7057.87,2670.41C7055.98,2670.41 7054.46,2670.12 7054.46,2669.76L7054.46,2649.19C7054.46,2648.83 7055.98,2648.53 7057.87,2648.53L7066.39,2648.53C7068.28,2648.53 7069.8,2648.83 7069.8,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
                  fill={macaroonHue.body}
                />
              </g>
              <g
                id="outer-left"
                transform="matrix(30.4986,0,0,37.9518,-212592,-98065.2)"
              >
                <rect
                  x="7057.87"
                  y="2649.19"
                  width="8.526"
                  height="20.564"
                  fill={macaroonHue.outer}
                />
                <path
                  d="M7068.3,2649.19L7068.3,2669.76C7068.3,2670.1 7067.44,2670.38 7066.39,2670.38L7057.87,2670.38C7056.82,2670.38 7055.96,2670.1 7055.96,2669.76L7055.96,2649.19C7055.96,2648.85 7056.82,2648.57 7057.87,2648.57L7066.39,2648.57C7067.44,2648.57 7068.3,2648.85 7068.3,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
                  fill={macaroonHue.body}
                />
              </g>
              <g
                id="outer-right"
                transform="matrix(30.4986,0,0,37.9518,-211807,-98065.2)"
              >
                <rect
                  x="7057.87"
                  y="2649.19"
                  width="8.526"
                  height="20.564"
                  fill={macaroonHue.outer}
                />
                <path
                  d="M7068.3,2649.19L7068.3,2669.76C7068.3,2670.1 7067.44,2670.38 7066.39,2670.38L7057.87,2670.38C7056.82,2670.38 7055.96,2670.1 7055.96,2669.76L7055.96,2649.19C7055.96,2648.85 7056.82,2648.57 7057.87,2648.57L7066.39,2648.57C7067.44,2648.57 7068.3,2648.85 7068.3,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
                  fill={macaroonHue.body}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const yellowMacaron = getMacaroonHue("yellow", "light");

function MacaronOusetSVG({
  height = "100%",
  width = "40px",
  macaroonHue = yellowMacaron,
  ...props
}: SVGProps<SVGSVGElement> & {
  macaroonHue: MacaronHue;
}) {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 40 70"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      strokeMiterlimit="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <g transform="matrix(1,0,0,1,-7046.39,-2636.5)">
        <g
          id="Macaron-Outset-Middle-40px"
          transform="matrix(0.0344657,0,0,0.0844582,6956.58,2429.39)"
        >
          <g
            id="Inner-left"
            transform="matrix(17.0146,0,0,36.85,-117087,-95134.9)"
          >
            <rect
              x="7057.87"
              y="2649.19"
              width="8.526"
              height="20.564"
              fill={macaroonHue.inner}
            />
            <path
              d="M7069.8,2649.19L7069.8,2669.76C7069.8,2670.11 7068.28,2670.4 7066.39,2670.4L7057.87,2670.4C7055.98,2670.4 7054.46,2670.11 7054.46,2669.76L7054.46,2649.19C7054.46,2648.84 7055.98,2648.55 7057.87,2648.55L7066.39,2648.55C7068.28,2648.55 7069.8,2648.84 7069.8,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
              fill={macaroonHue.body}
            />
          </g>
          <g
            id="inner-right"
            transform="matrix(17.0146,0,0,36.85,-116859,-95134.9)"
          >
            <rect
              x="7057.87"
              y="2649.19"
              width="8.526"
              height="20.564"
              fill={macaroonHue.inner}
            />
            <path
              d="M7069.8,2649.19L7069.8,2669.76C7069.8,2670.11 7068.28,2670.4 7066.39,2670.4L7057.87,2670.4C7055.98,2670.4 7054.46,2670.11 7054.46,2669.76L7054.46,2649.19C7054.46,2648.84 7055.98,2648.55 7057.87,2648.55L7066.39,2648.55C7068.28,2648.55 7069.8,2648.84 7069.8,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
              fill={macaroonHue.body}
            />
          </g>
          <g
            id="outer-left"
            transform="matrix(30.4986,0,0,35.1226,-212592,-90541.1)"
          >
            <rect
              x="7057.87"
              y="2649.19"
              width="8.526"
              height="20.564"
              fill={macaroonHue.outer}
            />
            <path
              d="M7068.3,2649.19L7068.3,2669.76C7068.3,2670.13 7067.44,2670.43 7066.39,2670.43L7057.87,2670.43C7056.82,2670.43 7055.96,2670.13 7055.96,2669.76L7055.96,2649.19C7055.96,2648.82 7056.82,2648.52 7057.87,2648.52L7066.39,2648.52C7067.44,2648.52 7068.3,2648.82 7068.3,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
              fill={macaroonHue.body}
            />
          </g>
          <g
            id="outer-right"
            transform="matrix(30.4986,0,0,35.1226,-211807,-90541.1)"
          >
            <rect
              x="7057.87"
              y="2649.19"
              width="8.526"
              height="20.564"
              fill={macaroonHue.outer}
            />
            <path
              d="M7068.3,2649.19L7068.3,2669.76C7068.3,2670.13 7067.44,2670.43 7066.39,2670.43L7057.87,2670.43C7056.82,2670.43 7055.96,2670.13 7055.96,2669.76L7055.96,2649.19C7055.96,2648.82 7056.82,2648.52 7057.87,2648.52L7066.39,2648.52C7067.44,2648.52 7068.3,2648.82 7068.3,2649.19ZM7066.39,2649.19L7057.87,2649.19L7057.87,2669.76L7066.39,2669.76L7066.39,2649.19Z"
              fill={macaroonHue.body}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function MacaronSVG({
  inset = false,
  height = "100%",
  width = "40px",
  hue = "pink",
  ...props
}: SVGProps<SVGSVGElement> & { inset?: boolean; hue: Hue }) {
  const { userTheme } = useTheme();
  const macaroonHue = getMacaroonHue(hue, userTheme || "light");

  return inset ? (
    <MacaronInsetSVG
      className={macaronStyles}
      height={height}
      width={width}
      macaroonHue={macaroonHue}
      {...props}
    />
  ) : (
    <MacaronOusetSVG
      className={macaronStyles}
      height={height}
      width={width}
      macaroonHue={macaroonHue}
      {...props}
    />
  );
}

export function MacaronStack({
  width = "40px",
  height = "100%",
  count = 1,
}: {
  width?: string;
  height?: string;
  count: number;
}) {
  return (
    <>
      {[...Array(count)].map(
        (_, i) =>
          // cycle through pink inset, yellow outset, green inset, and blue outset macarons
          ({
            0: (
              <MacaronSVG
                inset
                key={i}
                width={width}
                height={height}
                hue="pink"
              />
            ),
            1: (
              <MacaronSVG key={i} width={width} height={height} hue="yellow" />
            ),
            2: (
              <MacaronSVG
                inset
                key={i}
                width={width}
                height={height}
                hue="lime"
              />
            ),
            3: <MacaronSVG key={i} width={width} height={height} hue="cyan" />,
          }[i % 4])
      )}
    </>
  );
}

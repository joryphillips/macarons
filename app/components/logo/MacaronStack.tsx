import type { SVGProps } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { pink, yellow, cyan, lime } from "@radix-ui/colors";
import { macaronStyles } from "./macaron.css";

type MacaronHue = {
  body: string;
  inner: string;
  outer: string;
  shadow: string;
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

function getMacaroonHue(hue: Hue): MacaronHue {
  const palette = getPalette(hue);

  const bodyStep = 6;
  const innerStep = 5;
  const outerStep = 4;
  const shadowStep = 7;

  return {
    body: palette[`${hue}${bodyStep}` as keyof typeof palette],
    inner: palette[`${hue}${innerStep}` as keyof typeof palette],
    outer: palette[`${hue}${outerStep}` as keyof typeof palette],
    shadow: palette[`${hue}${shadowStep}` as keyof typeof palette],
  };
}

const pinkMacaron = getMacaroonHue("pink");

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
      <g transform="matrix(1,0,0,1,-7009.56,-2563.26)">
        <g
          id="Macaron-Inset-Middle-40px"
          transform="matrix(0.0344381,0,0,0.0844582,6919.82,2356.15)"
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
            <g
              id="big-shadow"
              transform="matrix(0.928198,0,0,0.983416,243.195,54.5143)"
            >
              <path
                d="M2985.67,2479.17C2996.51,2475.7 3010.45,2473.62 3025.64,2473.62L3170.72,2473.62C3186.45,2473.62 3200.83,2475.85 3211.83,2479.54C3222.83,2475.85 3237.21,2473.62 3252.94,2473.62L3398.02,2473.62C3402.44,2473.62 3406.75,2473.79 3410.91,2474.13C3413.91,2461.9 3440.66,2452.34 3473.2,2452.34L3733.24,2452.34C3767.8,2452.34 3795.81,2463.12 3795.81,2476.42L3795.81,3256.85C3795.81,3270.15 3767.8,3280.93 3733.24,3280.93L3473.2,3280.93C3442.05,3280.93 3416.21,3272.16 3411.43,3260.69C3407.11,3261.06 3402.62,3261.25 3398.02,3261.25L3252.94,3261.25C3237.21,3261.25 3222.83,3259.01 3211.83,3255.32C3200.83,3259.01 3186.45,3261.25 3170.72,3261.25L3025.64,3261.25C3010.45,3261.25 2996.51,3259.16 2985.67,3255.7L2985.67,3256.85C2985.67,3270.15 2957.66,3280.93 2923.11,3280.93L2663.07,3280.93C2628.51,3280.93 2600.5,3270.15 2600.5,3256.85L2600.5,2476.42C2600.5,2463.12 2628.51,2452.34 2663.07,2452.34L2923.11,2452.34C2957.66,2452.34 2985.67,2463.12 2985.67,2476.42L2985.67,2479.17Z"
                fill={macaroonHue.shadow}
              />
            </g>
            <g
              id="body"
              transform="matrix(0.928198,0,0,0.983416,192.106,40.5496)"
            >
              <path
                d="M2985.67,2479.17C2996.51,2475.7 3010.45,2473.62 3025.64,2473.62L3170.72,2473.62C3186.45,2473.62 3200.83,2475.85 3211.83,2479.54C3222.83,2475.85 3237.21,2473.62 3252.94,2473.62L3398.02,2473.62C3402.44,2473.62 3406.75,2473.79 3410.91,2474.13C3413.91,2461.9 3440.66,2452.34 3473.2,2452.34L3733.24,2452.34C3767.8,2452.34 3795.81,2463.12 3795.81,2476.42L3795.81,3256.85C3795.81,3270.15 3767.8,3280.93 3733.24,3280.93L3473.2,3280.93C3442.05,3280.93 3416.21,3272.16 3411.43,3260.69C3407.11,3261.06 3402.62,3261.25 3398.02,3261.25L3252.94,3261.25C3237.21,3261.25 3222.83,3259.01 3211.83,3255.32C3200.83,3259.01 3186.45,3261.25 3170.72,3261.25L3025.64,3261.25C3010.45,3261.25 2996.51,3259.16 2985.67,3255.7L2985.67,3256.85C2985.67,3270.15 2957.66,3280.93 2923.11,3280.93L2663.07,3280.93C2628.51,3280.93 2600.5,3270.15 2600.5,3256.85L2600.5,2476.42C2600.5,2463.12 2628.51,2452.34 2663.07,2452.34L2923.11,2452.34C2957.66,2452.34 2985.67,2463.12 2985.67,2476.42L2985.67,2479.17Z"
                fill={macaroonHue.body}
              />
            </g>
            <g
              id="outer-left"
              transform="matrix(28.7424,0,0,37.609,-200192,-97160.4)"
            >
              <path
                d="M7066.39,2649.59L7066.39,2669.36C7066.39,2669.58 7065.82,2669.76 7065.11,2669.76L7059.15,2669.76C7058.44,2669.76 7057.87,2669.58 7057.87,2669.36L7057.87,2649.59C7057.87,2649.37 7058.44,2649.19 7059.15,2649.19L7065.11,2649.19C7065.82,2649.19 7066.39,2649.37 7066.39,2649.59Z"
                fill={macaroonHue.outer}
              />
            </g>
            <g
              id="outer-right"
              transform="matrix(28.7424,0,0,37.609,-199439,-97160.4)"
            >
              <path
                d="M7066.39,2649.59L7066.39,2669.36C7066.39,2669.58 7065.82,2669.76 7065.11,2669.76L7059.15,2669.76C7058.44,2669.76 7057.87,2669.58 7057.87,2669.36L7057.87,2649.59C7057.87,2649.37 7058.44,2649.19 7059.15,2649.19L7065.11,2649.19C7065.82,2649.19 7066.39,2649.37 7066.39,2649.59Z"
                fill={macaroonHue.outer}
              />
            </g>
            <g
              id="inner-left"
              transform="matrix(16.0349,0,0,35.6354,-110169,-91909.9)"
            >
              <path
                d="M7066.39,2649.42L7066.39,2669.53C7066.39,2669.65 7065.84,2669.76 7065.16,2669.76L7059.1,2669.76C7058.42,2669.76 7057.87,2669.65 7057.87,2669.53L7057.87,2649.42C7057.87,2649.29 7058.42,2649.19 7059.1,2649.19L7065.16,2649.19C7065.84,2649.19 7066.39,2649.29 7066.39,2649.42Z"
                fill={macaroonHue.inner}
              />
            </g>
            <g
              id="inner-right"
              transform="matrix(16.0349,0,0,35.6354,-109960,-91909.9)"
            >
              <path
                d="M7066.39,2649.43L7066.39,2669.52C7066.39,2669.65 7065.82,2669.76 7065.11,2669.76L7059.15,2669.76C7058.44,2669.76 7057.87,2669.65 7057.87,2669.52L7057.87,2649.43C7057.87,2649.3 7058.44,2649.19 7059.15,2649.19L7065.11,2649.19C7065.82,2649.19 7066.39,2649.3 7066.39,2649.43Z"
                fill={macaroonHue.inner}
              />
            </g>
            <g
              id="small-shadow"
              transform="matrix(29.0376,-2.49279e-05,-6.1135e-05,11.8668,-200919,-27964.8)"
            >
              <path
                d="M7021.84,2565.16L7021.78,2630.33"
                fill="none"
                strokeWidth="1px"
                stroke={macaroonHue.shadow}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const yellowMacaron = getMacaroonHue("yellow");

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
      <g transform="matrix(1,0,0,1,-7010.3,-2642.94)">
        <g
          id="Macaron-Outset-Middle-40px"
          transform="matrix(0.0344657,0,0,0.0844582,6920.49,2435.83)"
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
            <g id="big-shadow" transform="matrix(0.95,0,0,1,189.127,11.8402)">
              <path
                d="M2943,2483.25C2948.14,2472.32 2971.7,2464.06 2999.98,2464.06L3145.06,2464.06C3161.12,2464.06 3175.66,2466.72 3186.17,2471.03C3196.68,2466.72 3211.22,2464.06 3227.28,2464.06L3372.36,2464.06C3400.45,2464.06 3423.88,2472.21 3429.23,2483.02C3434.99,2482.24 3441.14,2481.82 3447.54,2481.82L3707.58,2481.82C3739.63,2481.82 3765.61,2492.42 3765.61,2505.5L3765.61,3227.75C3765.61,3240.83 3739.63,3251.43 3707.58,3251.43L3447.54,3251.43C3441.14,3251.43 3434.99,3251.01 3429.23,3250.23C3423.88,3261.05 3400.45,3269.19 3372.36,3269.19L3227.28,3269.19C3211.22,3269.19 3196.68,3266.53 3186.17,3262.22C3175.66,3266.53 3161.12,3269.19 3145.06,3269.19L2999.98,3269.19C2971.7,3269.19 2948.14,3260.93 2943,3250C2936.79,3250.93 2930.09,3251.43 2923.11,3251.43L2663.07,3251.43C2631.02,3251.43 2605.04,3240.83 2605.04,3227.75L2605.04,2505.5C2605.04,2492.42 2631.02,2481.82 2663.07,2481.82L2923.11,2481.82C2930.09,2481.82 2936.79,2482.33 2943,2483.25Z"
                fill={macaroonHue.shadow}
              />
            </g>
            <g
              id="body"
              transform="matrix(0.938255,0,0,1.00806,175.325,-31.6932)"
            >
              <path
                d="M2943,2483.25C2948.14,2472.32 2971.7,2464.06 2999.98,2464.06L3145.06,2464.06C3161.12,2464.06 3175.66,2466.72 3186.17,2471.03C3196.68,2466.72 3211.22,2464.06 3227.28,2464.06L3372.36,2464.06C3400.45,2464.06 3423.88,2472.21 3429.23,2483.02C3434.99,2482.24 3441.14,2481.82 3447.54,2481.82L3707.58,2481.82C3739.63,2481.82 3765.61,2492.42 3765.61,2505.5L3765.61,3227.75C3765.61,3240.83 3739.63,3251.43 3707.58,3251.43L3447.54,3251.43C3441.14,3251.43 3434.99,3251.01 3429.23,3250.23C3423.88,3261.05 3400.45,3269.19 3372.36,3269.19L3227.28,3269.19C3211.22,3269.19 3196.68,3266.53 3186.17,3262.22C3175.66,3266.53 3161.12,3269.19 3145.06,3269.19L2999.98,3269.19C2971.7,3269.19 2948.14,3260.93 2943,3250C2936.79,3250.93 2930.09,3251.43 2923.11,3251.43L2663.07,3251.43C2631.02,3251.43 2605.04,3240.83 2605.04,3227.75L2605.04,2505.5C2605.04,2492.42 2631.02,2481.82 2663.07,2481.82L2923.11,2481.82C2930.09,2481.82 2936.79,2482.33 2943,2483.25Z"
                fill={macaroonHue.body}
              />
            </g>
            <g
              id="Inner-left"
              transform="matrix(16.0822,0,0,36.85,-110510,-95146.7)"
            >
              <path
                d="M7066.39,2649.42L7066.39,2669.53C7066.39,2669.65 7065.82,2669.76 7065.11,2669.76L7059.15,2669.76C7058.44,2669.76 7057.87,2669.65 7057.87,2669.53L7057.87,2649.42C7057.87,2649.29 7058.44,2649.19 7059.15,2649.19L7065.11,2649.19C7065.82,2649.19 7066.39,2649.29 7066.39,2649.42Z"
                fill={macaroonHue.inner}
              />
            </g>
            <g
              id="inner-right"
              transform="matrix(16.0822,0,0,36.85,-110309,-95146.7)"
            >
              <path
                d="M7066.39,2649.42L7066.39,2669.53C7066.39,2669.65 7065.82,2669.76 7065.11,2669.76L7059.15,2669.76C7058.44,2669.76 7057.87,2669.65 7057.87,2669.53L7057.87,2649.42C7057.87,2649.29 7058.44,2649.19 7059.15,2649.19L7065.11,2649.19C7065.82,2649.19 7066.39,2649.29 7066.39,2649.42Z"
                fill={macaroonHue.inner}
              />
            </g>
            <g
              id="outer-right"
              transform="matrix(27.1973,0,0,35.1226,-188536,-90552.9)"
            >
              <path
                d="M7066.39,2649.6L7066.39,2669.35C7066.39,2669.57 7065.82,2669.76 7065.11,2669.76L7059.15,2669.76C7058.44,2669.76 7057.87,2669.57 7057.87,2669.35L7057.87,2649.6C7057.87,2649.37 7058.44,2649.19 7059.15,2649.19L7065.11,2649.19C7065.82,2649.19 7066.39,2649.37 7066.39,2649.6Z"
                fill={macaroonHue.outer}
              />
            </g>
            <g
              id="small-shadow"
              transform="matrix(28.234,0,0,35.1226,-196584,-90547)"
            >
              <path
                d="M7068.3,2649.19L7068.3,2669.76C7068.3,2670.13 7067.44,2670.43 7066.39,2670.43L7057.87,2670.43C7056.82,2670.43 7055.96,2670.13 7055.96,2669.76L7055.96,2649.19C7055.96,2648.82 7056.82,2648.52 7057.87,2648.52L7066.39,2648.52C7067.44,2648.52 7068.3,2648.82 7068.3,2649.19Z"
                fill={macaroonHue.shadow}
              />
            </g>
            <g
              id="left-body"
              transform="matrix(28.2095,0,0,35.5279,-196439,-91629.2)"
            >
              <path
                d="M7068.3,2649.19L7068.3,2669.76C7068.3,2670.13 7067.44,2670.43 7066.39,2670.43L7057.87,2670.43C7056.82,2670.43 7055.96,2670.13 7055.96,2669.76L7055.96,2649.19C7055.96,2648.82 7056.82,2648.52 7057.87,2648.52L7066.39,2648.52C7067.44,2648.52 7068.3,2648.82 7068.3,2649.19Z"
                fill={macaroonHue.body}
              />
            </g>
            <g
              id="outer-left"
              transform="matrix(27.2234,0,0,35.2666,-189475,-90937.2)"
            >
              <path
                d="M7066.39,2649.59L7066.39,2669.35C7066.39,2669.57 7065.82,2669.76 7065.11,2669.76L7059.15,2669.76C7058.44,2669.76 7057.87,2669.57 7057.87,2669.35L7057.87,2649.59C7057.87,2649.37 7058.44,2649.19 7059.15,2649.19L7065.11,2649.19C7065.82,2649.19 7066.39,2649.37 7066.39,2649.59Z"
                fill={macaroonHue.outer}
              />
            </g>
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
}: SVGProps<SVGSVGElement> & { inset?: boolean; hue?: Hue }) {
  const { userTheme } = useTheme();
  const macaroonHue = getMacaroonHue(hue);

  return inset ? (
    <MacaronInsetSVG
      className={macaronStyles}
      height={height}
      width={width}
      macaroonHue={macaroonHue}
      {...props}
      style={{
        filter: userTheme == "dark" ? "brightness(0.7) contrast(2)" : "none",
      }}
    />
  ) : (
    <MacaronOusetSVG
      className={macaronStyles}
      height={height}
      width={width}
      macaroonHue={macaroonHue}
      {...props}
      style={{
        filter: userTheme == "dark" ? "brightness(0.7) contrast(2)" : "none",
      }}
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

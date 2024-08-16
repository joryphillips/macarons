import type { SVGProps } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { pink, yellow, cyan, lime } from "@radix-ui/colors";

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
  width = "50px",
  macaroonHue = pinkMacaron,
  ...props
}: SVGProps<SVGSVGElement> & {
  macaroonHue: MacaronHue;
}) {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 400 701"
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
      <g transform="matrix(1,0,0,1,-5691.4,-854.358)">
        <g
          id="Macaron-Inset-No-Outline"
          transform="matrix(0.344565,0,0,0.845035,4793.5,-1217.85)"
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
              id="Macaron"
              transform="matrix(6.11575,1.51985e-16,9.47774e-16,2.48211,-242.716,807.102)"
            >
              <g
                id="Body"
                transform="matrix(0.879144,0,3.70652e-32,1.50354,90.1624,-482.139)"
              >
                <path
                  d="M494.654,978.562L494.654,981.692C494.654,982.716 493.232,983.547 491.481,983.547L430.268,983.547C428.517,983.547 427.095,982.716 427.095,981.692L427.095,763.437C427.095,762.413 428.517,761.581 430.268,761.581L491.481,761.581C493.232,761.581 494.654,762.413 494.654,763.437L494.654,766.577C494.915,766.503 495.208,766.461 495.518,766.461L574.403,766.602C574.788,766.602 575.146,766.666 575.45,766.777L575.45,763.437C575.45,762.413 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,762.413 643.008,763.437L643.008,981.692C643.008,982.716 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,982.716 575.45,981.692L575.45,978.644C575.146,978.755 574.788,978.82 574.403,978.82L495.518,978.679C495.208,978.679 494.915,978.637 494.654,978.562Z"
                  fill={macaroonHue.body}
                />
              </g>
              <g
                id="Left-inner"
                transform="matrix(0.443051,0,3.307e-32,1.34148,270.716,-340.4)"
              >
                <path
                  d="M643.008,762.634L643.008,982.494C643.008,983.075 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,983.075 575.45,982.494L575.45,762.634C575.45,762.053 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,762.053 643.008,762.634Z"
                  fill={macaroonHue.inner}
                />
              </g>
              <g
                id="Right-inner"
                transform="matrix(0.443051,0,3.30787e-32,1.34183,311.049,-341.239)"
              >
                <path
                  d="M643.008,762.634L643.008,982.494C643.008,983.075 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,983.075 575.45,982.494L575.45,762.634C575.45,762.053 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,762.053 643.008,762.634Z"
                  fill={macaroonHue.inner}
                />
              </g>
              <g
                id="Right-outer"
                transform="matrix(0.570513,3.33558e-18,-1.88951e-17,1.39886,277.803,-390.689)"
              >
                <path
                  d="M643.008,762.881L643.008,982.247C643.008,982.964 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,982.964 575.45,982.247L575.45,762.881C575.45,762.164 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,762.164 643.008,762.881Z"
                  fill={macaroonHue.outer}
                />
              </g>
              <g
                id="Left-outer"
                transform="matrix(-0.568618,-7.30872e-17,1.91163e-16,-1.40106,841.345,2053.02)"
              >
                <path
                  d="M643.008,762.875L643.008,982.253C643.008,982.967 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,982.967 575.45,982.253L575.45,762.875C575.45,762.161 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,762.161 643.008,762.875Z"
                  fill={macaroonHue.outer}
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
  width = "50px",
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
      viewBox="0 0 437 737"
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
      <g transform="matrix(1,0,0,1,-7249.18,-840.408)">
        <g
          id="Macaron-Outset-Middle"
          transform="matrix(0.37593,0,0,0.889131,6269.55,-1339.94)"
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
              id="Macaron"
              transform="matrix(6.13658,1.48147e-16,9.51002e-16,2.41943,-1654.95,860.448)"
            >
              <g
                id="Body"
                transform="matrix(0.861974,0,0,1.47418,198.667,-456.508)"
              >
                <path
                  d="M642.758,982.414C642.276,983.08 641.148,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,982.716 575.45,981.692L575.45,763.437C575.45,762.413 576.872,761.581 578.623,761.581L639.835,761.581C641.148,761.581 642.276,762.049 642.758,762.714L642.758,757.467C642.758,756.831 643.641,756.314 644.729,756.314L682.752,756.314C683.734,756.314 684.549,756.735 684.699,757.285C684.848,756.735 685.663,756.314 686.645,756.314L724.668,756.314C725.756,756.314 726.639,756.831 726.639,757.467L726.639,762.857C726.982,762.049 728.232,761.45 729.719,761.45L790.931,761.45C792.682,761.45 794.104,762.281 794.104,763.305L794.104,981.56C794.104,982.584 792.682,983.415 790.931,983.415L729.719,983.415C728.232,983.415 726.982,982.816 726.639,982.009L726.639,987.248C726.639,987.884 725.756,988.4 724.668,988.4L686.645,988.4C685.663,988.4 684.848,987.979 684.699,987.429C684.549,987.979 683.734,988.4 682.752,988.4L644.729,988.4C643.641,988.4 642.758,987.884 642.758,987.248L642.758,982.414Z"
                  fill={macaroonHue.body}
                />
              </g>
              <g
                id="Left-outer"
                transform="matrix(0.668324,9.92004e-19,-5.08898e-18,1.3875,319.015,-381.474)"
              >
                <path
                  d="M643.008,763.22L643.008,981.908C643.008,982.812 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,982.812 575.45,981.908L575.45,763.22C575.45,762.316 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,762.316 643.008,763.22Z"
                  fill={macaroonHue.outer}
                />
              </g>
              <g
                id="Right-outer"
                transform="matrix(0.677246,1.53466e-18,-7.69337e-18,1.3875,439.47,-381.662)"
              >
                <path
                  d="M643.008,763.242L643.008,981.886C643.008,982.803 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,982.803 575.45,981.886L575.45,763.242C575.45,762.326 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,762.326 643.008,763.242Z"
                  fill={macaroonHue.outer}
                />
              </g>
              <g
                id="Left-inner"
                transform="matrix(0.339902,3.13401e-18,-2.9163e-17,1.43718,566.688,-424.121)"
              >
                <path
                  d="M643.008,762.386L643.008,982.742C643.008,983.186 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,983.186 575.45,982.742L575.45,762.386C575.45,761.942 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,761.942 643.008,762.386Z"
                  fill={macaroonHue.inner}
                />
              </g>
              <g
                id="Right-inner"
                transform="matrix(0.341233,3.05587e-18,-2.84206e-17,1.43732,597.721,-424.234)"
              >
                <path
                  d="M643.008,762.389L643.008,982.739C643.008,983.185 641.586,983.547 639.835,983.547L578.623,983.547C576.872,983.547 575.45,983.185 575.45,982.739L575.45,762.389C575.45,761.943 576.872,761.581 578.623,761.581L639.835,761.581C641.586,761.581 643.008,761.943 643.008,762.389Z"
                  fill={macaroonHue.inner}
                />
              </g>
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
  width = "50px",
  hue = "pink",
  ...props
}: SVGProps<SVGSVGElement> & { inset?: boolean; hue: Hue }) {
  const { userTheme } = useTheme();
  const macaroonHue = getMacaroonHue(hue, userTheme || "light");

  return inset ? (
    <MacaronInsetSVG
      height={height}
      width={width}
      macaroonHue={macaroonHue}
      {...props}
    />
  ) : (
    <MacaronOusetSVG
      height={height}
      width={width}
      macaroonHue={macaroonHue}
      {...props}
    />
  );
}

export function MacaronStack({
  width = "50px",
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

import type { AllHTMLAttributes, ReactNode } from "react";
import { createElement, forwardRef } from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import * as resetStyles from "~/styles/reset.css";
import type { Sprinkles } from "~/styles/sprinkles.css";
import { sprinkles } from "~/styles/sprinkles.css";

type Atoms = Sprinkles & {
  reset?: resetStyles.Element & keyof JSX.IntrinsicElements;
};

type HTMLProperties = Omit<
  AllHTMLAttributes<HTMLElement>,
  "as" | "className" | "color" | "height" | "width"
>;

type Props = Atoms &
  HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
    children?: ReactNode;
  };

const atoms = ({ reset, ...rest }: Atoms) => {
  const sprinklesClasses = sprinkles(rest);

  return clsx(reset && [resetStyles.element[reset]], sprinklesClasses);
};

/**
 * A polymorphic component that is constrained by Sprinkles properties (Atoms).
 * This component is primarily intended for rapid layouts. Also see the Stack
 * components for common flexBox needs. Neither cannot be used to make an SVG.
 *
 * When more design control is needed, use `style` from @vanilla-extract/css in
 * a companion .css.ts file with the component or HTML Element that best suits
 * your needs.
 */
export const Box = forwardRef<HTMLElement, Props>(
  ({ as: tag = "div", className, children, ...props }: Props, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, "reset">)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = atoms({
      reset: typeof tag === "string" ? (tag as Atoms["reset"]) : "div",
      ...atomProps,
    });

    return createElement(
      tag,
      {
        className: clsx(atomicClasses, className),
        ...nativeProps,
        ref,
      },
      children
    );
  }
);

export type BoxProps = Parameters<typeof Box>[0];

Box.displayName = "Box";

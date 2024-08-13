export const slideInFromLeft1 = {
  "0%": { transform: "translateX(-100)" },
  "100%": { transform: "translateX(0)" },
};

export const slideInFromLeft2 = {
  "0%": {
    transform: " translateX(-1rem)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
};

export const slideInFromRight2 = {
  "0%": {
    transform: " translateX(1rem)",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
};

export const slideInFromTop2 = {
  from: {
    transform: "translate3d(0, -0.5rem, 0)",
    opacity: 0,
  },
  to: {
    transform: "translate3d(0, 0, 0)",
    opacity: 1,
  },
};

export const slideInFromBottom2 = {
  from: {
    transform: "translate3d(0, 0.5rem, 0)",
    opacity: 0,
  },
  to: {
    transform: "translate3d(0, 0, 0)",
    opacity: 1,
  },
};

export const animateIn = {
  from: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "scale(1)",
  },
};

export const slideInFromBottom10 = {
  from: {
    transform: "translate3d(0, 1rem, 0)",
    opacity: 0,
  },
  to: {
    transform: "translate3d(0, 0, 0)",
    opacity: 1,
  },
};

export const slideInFromBottom0 = {
  from: {
    transform: "translate3d(0, 2rem, 0)",
    opacity: 0,
  },
  to: {
    transform: "translate3d(0, 0, 0)",
    opacity: 1,
  },
};

export const fadeOut90 = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0.9,
  },
};

export const fadeIn90 = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 0.9,
  },
};

export const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

export const fadeOut = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
};

export const contentShow = {
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
};

export const Timing = {
  easeInOut: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
  easeOut: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
  easeIn: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
} as const;

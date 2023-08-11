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

export const zoomIn90 = {
  from: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  to: {
    opacity: 1,
    transform: "scale(1)",
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

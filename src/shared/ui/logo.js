import { commonComponentProps, getAttrs } from "../lib/index";

export const Logo = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "logo",
    getCN,
  } = { ...commonComponentProps, ...props };
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `<img class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} />`;
};

import { commonComponentProps, getAttrs } from "../lib/index";

const baseOptions = {
  extraAttrs: {
    type: "text",
    disabled: false,
    readOnly: false,
  },
};

export const Input = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "input",
    getCN,
  } = { ...commonComponentProps, ...baseOptions, ...props };
  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
    <input
      class="${getClassName("", extraClasses)}"
      ${getAttrs(extraAttrs)}
    />
      `;
};

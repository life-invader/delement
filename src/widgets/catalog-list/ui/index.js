import { commonComponentProps, getAttrs } from "../../../shared/lib/index";

export const CatalogList = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "footer",
    getCN,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
    <ul class='list'></ul>`;
};

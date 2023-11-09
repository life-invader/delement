import { commonComponentProps, getAttrs } from "../../../shared/lib/index";

export const Filter = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "filter",
    getCN,
    categories,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
    <ul class=${getClassName("", extraClasses)} ${getAttrs(extraAttrs)}>
    ${Object.values(categories)
      .map(({ name, searchParam }, index) => {
        return `
      <li>
        <label class="filter__label ${!index && "filter__label--active"}">
          <span>${name}</span>
          <input type='checkbox' data-search-param='${searchParam}' />
        </label>
      </li>
      `;
      })
      .join("")}
    </ul>
    `;
};

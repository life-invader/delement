import { commonComponentProps, getAttrs } from "../../../shared/lib/index";

export const Footer = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "footer",
    getCN,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
    <footer class=${getClassName("", extraClasses)} ${getAttrs(extraAttrs)}>
      <div class="container">
        <p class="footer__text">This is footer</p>
      </div>
    </footer>
    `;
};

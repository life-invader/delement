import { commonComponentProps, getAttrs } from "../../../shared/lib/index";
import { Logo } from "../../../shared/ui/logo";

export const Header = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "header",
    getCN,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
  <header  class="${getClassName("", extraClasses)}" ${getAttrs(
    extraAttrs,
  )} data-js-header='header' >
    <div class="container">
      <nav class="nav header__nav">
        <div class="logo">
          ${Logo({ extraAttrs: { src: "/images/logo.svg" } })}
        </div>

        <ul class="nav__list">
          <li class="nav__list-item">
            <a class="nav__list-link nav__list-link--active" href="index.js">Главная</a>
          </li>

          <li class="nav__list-item">
            <a class="nav__list-link" href="catalog.html">Каталог</a>
          </li>

          <li class="nav__list-item">
            <a class="nav__list-button button" href="cart.html">Корзина</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>`;
};


{ /* <div class="${getClassName("logo", { isValid: true })}">
${Logo({ extraAttrs: { src: "/images/logo.svg" } })}
</div> */ }
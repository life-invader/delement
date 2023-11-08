import { commonComponentProps, createNodeFromString, getAttrs } from "../../../shared/lib/index";
import { transformDate } from "../../../shared/utils/date";

export const CartProduct = (props) => {
  const {
    extraClasses = [],
    extraAttrs = {},
    baseClass = "cart-product",
    getCN,
    item,
    handler = () => {},
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);
  const node = createNodeFromString(`
  <div class="${getClassName("", extraClasses)}">
    <img class="cart-product__img" src="${item.imageSrc}" width="188" height="144" />
    <div>
      <p class="cart-product__label">${item.label}</p>
      <p class="cart-product__name">${item.productName}</p>

      <dl class="cart-product__info">
        <div class="cart-product__info-wrapper">
          <dt>Регистрация на курс:</dt>
          <dd>${transformDate(item.registration.startDate)} - ${transformDate(item.registration.endDate)}</dd>
        </div>

        <div class="cart-product__info-wrapper">
          <dt>Начало курса:</dt>
          <dd>${transformDate(item.startCourse)}</dd>
        </div>

        <button class="cart-product__remove" type="button" data-productid=${
          item.idProduct
        }></button>
      </dl>
    </div>
  </div>`);

  node.querySelector(".cart-product__remove").addEventListener("click", handler);

  return node;
};

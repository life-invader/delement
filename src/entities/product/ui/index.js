import { commonComponentProps, getAttrs } from "../../../shared/lib/index";

export const ProductCard = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "product",
    getCN,
    item,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
    <div class="product">
      <img class="product__img" src="${item.imageSrc}" width="288" height="220" />
      <p class="product__text">${item.label}</p>
      <p class="product__name">${item.productName}</p>
      <button class="product__cart-button">В корзину</button>
    </div>`;
};

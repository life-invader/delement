import { commonComponentProps, createNodeFromString, getAttrs } from "../../../shared/lib/index";

export const ProductCard = (props) => {
  const {
    extraClasses = [],
    extraAttrs = {},
    baseClass = "product",
    getCN,
    item,
    addToCart = () => {},
    removeFromCart = () => {},
    isInCart = false,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);
  const node = createNodeFromString(`
  <div class="${getClassName("", extraClasses)} ${getCN(extraClasses)}">
    <img class="product__img" src="${item.imageSrc}" width="288" height="220" />
    <p class="product__text">${item.label}</p>
    <p class="product__name">${item.productName}</p>
    <button class="product__cart-button" data-productId=${item.idProduct}>${
    isInCart ? "Удалить" : "В корзину"
  }</button>
  </div>`);
  node
    .querySelector(".product__cart-button")
    .addEventListener("click", isInCart ? removeFromCart : addToCart);

  return node;
};

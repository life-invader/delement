import { CartProduct } from "../../../entities/product/product-in-cart";
import { products } from "../../../shared/api/mocks";
import { commonComponentProps, getAttrs } from "../../../shared/lib/index";

export const Cart = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "cart",
    getCN,
    categories,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
  <section class="cart">
  <div class="cart__wrapper">
    <ul class="cart__list">
      
    </ul>

    <div class="total">
    
    </div>
  </div>
    
  <a href="catalog.html">Продолжить покупки</a>
</section>
    `;
};

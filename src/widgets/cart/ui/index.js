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

    <div class="checkout">
      <h2 class="checkout__title">Итого</h2>

      <dl class="checkout__desc-list">
        <dt class="checkout__desc-term">
          <span class="checkout__qty">3</span> товара
        </dt>
        <dd class="checkout__desc-def">
          <span class="checkout__price">24 000</span> ₽
        </dd>
      </dl>

      <label class="checkout__promo">
        <span>Промокод</span>
        <input type="text" placeholder="Введите промокод" />
      </label>

      <dl class="checkout__desc-list checkout__sum">
        <dt class="checkout__desc-term">Итоговая сумма</dt>
        <dd class="checkout__desc-def">
          <span class="checkout__total-price">24 000</span> ₽
        </dd>
      </dl>

      <button class="checkout__button" type="submit">Оформить заказ</button>
    </div>
  </div>
    
  <a class="checkout__continue" href="catalog.html">Продолжить покупки</a>
</section>
    `;
};

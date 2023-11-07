import {
  saveProducts,
  selectCart,
  selectProduct,
  selectProducts,
  store,
} from "../../../entities/product/model";
import { CartProduct } from "../../../entities/product/product-in-cart";
import { removeProductFromCart } from "../../../features/cart/remove-from-cart";

export class CartModel {
  node;
  selector = ".cart__list";
  productIds;

  constructor() {
    if (CartModel.#instance) {
      return CartModel.#instance;
    }

    const cart = document.querySelector(this.selector);
    this.node = cart;

    if (!cart) {
      return;
    }

    CartModel.#instance = this;
    store.subscribe(
      (state) => state.products, () => console.log("Subscription"),
    );
    this.init();
  }

  clickHandler = (evt) => {
    const button = evt.currentTarget;
    const productId = button.dataset.productid;

    removeProductFromCart(productId);
    button.closest(".cart-product").remove();
  };

  renderCartItems() {
    this.productIds.map((itemId) => {
      const product = selectProduct(itemId);
      const productNode = CartProduct({ item: product, handler: this.clickHandler });
      this.node.append(productNode);
    });
  }

  init() {
    this.productIds = selectCart();
    this.products = selectProducts();
    console.log(this.productIds);
    console.log(this.products);

    this.renderCartItems();
  }

  static #instance;
}

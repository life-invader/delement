import { store } from "../../../shared/store/store";
import { selectCart, selectProduct } from "../../../shared/store/selectors";
import {
  saveProducts,
  applyPromo,
  placeUserOrder,
  restoreUserCart,
} from "../../../shared/store/actions";
import { CartProduct } from "../../../entities/product/product-in-cart";
import { removeProductFromCart } from "../../../features/cart/remove-from-cart";
import { Modal } from "../../../shared/ui/modal";

export class CartModel {
  node;
  cart;
  checkoutButton;
  promoInput;
  successModal = Modal({});
  errorModal = Modal({});

  constructor() {
    if (CartModel.#instance) {
      return CartModel.#instance;
    }

    const cart = document.querySelector(".cart__list");
    const checkoutButton = document.querySelector(".checkout__button");
    const promoInput = document.querySelector(".checkout__promo input");

    this.node = cart;
    this.checkoutButton = checkoutButton;
    this.promoInput = promoInput;

    CartModel.#instance = this;
    store.subscribe((state) => state.cart, this.renderCartInfo);
    this.init();
  }

  clickHandler = async (evt) => {
    const button = evt.currentTarget;
    const productId = button.dataset.productid;

    await removeProductFromCart(productId);
    button.closest(".cart-product").remove();
  };

  renderCartItems() {
    this.cart = selectCart();
    this.node.innerHTML = "";

    this.cart.productIds.map((itemId) => {
      const product = selectProduct(itemId);
      const productNode = CartProduct({ item: product, handler: this.clickHandler });
      this.node.append(productNode);
    });
  }

  renderCartInfo = () => {
    if (!this.node) {
      return;
    }

    this.cart = selectCart();
    if (this.cart.productIds.length <= 0) {
      this.checkoutButton.disabled = true;
    } else {
      this.checkoutButton.disabled = false;
    }

    const qtyOfProducts = document.querySelector(".checkout__qty");
    const cartPrice = document.querySelector(".checkout__price");
    const cartTotalPrice = document.querySelector(".checkout__total-price");

    qtyOfProducts.textContent = this.cart.qty;
    cartPrice.textContent = new Intl.NumberFormat().format(this.cart.total);
    cartTotalPrice.textContent = new Intl.NumberFormat().format(this.cart.totalWithPromo);
  };

  async restoreCart() {
    restoreUserCart();
  }

  inputBlurHandler = async (evt) => {
    const promoCode = evt.target.value;
    await applyPromo(promoCode);
  };

  closeModal = (modal) => (evt) => {
    const modalOverlay = modal;
    const closeButton = modal.querySelector(".modal__button");

    if (evt.target !== closeButton && evt.target !== modalOverlay) {
      return;
    }

    modal.remove();
  };

  renderModal(modal) {
    document.body.append(modal);
    modal.addEventListener("click", this.closeModal(modal));
  }

  placeOrder = async () => {
    try {
      const response = await placeUserOrder();
      const { message } = await response.json();
      this.renderCartInfo();
      this.renderCartItems();
      this.promoInput.value = "";
      this.renderModal(Modal({ message }));
    } catch (err) {
      this.renderModal(Modal({ message: err.message }));
      throw new Error("Ошибка заказа");
    }
  };

  initEventListeners() {
    this.promoInput.addEventListener("blur", this.inputBlurHandler);
    this.checkoutButton.addEventListener("click", this.placeOrder);
  }

  async fetchProducts() {
    const response = await fetch(`/products`);
    const data = await response.json();
    saveProducts(data);
  }

  async init() {
    this.cart = selectCart();
    this.restoreCart();
    await this.fetchProducts();

    if (!this.node) {
      return;
    }

    this.renderCartItems();
    this.renderCartInfo();
    this.initEventListeners();
  }

  static #instance;
}

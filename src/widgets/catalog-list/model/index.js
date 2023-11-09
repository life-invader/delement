import { store } from "../../../shared/store/store";
import { selectIsProductInCart, selectProducts } from "../../../shared/store/selectors";
import { ProductCard } from "../../../entities/product/product-card";
import { addProductToCart } from "../../../features/cart/add-to-cart";
import { removeProductFromCart } from "../../../features/cart/remove-from-cart";

export class CatalogModel {
  node;

  constructor() {
    if (CatalogModel.#instance) {
      return CatalogModel.#instance;
    }

    CatalogModel.#instance = this;
    this.node = document.querySelector(".list");
    if (!this.node) {
      return;
    }

    store.subscribe(this.render);
  }

  addProductToCart = async (evt) => {
    const button = evt.currentTarget;
    const productId = button.dataset.productid;

    await addProductToCart(productId);
    button.textContent = "Удалить";

    button.removeEventListener("click", this.addProductToCart);
    button.addEventListener("click", this.removeProductFromCart);
  };

  removeProductFromCart = async (evt) => {
    const button = evt.currentTarget;
    const productId = button.dataset.productid;

    await removeProductFromCart(productId);
    button.textContent = "В корзину";

    button.removeEventListener("click", this.removeProductFromCart);
    button.addEventListener("click", this.addProductToCart);
  };

  render = () => {
    const products = selectProducts();
    this.node.innerHTML = "";

    products.map((item) => {
      const isInCart = selectIsProductInCart(item.idProduct);
      const card = ProductCard({
        item,
        isInCart,
        addToCart: this.addProductToCart,
        removeFromCart: this.removeProductFromCart,
      });
      this.node.append(card);
    });
  };

  static #instance;
}

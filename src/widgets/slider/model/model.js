import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "swiper";
import { ProductCard } from "../../../entities/product/ui";
import { selectIsProductInCart } from "../../../entities/product/model";
import { addProductToCart } from "../../../features/cart/add-to-cart";
import { removeProductFromCart } from "../../../features/cart/remove-from-cart";

export class SliderModel {
  node;
  products = [];

  constructor() {
    const swiper = document.querySelector(".swiper .swiper-wrapper");
    this.node = swiper;

    if (!swiper) {
      return;
    }

    this.init();
  }

  initSlider() {
    new Swiper(".swiper", {
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 32,
      slideClass: "swiper-slide",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  async fetchPopularProds() {
    const data = await fetch("/popular");
    const products = await data.json();
    this.products = products;
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

  renderSlides = () => {
    this.products.map((item) => {
      const isInCart = selectIsProductInCart(item.idProduct);
      const slide = ProductCard({
        item,
        extraClasses: [ "swiper-slide" ],
        isInCart,
        addToCart: this.addProductToCart,
        removeFromCart: this.removeProductFromCart,
      });
      this.node.append(slide);
    });
  };

  async init() {
    this.initSlider();
    await this.fetchPopularProds();
    this.renderSlides();
  }
}

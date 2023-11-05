import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "swiper";
import { ProductCard } from "../../../entities/product/ui";

export class SliderModel {
  node;
  products;

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

  renderSlides() {
    this.products.forEach((item) => {
      const slide = ProductCard({ item, extraClasses: [ "swiper-slide" ] });
      this.node.insertAdjacentHTML("afterbegin", slide);
    });
  }

  async init() {
    this.initSlider();
    await this.fetchPopularProds();
    this.renderSlides();
  }
}

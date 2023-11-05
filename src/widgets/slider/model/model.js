import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "swiper";

export class SliderModel {
  constructor() {
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
}

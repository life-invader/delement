import { commonComponentProps, getAttrs } from "../../../shared/lib/index";

export const Slider = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "header",
    getCN,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
    <div class="swiper slider">
      <ul class="swiper-wrapper slider__wrapper">

      </ul>
      <div class="swiper__button-next"></div>
      <div class="swiper__button-prev"></div>
    </div>`;
};

import { commonComponentProps, getAttrs } from "../../../shared/lib/index";

export const Footer = (props) => {
  const {
    extraClasses = {},
    extraAttrs = {},
    baseClass = "footer",
    getCN,
  } = { ...commonComponentProps, ...props };

  const getClassName = (elem, mod) => getCN(baseClass, elem, mod);

  return `
    <footer class=${getClassName("", extraClasses)} ${getAttrs(extraAttrs)}>
      <div class="footer__container">
        <div class="footer__top">
          <ul class="footer__links-list ">
            <li class="footer__links-item">
              <a class="footer__link" href="catalog.html">Курсы</a>
            </li>

            <li class="footer__links-item">
              <a class="footer__link" href="https://academy.d-element.ru">О нас</a>
            </li>

            <li class="footer__links-item">
              <a class="footer__link" href="https://academy.d-element.ru">Отзывы</a>
            </li>

            <li class="footer__links-item">
              <a class="footer__link" href="https://academy.d-element.ru">Контакты</a>
            </li>

            <li class="footer__links-item">
              <a class="footer__link footer__policy" href="https://academy.d-element.ru">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>

        <div class="footer__bottom">
          <dl class="footer__bottom-list">
            <div>
              <dt class="footer__bottom-term">Наш адрес</dt>
              <dd class="footer__bottom-def">г. Челябинск, ул. Лесопарковая 5/2</dd>
            </div>

            <div>
              <dt class="footer__bottom-term">Эл. почта</dt>
              <dd class="footer__bottom-def">info@d-element.ru</dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
    `;
};

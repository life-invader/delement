import { getMeta, getPage } from "../../shared/lib";
import { Cart } from "../../widgets/cart/ui";
import { Footer } from "../../widgets/footer/ui";
import { Header } from "../../widgets/header/ui";

export default () => {
  return getPage({
    title: "Корзина",
    meta: [ getMeta({ name: "description", content: "This is about page" }) ],
    body: `
    ${Header({})}
    <main class="main">
      <div class="container">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="/">Главная</a>
          </li>

          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" >Каталог</a>
          </li>
        </ul>
        <h1 class="title main__title">Корзина</h1>
        
        ${Cart({})}
      </div>
    </main>
    ${Footer()}
    `,
  });
};

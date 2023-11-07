import { getMeta, getPage } from "../../shared/lib";
import { Cart } from "../../widgets/cart/ui";
import { Footer } from "../../widgets/footer/ui/footer";
import { Header } from "../../widgets/header/ui/header";

export default () => {
  return getPage({
    title: "Корзина",
    meta: [ getMeta({ name: "description", content: "This is about page" }) ],
    body: `
    ${Header({})}
    <main class="main">
      <div class="container">
        <h1 class="title">Корзина</h1>
        
        ${Cart({})}
      </div>
    </main>
    ${Footer()}
    `,
  });
};

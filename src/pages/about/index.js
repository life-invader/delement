import { getMeta, getPage } from "../../shared/lib";
import { Footer } from "../../widgets/footer/ui/footer";
import { Header } from "../../widgets/header/ui/header";

export default () => {
  return getPage({
    title: "О нас",
    meta: [ getMeta({ name: "description", content: "This is about page" }) ],
    body: `
    ${Header({})}
    <main class="main">
      <div class="container">
        <h1 class="main__header">О нас</h1>
        <p class="main__text">О нас. О нас. О нас. О нас. О нас.О нас. О нас. О нас. О нас. О нас.О нас. О нас. О нас. О нас. Это
        О нас.</p>
      </div>
    </main>
    ${Footer()}
    `,
  });
};

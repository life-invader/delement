import { getMeta, getPage } from "../../shared/lib";
import { Footer } from "../../widgets/footer/ui/footer";
import { Header } from "../../widgets/header/ui/header";

export default () => {
  return getPage({
    title: "Контакты",
    meta: [ getMeta({ name: "description", content: "This is contacts page" }) ],
    body: `
    ${Header({})}
    <main class="main">
      <div class="container">
        <h1 class="main__header">Контакты</h1>
        <p class="main__text">Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты.</p>
      </div>
    </main>
    ${Footer()}
    `,
  });
};

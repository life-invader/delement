import { getMeta, getPage } from "../../shared/lib";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Footer } from "../../widgets/footer/ui/footer";
import { Header } from "../../widgets/header/ui/header";

export default () => {
  return getPage({
    title: "Главная",
    meta: [ getMeta({ name: "description", content: "This is index page" }) ],
    body: ` 
    ${Header({})}
    <main class="main">
      <div class="container">
        <h1 class="main__header">Главная</h1>
        <p class="main__text">Это главная страница. Это главная страница. Это главная страница. Это главная страница. Это
          главная страница. Это главная страница. Это главная страница. Это главная страница. Это главная страница. Это
          главная страница. Это главная страница. Это главная страница. Это главная страница. Это главная страница. Это
          главная страница.
        </p>
        <ul class='main__list'>
          <li>
          ${Button({ label: "Тестовая кнопка" })}
          </li>
          <li>
            ${Button({ label: "Заблокированная кнопка", extraAttrs: { disabled: true } })}
          </li>
          <li>
            ${Input({ extraAttrs: { id: "thisIsId", placeholder: "Это тестовый инпут" } })}
          </li>
          <li>
            ${Input({ extraAttrs: { disabled: true, placeholder: "Заблоченный инпут" } })}
          </li>
        </ul>
      </div>
    </main>
    ${Footer()}
    `,
  });
};

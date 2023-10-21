import { getMeta, getPage } from "../../shared/lib";

export default () => {
  return getPage({
    title: "Контакты",
    meta: [ getMeta({ name: "description", content: "This is contacts page" }) ],
    body: `
    <header class="header">
      <div class="container">
        <nav class="nav header__nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a class="nav__list-link" href="./index.html">Главная</a>
            </li>
            <li class="nav__list-item">
              <a class="nav__list-link" href="./about.html">О нас</a>
            </li>
            <li class="nav__list-item">
              <a class="nav__list-link nav__list-link--active" href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <h1 class="main__header">Контакты</h1>
        <p class="main__text">Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты. Контакты.</p>
      </div>
    </main>
    `,
  });
};

import { getMeta, getPage } from "../../shared/lib";

export default () => {
  return getPage({
    title: "О нас",
    meta: [ getMeta({ name: "description", content: "This is about page" }) ],
    body: `
    <header class="header">
      <div class="container">
        <nav class="nav header__nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a class="nav__list-link" href="./index.html">Главная</a>
            </li>
            <li class="nav__list-item nav__list-link--active">
              <a class="nav__list-link" href="#">О нас</a>
            </li>
            <li class="nav__list-item">
              <a class="nav__list-link" href="./contacts.html">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <h1 class="main__header">О нас</h1>
        <p class="main__text">О нас. О нас. О нас. О нас. О нас.О нас. О нас. О нас. О нас. О нас.О нас. О нас. О нас. О нас. Это
        О нас.</p>
      </div>
    </main>
    `,
  });
};

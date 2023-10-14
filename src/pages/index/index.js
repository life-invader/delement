import { getMeta, getPage } from "../../shared/lib";

export default () => {
  return getPage({
    title: "Главная",
    meta: [ getMeta({ name: "description", content: "This is index page" }) ],
    body: `
    <header class="header">
      <div class="container">
        <nav class="nav header__nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <a class="nav__list-link nav__list-link--active" href="#">Главная</a>
            </li>
            <li class="nav__list-item">
              <a class="nav__list-link" href="./about.html">О нас</a>
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
        <h1 class="main__header">Главная</h1>
        <p class="main__text">Это главная страница. Это главная страница. Это главная страница. Это главная страница. Это
          главная страница. Это главная страница. Это главная страница. Это главная страница. Это главная страница. Это
          главная страница. Это главная страница. Это главная страница. Это главная страница. Это главная страница. Это
          главная страница.</p>
      </div>
    </main>
    `,
  });
};
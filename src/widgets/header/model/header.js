const Pages = {
  index: "main",
  catalog: "catalog",
};

export class HeaderModel {
  node;
  selector = '[data-js-header="header"]';

  constructor() {
    if (HeaderModel.#instance) {
      return HeaderModel.#instance;
    }

    const header = document.querySelector(this.selector);
    this.node = header;
    HeaderModel.#instance = this;

    this.init();
  }

  init() {
    const pathname = window.location.pathname.replace("/", "").replace(".html", "");
    const node = document.querySelector(`[data-url="${pathname}"]`);
    if (Pages[node.dataset.url]) {
      node.classList.add("nav__list-link--active");
    }
  }

  static #instance;
}

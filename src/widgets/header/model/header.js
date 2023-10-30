export class HeaderModel {
  node;

  selector = '[data-js-header="header"]'

  constructor() {
    if (HeaderModel.#instance) {
      return HeaderModel.#instance;
    }

    const header = document.querySelector(this.selector);
    this.node = header;
    HeaderModel.#instance = this;
  }

  run() {
    console.log("Это модель Хедера");
  }

  static #instance;
}

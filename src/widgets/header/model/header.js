export class HeaderModel {
  constructor() {
    if (HeaderModel.#instance) {
      return HeaderModel.#instance;
    }

    const header = document.querySelector('[data-js-header="header"]')
    HeaderModel.#instance = header;
  }

  run() {
    console.log("Это модель Хедера")
    console.log( HeaderModel.#instance)
  }

  static #instance;
}

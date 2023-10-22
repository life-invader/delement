export class HeaderModel {
  constructor() {
    if (HeaderModel.#instance) {
      return HeaderModel.#instance;
    }

    HeaderModel.#instance = this;
  }

  run() {
    console.log("Это модель Хедера, что она должна делать, хз")
  }

  static #instance;
}

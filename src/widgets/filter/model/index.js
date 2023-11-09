import { saveProducts } from "../../../shared/store/actions";

export class FilterModel {
  node;
  buttons;
  allButton;
  selector = "";
  inputSelectors = ".filter input";
  searchParams = new URLSearchParams();

  constructor() {
    if (FilterModel.#instance) {
      return FilterModel.#instance;
    }

    const buttons = document.querySelectorAll(this.inputSelectors);
    const allButton = document.querySelector("[data-search-param=all]");

    if (!allButton) {
      return;
    }

    this.buttons = buttons;
    this.allButton = allButton;

    FilterModel.#instance = this;
    this.init();
  }

  async fetchProducts(params = "") {
    const response = await fetch(`/products/?${params}`);
    const data = await response.json();
    saveProducts(data);
  }

  getSearchParam(button) {
    return button.getAttribute("data-search-param");
  }

  inputChangeHandler = (evt) => {
    const node = evt.currentTarget;
    const isChecked = node.checked;
    const param = this.getSearchParam(node);

    this.allButton.checked = false;
    this.allButton.parentElement.classList.remove("filter__label--active");
    this.searchParams.delete("category", "all");

    if (isChecked) {
      this.searchParams.append("category", param);
      node.parentElement.classList.add("filter__label--active");
    } else {
      this.searchParams.delete("category", param);
      node.parentElement.classList.remove("filter__label--active");
    }

    if (Array.from(this.buttons).every((item) => item.checked === false)) {
      this.allButton.checked = true;
      this.allButton.parentElement.classList.add("filter__label--active");
      this.searchParams.set("category", "all");
    }

    this.fetchProducts(this.searchParams.toString());
  };

  allProductsButtonClick = () => {
    this.buttons.forEach((item) => {
      item.checked = false;
      item.parentElement.classList.remove("filter__label--active");
    });

    this.searchParams.set("category", "all");
    this.allButton.checked = true;
    this.allButton.parentElement.classList.add("filter__label--active");

    this.fetchProducts(this.searchParams.toString());
  };

  init() {
    this.allButton.checked = true;
    this.allButton.parentElement.classList.add("filter__label--active");
    this.searchParams.append("category", "all");

    this.buttons.forEach((button, index) => {
      button.addEventListener(
        "change", index === 0 ? this.allProductsButtonClick : this.inputChangeHandler,
      );
    });

    this.fetchProducts(this.searchParams.toString());
  }

  static #instance;
}

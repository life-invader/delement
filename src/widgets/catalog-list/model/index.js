import { selectProducts, store } from "../../../entities/product/model";
import { ProductCard } from "../../../entities/product/ui";

export class CatalogModel {
  node;

  constructor() {
    this.node = document.querySelector(".list");
    if (!this.node) {
      return;
    }
    
    store.subscribe(this.render);
  }

  render = () => {
    const products = selectProducts();
    this.node.innerHTML = "";

    products.map((item) => {
      this.node.insertAdjacentHTML("afterBegin", ProductCard({ item }));
    });
  };
}

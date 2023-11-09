import { categories } from "../../shared/constants/common";
import { getMeta, getPage } from "../../shared/lib";
import { CatalogList } from "../../widgets/catalog-list/ui";
import { Filter } from "../../widgets/filter/filter";
import { Footer } from "../../widgets/footer/ui/footer";
import { Header } from "../../widgets/header/ui/header";

export default () => {
  return getPage({
    title: "Каталог",
    meta: [ getMeta({ name: "description", content: "Каталог курсов" }) ],
    body: `
      ${Header({})}
      <main class="main catalog">
        <div class="container">
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="/">Главная</a>
            </li>

            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" >Каталог</a>
            </li>
          </ul>

          <h1 class="title main__title">Каталог</h1>
          <div class="catalog__wrapper">
            ${Filter({ categories })}
            ${CatalogList()}
          </div>
        </div>
      </main>
      ${Footer()}
    `,
  });
};

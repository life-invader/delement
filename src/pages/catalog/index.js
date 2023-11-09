import { getMeta, getPage } from "../../shared/lib";
import { CatalogList } from "../../widgets/catalog-list/ui";
import { Filter } from "../../widgets/filter/filter";
import { Footer } from "../../widgets/footer/ui/footer";
import { Header } from "../../widgets/header/ui/header";

const categories = {
  all: {
    name: "Все курсы",
    searchParam: "all",
    isChecked: true,
  },
  backend: {
    name: "Бэкенд-разработка",
    searchParam: "backend",
    isChecked: false,
  },
  web: {
    name: "Веб-разработка",
    searchParam: "web",
    isChecked: false,
  },
  mobile: {
    name: "Мобильная разработка",
    searchParam: "mobile",
    isChecked: false,
  },
  data: {
    name: "Анализ данных",
    searchParam: "data",
    isChecked: false,
  },
  structure: {
    name: "IT-инфраструктура",
    searchParam: "structure",
    isChecked: false,
  },
  management: {
    name: "Управление разработкой",
    searchParam: "management",
    isChecked: false,
  },
};

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

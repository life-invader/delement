import { HeaderModel } from "../widgets/header/model/header";
import { FilterModel } from "../widgets/filter/model/index";
import { CatalogModel } from "../widgets/catalog-list/model";
import { SliderModel } from "../widgets/slider/model/model";
import { CartModel } from "../widgets/cart/model/model";

const runApp = async () => {
  const runWidgets = async () => {
    await Promise.all(
      Object.keys(import.meta.glob("../**/*.pcss", { query: "?inline" })).map((path) =>
        import(`${path}`).then((module) => module?.default ?? module),
      ),
    );
  };

  switch (process.env.NODE_ENV) {
    case "development":
      const { worker } = await import("../shared/api/browser");
      await runWidgets();
      await worker.start();

      new HeaderModel();
      new FilterModel();
      new CatalogModel();
      new SliderModel()
      new CartModel()

      console.warn("App dev run");
  }
};

try {
  await runApp();
} catch (error) {
  console.error(error);
}

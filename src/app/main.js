import "./style.pcss";
import "../widgets/header/ui/style.pcss";
import "../widgets/footer/ui/style.pcss";

import { HeaderModel } from "../widgets/header/model/header";
import { FilterModel } from "../widgets/filter/model/index";
import { CatalogModel } from "../widgets/catalog-list/model";

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

      console.warn("App dev run");
  }
};

try {
  await runApp();
} catch (error) {
  console.error(error);
}

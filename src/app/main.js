import { HeaderModel } from "../widgets/header/model/header";
import "./style.pcss";
import "../widgets/header/ui/style.pcss"
import "../widgets/footer/ui/style.pcss"

const runApp = async () => {
  switch (process.env.NODE_ENV) {
    case "development":
      const { worker } = await import("../shared/api/browser");
      await worker.start();
      console.warn("App dev run");
  }
};

try {
  await runApp();
} catch (error) {
  console.error(error);
}

// Вызов Модели Хедера
const headerModel = new HeaderModel();
headerModel.run();

// Тест MSW
const response = await fetch("/products");
const data = await response.json();
console.log(data);

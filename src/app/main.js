import "./style.pcss";
import javascriptLogo from "../../public/images/javascript.svg";
import viteLogo from "../../public/images/vite.svg";
import { setupCounter } from "../features/counter/counter.js";

const runApp = async () => {
  switch (process.env.NODE_ENV) {
    case "development":
      const { worker } = await import("../mocks/browser");
      await worker.start();
      console.debug("App dev run");
  }
};

try {
  runApp();
} catch (error) {
  console.error(error);
}

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

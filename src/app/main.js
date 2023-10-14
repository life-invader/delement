import "./style.pcss";

const runApp = async () => {
  switch (process.env.NODE_ENV) {
    case "development":
      const { worker } = await import("../shared/api/browser");
      await worker.start();
      console.debug("App dev run");
  }
};

try {
  runApp();
} catch (error) {
  console.error(error);
}

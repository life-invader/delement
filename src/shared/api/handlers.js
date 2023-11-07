import { rest } from "msw";
import { products } from "./mocks";

export const handlers = [
  // Return all products
  rest.get("/products", ({ url }, res, ctx) => {
    const categories = url.searchParams.getAll("category");

    const filteredProducts = products.filter(({ name }) => {
      if (categories.includes("all")) {
        return true;
      }

      return categories.includes(name);
    });

    return res(ctx.json(filteredProducts));
  }),

  // Place new order
  rest.post("/cart", (_req, res, ctx) => {
    return res(ctx.json({ isSuccess: true }));
  }),

  // Remove product to cart
  rest.get("/popular", (_req, res, ctx) => {
    return res(ctx.json(products.slice(0, 7)));
  }),
];

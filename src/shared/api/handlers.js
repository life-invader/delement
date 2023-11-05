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

  rest.post("/cart", (_req, res, ctx) => {
    // Place new order
    return res(ctx.json({ isSuccess: true }));
  }),

  rest.post("/cart/add", (_req, res, ctx) => {
    // Add product to cart
    return res(ctx.json({ isSuccess: true }));
  }),

  rest.delete("/cart", (_req, res, ctx) => {
    // Remove product to cart
    return res(ctx.json({ isSuccess: true }));
  }),

  rest.get("/popular", (_req, res, ctx) => {
    // Remove product to cart
    return res(ctx.json(products.slice(0, 7)));
  }),
];

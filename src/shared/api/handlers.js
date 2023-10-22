import { rest } from "msw";
import { products } from "./mocks";

export const handlers = [
  // Return all products
  rest.get("/products", (_req, res, ctx) => {
    return res(ctx.json(products));
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
];

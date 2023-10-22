import { rest } from "msw";
import { products } from "./mocks";

export const handlers = [
  // Return all products
  rest.get("/products", (_req, res, ctx) => {
    return res(ctx.json(products));
  }),

  rest.post("/cart", (req, res, ctx) => {
    // Place new order
    return res(ctx.json({ isSuccess: true }));
  }),
];

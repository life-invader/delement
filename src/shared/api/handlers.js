import { rest } from "msw";
import { products } from "./mocks";

// 10%
const PROMO = 0.1;

const userSession = {
  isPromoActive: false,
};

const cart = {
  productIds: [],
  qty: 0,
  total: 0,
  totalWithPromo: 0,
};

export const handlers = [
  // Return all products
  rest.get("/products", ({ url }, res, ctx) => {
    if (!url.searchParams.has("category")) {
      return res(ctx.json(products));
    }

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
    cart.productIds = [];
    cart.qty = 0;
    cart.total = 0;
    cart.totalWithPromo = 0;

    userSession.isPromoActive = false;

    return res(ctx.json({ isSuccess: true, message: "Заказ успешно создан!" }));
  }),

  // Save user cart on server after retrieving from local storage
  rest.post("/cart/restore", ({ body: productIds }, res, ctx) => {
    JSON.parse(productIds).map((id) => {
      const product = products.find((item) => item.idProduct === id);

      cart.productIds.push(id);
      cart.qty += 1;
      cart.total += product.price;
    });

    cart.totalWithPromo = cart.total;

    return res(ctx.json(cart));
  }),

  // Add product to cart
  rest.post("/cart/:productId", ({ params }, res, ctx) => {
    const { productId } = params;
    const product = products.find((item) => item.idProduct === productId);

    if (!product) {
      return res(ctx.status(404));
    }

    cart.productIds.push(productId);
    cart.qty += 1;
    cart.total += product.price;
    cart.totalWithPromo = cart.total;

    if (userSession.isPromoActive) {
      cart.totalWithPromo = cart.total - cart.total * PROMO;
    }

    return res(ctx.json(cart));
  }),

  // Remove product from cart
  rest.delete("/cart/:productId", ({ params }, res, ctx) => {
    const { productId } = params;
    const product = products.find((item) => item.idProduct === productId);
    const isInCart = cart.productIds.includes(productId);

    if (!product || !isInCart) {
      return res(ctx.status(404));
    }

    cart.productIds = cart.productIds.filter((item) => item !== productId);
    cart.qty -= 1;
    cart.total -= product.price;
    cart.totalWithPromo = cart.total;

    if (userSession.isPromoActive) {
      cart.totalWithPromo = cart.total - cart.total * PROMO;
    }

    return res(ctx.json(cart));
  }),

  // Get popular products
  rest.get("/popular", (_req, res, ctx) => {
    return res(ctx.json(products.slice(0, 7)));
  }),

  // Activate promo code
  rest.post("/promo/:promo", (_req, res, ctx) => {
    userSession.isPromoActive = true;
    cart.totalWithPromo = cart.total - cart.total * PROMO;

    return res(ctx.json(cart));
  }),
];

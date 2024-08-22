import { Entity } from "electrodb";
import { client } from "../util/db_connection.js";

const Cart = new Entity(
  {
    model: {
      entity: "Cart",
      version: "2",
      service: "CartService",
    },
    attributes: {
      userId: {
        type: "string",
      },
      products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            productId: {
              type: "string",
            },
            name: {
              type: "string",
            },
            description: {
              type: "string",
            },
            price: {
              type: "number",
            },
            type: {
              type: "string",
            },
            StockQuantity: {
              type: "number",
            },
            image: {
              type: "string",
            },
            quantity: {
              type: "number",
            },
          },
        },
      },
      totalPrice: {
        type: "number",
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["userId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "cart" }
);

export { Cart };

import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/db_connection.js";

const Cart = new Entity(
  {
    model: {
      entity: "Cart",
      version: "1",
      service: "CartService",
    },
    attributes: {
      userId: {
        type: "string",
      },
      products: {
        type: "list",
        items: {
          productId: { type: "string" },
          quantity: { type: "number" },
        },
      },
      totalPrice: {
        type: "number",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["userId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "cart" }
);

export { Cart };

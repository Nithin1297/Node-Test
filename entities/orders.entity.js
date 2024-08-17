import { Entity } from "electrodb";
import { client } from "../util/db_connection.js";

const Order = new Entity(
  {
    model: {
      entity: "Order",
      version: "1",
      service: "OrderService",
    },
    attributes: {
      orderId: {
        type: "string",
      },
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
            quantity: {
              type: "number",
            },
            image: {
              type: "string",
            },
          },
        },
      },
      totalPrice: {
        type: "number",
      },
      orderDate: {
        type: "string",
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
  { client, table: "orders" }
);

export { Order };

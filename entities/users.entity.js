import { Entity } from "electrodb"; // ORM - object relational mapping
import { client } from "../util/db_connection.js";

const Users = new Entity(
  {
    model: {
      entity: "User",
      version: "3",
      service: "UserService",
    },
    attributes: {
      username: {
        type: "string",
      },
      password: {
        type: "string",
      },
      roleId: {
        type: "number",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["username"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "users" }
);

export { Users };

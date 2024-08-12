import { Entity } from "electrodb"; // ORM - object relational mapping
import { client } from "../util/db_connection.js";

const Users = new Entity(
  {
    model: {
      entity: "Users",
      version: "1",
      service: "UsersService",
    },
    attributes: {
      username: {
        type: "string",
      },
      password: {
        type: "string",
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
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "users" }
);

export { Users };

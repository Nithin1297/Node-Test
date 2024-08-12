import { Users } from "../entities/users.entity.js";

async function createUser(addUser) {
  return await Users.create(addUser).go();
}

async function getUserByName(username) {
  return await Users.get({ username }).go();
}

export { createUser, getUserByName };

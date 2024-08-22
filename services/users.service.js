import { Users } from "../entities/users.entity.js";
import { Session } from "../entities/session.entity.js";

async function createUser(addUser) {
  return await Users.create(addUser).go();
}

async function getUserByName(username) {
  return await Users.get({ username }).go();
}

async function createSession(sessionData) {
  return await Session.create(sessionData).go();
}

export { createUser, getUserByName, createSession };

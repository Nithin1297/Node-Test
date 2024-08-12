// services/cart.service.js
import { Cart } from "../entities/cart.entity.js";

async function createCart(cartData) {
  return await Cart.create(cartData).go();
}

async function getCartByUserId(userId) {
  return await Cart.get({ userId }).go();
}

async function deleteCart(userId) {
  return Cart.delete({ userId }).go();
}

export { createCart, getCartByUserId, deleteCart };

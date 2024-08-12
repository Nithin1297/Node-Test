// services/cart.service.js
import { Cart } from "../entities/cart.entity.js";

async function createCart(cartData) {
  return await Cart.create(cartData).go();
}

async function getCartByUserId(userId) {
  return await Cart.get({ userId }).go();
}

async function updateCart(userId, updatedData) {
  return Cart.put({
    userId,
    ...updatedData,
  }).go();
}

async function deleteCart(userId) {
  return Cart.delete({ userId }).go();
}

export { createCart, getCartByUserId, updateCart, deleteCart };

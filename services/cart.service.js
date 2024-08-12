import { Cart } from "../entities/cart.entity.js";

async function deleteProductFromCart(id) {
  return Cart.delete({
    productId: id,
  }).go();
}

async function createNewProductToCart(addProduct) {
  return Cart.create(addProduct).go();
}

async function getAllProductsFromCart() {
  return Cart.scan.go();
}

export {
  deleteProductFromCart,
  createNewProductToCart,
  getAllProductsFromCart,
};

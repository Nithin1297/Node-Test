// controller/cart.controller.js
import {
  createCart,
  getCartByUserId,
  updateCart,
  deleteCart,
} from "../services/cart.service.js";
//   import { v4 as uuidv4 } from "uuid";

async function createNewCartCtr(req, res) {
  const data = req.body;
  const userId = data.userId;
  // we get user id , product id, quantity and price from frontend
  const totalPrice = data.quantity * data.price;
  const cartData = {
    userId,
    products: [{ productId: data.productId, quantity: data.quantity }],
    totalPrice,
  };
  const newCart = await createCart(cartData);
  res.status(201).send(newCart.data);
}

async function getCartCtr(req, res) {
    const userId = req.params.id; // Extract userId from request parameters
    const cart = await getCartByUserId(userId);
    if (cart.data) {
      res.send(cart.data);
    } else {
      res.status(404).send({ msg: "Cart not found" });
    }
  }

async function updateCartCtr(req, res) {
  const userId = req.user.id; //
  const updatedData = req.body;
  const updatedCart = await updateCart(userId, updatedData);
  res.send(updatedCart.data);
}

async function deleteCartCtr(req, res) {
  const userId = req.user.id; //
  await deleteCart(userId);
  res.send({ msg: "Cart deleted successfully" });
}

export { createNewCartCtr, getCartCtr, updateCartCtr, deleteCartCtr };

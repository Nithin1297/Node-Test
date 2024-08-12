// controller/order.controller.js
import { createOrder, getOrdersByUserId } from "../services/orders.service.js";
import { v4 as uuidv4 } from "uuid";
import { getCartByUserId } from "../services/cart.service.js";

async function placeOrderCtr(req, res) {
  const data = req.body;
  const userId = data.userId;
  const cartData = await getCartByUserId(userId);

  if (
    !cartData.data ||
    !cartData.data.products ||
    cartData.data.products.length === 0
  ) {
    return res.status(400).send({ msg: "Cart is empty or invalid" });
  }

  const orderData = {
    orderId: uuidv4(),
    userId: userId,
    products: cartData.data.products,
    totalPrice: cartData.data.totalPrice,
    orderDate: new Date().toISOString(),
    status: "Pending",
  };

  try {
    const newOrder = await createOrder(orderData);
    res
      .status(201)
      .send({ msg: "Order Created Successfully", newOrder: newOrder.data });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send({ msg: "Error placing order" });
  }
}

// ----------------------------------------------------------------------------------------------------------------------

async function getUserOrdersCtr(req, res) {
  const userId = req.user.id;
  try {
    const orders = await getOrdersByUserId(userId);
    res.send(orders.data);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send({ msg: "Error fetching orders" });
  }
}

export { placeOrderCtr, getUserOrdersCtr };

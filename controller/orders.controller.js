// controller/order.controller.js
import { createOrder, getOrdersByUserId } from "../services/orders.service.js";
import { v4 as uuidv4 } from "uuid";
import { getCartByUserId, deleteCart } from "../services/cart.service.js";
// import { deleteCart } from "../services/cart.service.js";

async function placeOrderCtr(req, res) {
  const data = req.body;
  const userId = data.userId;
  // const cartData = await getCartByUserId(userId);

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
    await deleteCart(userId);
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send({ msg: "Error placing order" });
  }
}

// ----------------------------------------------------------------------------------------------------------------------

async function getUserOrdersCtr(req, res) {
  const userId = req.params.id;
  console.log(userId);
  try {
    const orders = await getOrdersByUserId(userId);
    console.log({ order: orders.data });
    res.send({ msg: "Fetching successfull", orders: orders.data });
  } catch (error) {
    res.status(500).send({ msg: "Error fetching orders" });
  }
}

export { placeOrderCtr, getUserOrdersCtr };

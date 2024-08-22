import { Order } from "../entities/orders.entity.js";

async function getAllOrder() {
  return (await Order.scan.go()).data;
}
async function createOrders(Orders) {
  await Order.create(Orders).go();
}

export { getAllOrder, createOrders };
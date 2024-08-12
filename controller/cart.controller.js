import {
  deleteProductFromCart,
  createNewProductToCart,
  getAllProductsFromCart,
} from "../services/cart.service.js";
import { v4 as uuidv4 } from "uuid";

async function getAllProductsFromCartCtr(request, response) {
  // response.send(movies);
  const allProducts = await getAllProductsFromCart();
  response.send(allProducts.data);
}

async function deleteProductFromCartCtr(request, response) {
  const { id } = request.params;
  const product = await deleteProductFromCart(id);
  if (product.data) {
    response.send({ msg: "Product deleted 🎉", deletedProduct: product.data });
  } else {
    response.status(404).send("No such Product 🥲");
  }
}

async function createNewProductToCartCtr(req, res) {
  const data = req.body;
  const addProduct = {
    ...data,
    cartId: uuidv4(),
    productId: uuidv4(),
  };
  await createNewProductToCart(addProduct);
  console.log(addProduct);
  res.send(addProduct);
}

export {
  getAllProductsFromCartCtr,
  deleteProductFromCartCtr,
  createNewProductToCartCtr,
};

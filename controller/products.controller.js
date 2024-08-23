import {
  updateProduct,
  deleteProduct,
  createNewProduct,
  getAllProducts,
  getProductById,
} from "../services/products.service.js";
import { v4 as uuidv4 } from "uuid";
import { Products } from "../entities/products.entity.js";

async function getAllProductsCtr(request, response) {
  // response.send(movies);
  // const allProducts = await getAllProducts();
  // response.send(allProducts.data);

  const { search } = request.query;
  if (!search) {
    try {
      const allProducts = await getAllProducts();
      response.status(200).send(allProducts.data);
      return;
    } catch (err) {
      console.log(err);
      response.status(500).send({ msg: " Couldn't get what you wanted " });
    }
  }
  const filterData = await Products.scan
    .where(
      ({ name, description, type }, { contains }) => `
      ${contains(name, search)} OR ${contains(
        description,
        search
      )} OR ${contains(type, search)}
      `
    )
    .go();

  // console.log(filterData);

  response.send(filterData.data);
}

async function getProductByIdCtr(request, response) {
  const { id } = request.params;
  const product = await getProductById(id);
  product.data
    ? response.send(product.data)
    : response.status(404).send({ msg: "Product Not  Found" });
}

async function deleteProductCtr(request, response) {
  const { id } = request.params;
  const product = await deleteProduct(id);
  if (product.data) {
    response.send({ msg: "Product deleted 🎉", deletedProduct: product.data });
  } else {
    response.status(404).send("No such Product 🥲");
  }
}

async function createNewProductCtr(req, res) {
  const data = req.body;
  const addProduct = {
    ...data,
    productId: uuidv4(),
  };
  await createNewProduct(addProduct);
  // console.log(addProduct);
  res.send(addProduct);
}

async function updateProductCtr(request, response) {
  const { id } = request.params;
  const existingData = await getProductById(id);
  const updatedData = request.body;
  if (existingData.data) {
    const mergedData = await updateProduct(existingData, updatedData);
    // console.log(mergedData.data);
    response.send(mergedData.data);
  } else {
    response.status(404).send("No such Product 🥲");
  }
}

export {
  getAllProductsCtr,
  deleteProductCtr,
  createNewProductCtr,
  updateProductCtr,
  getProductByIdCtr,
};

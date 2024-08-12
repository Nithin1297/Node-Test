import { Products } from "../entities/products.entity.js";

async function updateProduct(existingData, updatedData) {
  return Products.put({
    ...existingData.data,
    ...updatedData,
  }).go();
}

async function deleteProduct(id) {
  return Products.delete({
    productId: id,
  }).go();
}

async function createNewProduct(addProduct) {
  return Products.create(addProduct).go();
}

async function getAllProducts() {
  return Products.scan.go();
}

async function getProductById(id) {
    return await Products.get({
      productId: id,
    }).go();
  }

export { updateProduct, deleteProduct, createNewProduct, getAllProducts,getProductById };

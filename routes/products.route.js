import express from "express";
import {
  getAllProductsCtr,
  deleteProductCtr,
  createNewProductCtr,
  updateProductCtr,
  getProductByIdCtr,
} from "../controller/products.controller.js";

const router = express.Router();

router.route("/").get(getAllProductsCtr).post(createNewProductCtr);

router
  .route("/:id")
  .get(getProductByIdCtr)
  .delete(deleteProductCtr)
  .put(updateProductCtr);

export default router;

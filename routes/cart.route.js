import express from "express";
import {
  getAllProductsFromCartCtr,
  deleteProductFromCartCtr,
  createNewProductToCartCtr,
} from "../controller/cart.controller.js";

const router = express.Router();

router
  .route("/")
  .get(getAllProductsFromCartCtr)
  .post(createNewProductToCartCtr);

router.route("/:id").delete(deleteProductFromCartCtr);

export default router;

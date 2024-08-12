// routes/cart.route.js
import express from "express";
import { auth } from "../middleware/auth.middleware.js";
import {
  createNewCartCtr,
  getCartCtr,
  deleteCartCtr,
} from "../controller/cart.controller.js";

const router = express.Router();

router.route("/").post(auth, createNewCartCtr); // Create a new cart

router.route("/:id").get(auth, getCartCtr).delete(auth,deleteCartCtr); // Retrieve the user's cart
export default router;

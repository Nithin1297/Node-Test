// routes/cart.route.js
import express from "express";
import { auth } from "../middleware/auth.middleware.js";
import {
  createNewCartCtr,
  getCartCtr,
  deleteCartCtr,
} from "../controller/cart.controller.js";

const router = express.Router();

router.route("/").put( createNewCartCtr); // Create a new cart

router.route("/:id").get( getCartCtr).delete(auth,deleteCartCtr); // Retrieve the user's cart
export default router;

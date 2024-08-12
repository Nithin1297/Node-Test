// routes/cart.route.js
import express from "express";
import {
  createNewCartCtr,
  getCartCtr,
  updateCartCtr,
  deleteCartCtr,
} from "../controller/cart.controller.js";
import authenticateJWT from "../middleware/auth.middleware.js"; // Assuming you have a middleware for authentication

const router = express.Router();

// router.use(authenticateJWT); // Protect all routes with authentication

router.route("/").post(createNewCartCtr); // Create a new cart

router
  .route("/")
  .put(updateCartCtr) // Update the user's cart
  .delete(deleteCartCtr); // Delete the user's cart

router.route("/:id").get(getCartCtr); // Retrieve the user's cart
export default router;

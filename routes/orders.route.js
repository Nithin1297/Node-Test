import express from "express";
import {
  placeOrderCtr,
  getUserOrdersCtr,
} from "../controller/orders.controller.js";
import authenticateJWT from "../middleware/auth.middleware.js";

const router = express.Router();

// Protect all routes with authentication
// router.use(authenticateJWT);

router.post("/", placeOrderCtr);

router.get("/:id", getUserOrdersCtr);

export default router;

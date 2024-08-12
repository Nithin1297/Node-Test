import express from "express";
import {
  placeOrderCtr,
  getUserOrdersCtr,
} from "../controller/orders.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protect all routes with authentication
// router.use(authenticateJWT);

router.post("/", auth, placeOrderCtr);

router.get("/:id", auth, getUserOrdersCtr);

export default router;

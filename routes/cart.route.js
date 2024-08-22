import express from "express";
const router = express.Router();
import { auth } from "../middleware/auth.middleware.js";
import {
  getAllCartItemCtrl,
  AddToCartCtrl,
  deleteFromCartByIdCtrl,
  tocheckuserid,
} from "../controller/cart.controller.js";
router.get("/", auth, getAllCartItemCtrl);
router.post("/", auth, AddToCartCtrl);
router.delete("/del", auth, deleteFromCartByIdCtrl);
router.get("/:userId", tocheckuserid);
export default router;

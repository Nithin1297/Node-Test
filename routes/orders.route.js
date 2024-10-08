import express from "express";
import { auth } from "../middleware/auth.middleware.js";
const router = express.Router();
import {
  getAllOrderCtrl,
  AddToOrderCtrl,
} from "../controller/orders.controller.js";
router.get("/", auth, getAllOrderCtrl);
router.post("/pay", auth, AddToOrderCtrl);
export default router;
import express from "express";

import { createUserCtr, getUserCtr } from "../controller/users.controller.js";

const router = express.Router();

router.post("/signup", express.json(), createUserCtr);

router.post("/login", express.json(), getUserCtr);

//put method
//router.put("/:id", UpdateMovieByIdCtr);

export default router;

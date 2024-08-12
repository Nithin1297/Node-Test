// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import cors from "cors";
import productRouter from "./routes/products.route.js";
import cartRouter from "./routes/cart.route.js";
const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

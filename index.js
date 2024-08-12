import express from "express";
import cors from "cors";
import productRouter from "./routes/products.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/orders.route.js";
import userRouter from "./routes/users.route.js";
const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/orders", orderRouter);

app.use("/users", userRouter);

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

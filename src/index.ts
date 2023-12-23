import express from "express";
import router from "./routers/cliente.router";
const app = express();

app.use(express.json());

app.use("/", router);
app.listen(5000);


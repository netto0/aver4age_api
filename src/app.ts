require("dotenv").config();
import express from "express";
import router from "./router";
import db from "../config/db";

var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/average_api/", router);

app.listen(4000, async () => {
  await db();
  console.log(`Aplicação rodando na porta 3000`);
});

export default app
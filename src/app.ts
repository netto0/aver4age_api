require("dotenv").config();
import express from "express";
// import config from 'config'
import router from "./router";
import db from "../config/db";

var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173", "http://127.0.0.1:5173"] }));
// app.use(cors());
app.use("/average_api/", router);
app.listen(3000, async () => {
  await db();
  console.log(`Aplicação rodando na porta ${3000}`);
});

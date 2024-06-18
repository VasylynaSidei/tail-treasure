import express from "express";

import {
  addNewMessage,
  deleteMessage,
  getAllMessages,
} from "../controller/msgCtrl.js";

const msgRoute = express.Router();

msgRoute.post("/", addNewMessage);

msgRoute.get("/", getAllMessages);
msgRoute.delete("/:id", deleteMessage);

export default msgRoute;

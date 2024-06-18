import { Schema, model } from "mongoose";

const required = true;

const addressSchema = new Schema({
  street: {
    type: String,
    required,
  },
  city: {
    type: String,
    required,
  },
  state: {
    type: String,
    required,
  },
  postalCode: {
    type: String,
    required,
  },
});

export const Address = model("Address", addressSchema);

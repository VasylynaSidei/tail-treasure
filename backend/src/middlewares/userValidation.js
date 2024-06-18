import { User } from "../models/UserModel.js";
import { validationResult, check } from "express-validator";
import validator from "email-validator";

export const validateUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      // address: { street, city, state, postalCode },
    } = req.body;
    console.log(req.body);
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    check("firstName").isLength({ min: 3 });
    check("lastName").isLength({ min: 3 });
    check("password").isLength({ min: 6 });
    check("password")
      .matches(/[^a-zA-Z0-9]/)
      .withMessage("Password must contain at least one special character");

    if (!validator.validate(email)) {
      res.status(400).json({ error: "Invalid email address" });
      return;
    }

    const errors = validationResult(req);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};

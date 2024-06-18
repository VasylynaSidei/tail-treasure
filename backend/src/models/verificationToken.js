import mongoose from "mongoose";

const verificationTokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const VerificationToken = mongoose.model(
  "VerificationToken",
  verificationTokenSchema
);
export default VerificationToken;

import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide A Valid Email!"],
      },
      phone: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
})
export const Message = mongoose.model("Message", messageSchema);
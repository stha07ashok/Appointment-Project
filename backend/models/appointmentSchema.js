import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First Name Is Required!"],
      minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name Is Required!"],
      minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    email: {
      type: String,
      required: [true, "Email Is Required!"],
      validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    phone: {
      type: String,
      required: [true, "Phone Is Required!"],
      minLength: [10, "Phone number must contain exact 10 numbers"],
      maxLength: [10, "Phone number must contain exact 10 numbers"]
    },
    dob: {
      type: Date,
      required: [true, "DOB Is Required!"],
    },
    gender: {
      type: String,
      required: [true, "Gender Is Required!"],
      enum: ["Male", "Female"],
    },
    appointment_date:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
    },
    hasVisited:{
        type:Boolean,
        default:false
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref: 'Doctor'

    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref: 'Patient'

    },
    address:{
        type: String,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending",
    }
  });

  export const Appointment = mongoose.model("Appointment", appointmentSchema);
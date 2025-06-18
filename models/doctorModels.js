// models/doctorModels.js
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  password: { type: String, required: true },
  speciality: { type: String, required: true },
  degree: { type: String, required: true },
  expreince: { type: Number, required: true },
  about: { type: String, required: true },
  fees: { type: Number, required: true },
  address: { type: Object, required: true },
  date: { type: Date, default: Date.now }
});

const doctorModel = mongoose.model("Doctor", doctorSchema);

export default doctorModel;

import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

export const TestModel = mongoose.model("test", testSchema);

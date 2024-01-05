import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { TestModel } from "./src/models/test-model.js";

const app = express();

app.use(cors());
app.use(express.json());

// app.use(userRouter);

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Babbo2:test1234@cluster0.6s36tpo.mongodb.net/hello"
  );
  console.log("database connected");
};
connectDb();

app.get("/", async (req, res) => {
  const data = await TestModel.find({});
  console.log(data);
  res.json({ data: data });
});

app.post("/", async (req, res) => {
  await TestModel.create({
    name: "hello",
    age: 10,
  });
  res.status(200);
});

app.listen(8000, () => {
  console.log(`Your server running on: http://localhost:8000`);
});

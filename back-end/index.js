import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { TestModel } from "./src/models/test-model.js";
import { quizRouter } from "./src/routers/quiz-router.js";

const app = express();

app.use(cors());
app.use(express.json());

// app.use(userRouter);

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Babbo2:test1234@cluster0.6s36tpo.mongodb.net/quiz"
  );
  console.log("database connected");
};
connectDb();

app.use(quizRouter);

app.listen(8000, () => {
  console.log(`Your server running on: http://localhost:8000`);
});

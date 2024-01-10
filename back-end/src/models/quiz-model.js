import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: String,
  answers: [{ answer: { type: String, required: true }, isCorrect: Boolean }],
});

export const QuizModel = mongoose.model("quiz", quizSchema);

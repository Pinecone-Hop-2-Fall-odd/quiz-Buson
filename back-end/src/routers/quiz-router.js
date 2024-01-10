import express from "express";
import { createQuiz } from "../controllers/quiz-controller.js";
export const quizRouter = express.Router();

quizRouter.post("/quiz", createQuiz);

import { QuizModel } from "../models/quiz-model.js";

export const createQuiz = async (req, res) => {
  try {
    const body = req.body;
    await QuizModel.create(body);
    res.status(200).json({ message: "success" });
  } catch {
    res.status(401).json({ message: "amjiltgui bolloo" });
  }
};

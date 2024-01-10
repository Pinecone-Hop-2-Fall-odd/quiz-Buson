import axios from "axios";
import { useState } from "react";
export default function CreateQuiz() {
  const [quiz, setQuiz] = useState({
    question: "",
    0: { answer: "", isCorrect: false },
    1: { answer: "", isCorrect: false },
    2: { answer: "", isCorrect: false },
    3: { answer: "", isCorrect: false },
  });
  const [checkValue, setCheckValue] = useState();
  // console.log("quiz", quiz);

  function handleQuestion(value) {
    setQuiz((prev) => ({ ...prev, question: value }));
  }
  function handleAnswer(index, value) {
    setQuiz((prev) => ({
      ...prev,
      [index]: { ...prev[index], answer: value },
    }));
  }
  function TrueFalse(index) {
    setQuiz((prev) => ({
      ...prev,
      [index]: { ...prev[index], isCorrect: true },
    }));

    Object.keys(quiz)
      .filter((key) => key !== "question" && key != index)
      .forEach((key) => {
        setQuiz((prev) => ({
          ...prev,
          [key]: { ...prev[key], isCorrect: false },
        }));
      });
  }

  function handleSave() {
    axios.post("http://localhost:8000/quiz", {
      question: quiz.question,
      answers: [quiz[0], quiz[1], quiz[2], quiz[3]],
    });
  }
  return (
    <div className="flex justify-center">
      <img
        className="w-full h-full absolute"
        src="https://geology.com/world/world-map.gif"
      />
      <div>
        <input
          type="text"
          placeholder="Question ..."
          style={{ color: "black" }}
          onChange={(e) => handleQuestion(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[10px] mt-[5px]">
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              TrueFalse(0);
              setCheckValue(0);
            }}
            checked={checkValue == 0}
          />
          <input
            type="text"
            placeholder="Answer ..."
            style={{ color: "black" }}
            onChange={(e) => handleAnswer(0, e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              TrueFalse(1);
              setCheckValue(1);
            }}
            checked={checkValue == 1}
          />
          <input
            type="text"
            placeholder="Answer ..."
            style={{ color: "black" }}
            onChange={(e) => handleAnswer(1, e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              TrueFalse(2);
              setCheckValue(2);
            }}
            checked={checkValue == 2}
          />
          <input
            type="text"
            placeholder="Answer ..."
            style={{ color: "black" }}
            onChange={(e) => handleAnswer(2, e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              TrueFalse(3);
              setCheckValue(3);
            }}
            checked={checkValue == 3}
          />
          <input
            type="text"
            placeholder="Answer ..."
            style={{ color: "black" }}
            onChange={(e) => handleAnswer(3, e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSave} className="bg-white text-black">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

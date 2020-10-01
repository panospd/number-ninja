import numberGenerator from "./numberGenerator";
const appSettings = require("../config/appSettings.json");

const min = appSettings.numberRange[0];
const max = appSettings.numberRange[1];

const generate = (operation = "+") => {
  const number1 = numberGenerator.generate(min, max);
  const number2 = numberGenerator.generate(min, max);

  const correctAnswer = calculate(number1, number2, operation);
  const correctAnswerIndex = numberGenerator.generate(0, 3);

  const answers = createAnswers(correctAnswer, correctAnswerIndex);

  return {
    question: {
      title: "What is the outcome of the following operation?",
      number1,
      number2,
      operation,
    },
    answer: {
      correctAnswerIndex,
      answers,
    },
  };
};

const createAnswers = (correctAnswer, correctAnswerIndex) => {
  const answers = new Array(4);

  answers[correctAnswerIndex] = correctAnswer;

  let deviationFromCorrect = 0;

  for (let i = 0; i < 4; i++) {
    if (answers[i] || answers[i] === 0) continue;

    deviationFromCorrect = numberGenerator.generate(
      -8,
      9,
      deviationFromCorrect
    );

    answers[i] =
      correctAnswer +
      numberGenerator.generate(
        appSettings.deviationFromCorrect.left,
        appSettings.deviationFromCorrect.right
      );
  }

  return answers;
};

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    default:
      throw new Error("Operation not specified");
  }
};

export default {
  generate,
};

import numberGenerator from "./numberGenerator";
numberGenerator;

const generate = (operation = "+") => {
  const number1 = numberGenerator.generate();
  const number2 = numberGenerator.generate();

  const correctAnswer = calculate(number1, number2, operation);

  const correctAnswerPosition = numberGenerator.generate(0, 3);

  const answers = new Array(4);

  answers[correctAnswerPosition] = correctAnswer;

  for (let i = 0; i < 4; i++) {
    answers[i] =
      answers[i] || answers[i] === 0
        ? answers[i]
        : correctAnswer + numberGenerator.generate(-8, 9);
  }

  return {
    question: {
      title: "What is the outcome of the following operation?",
      number1,
      number2,
      operation,
    },
    answer: {
      correctAnswerPosition,
      answers,
    },
  };
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

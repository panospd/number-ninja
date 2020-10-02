import React, { useEffect, useState } from "react";

import GameScreen from "./screens/GameScreen";
import AppContext from "./context";
import numberGenerator from "./utility/numberGenerator";
import questionGenerator from "./utility/questionGenerator";
import WelcomeScreen from "./screens/WelcomeScreen";

const appSettings = require("./config/appSettings.json");

export default function App() {
  const [timer, setTimer] = useState(0);
  const [responses, setResponses] = useState([]);
  const [nextQuestionContainer, setNextQuestionContainer] = useState();

  const handleResponse = (answer, correctAnswer) => {
    setResponses(values => [...values, answer === correctAnswer]);
  };

  const suffleOperation = () => {
    return appSettings.operations[numberGenerator.generate(0, 1)];
  };

  const reset = () => {
    setTimer(appSettings.roundTime);
    setResponses([]);
  };

  const createNewGame = () => {
    reset();
    const intervalId = setInterval(() => {
      setTimer(value => {
        if (value === 0) return clearInterval(intervalId);

        return value - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    setNextQuestionContainer(questionGenerator.generate(suffleOperation()));
  }, [responses]);

  const gameInProgress = nextQuestionContainer && timer;

  return (
    <AppContext.Provider value={{ handleResponse }}>
      {gameInProgress ? (
        <GameScreen
          questionContainer={nextQuestionContainer}
          timer={timer}
          responses={responses}
        />
      ) : (
        <WelcomeScreen responses={responses} createNewGame={createNewGame} />
      )}
    </AppContext.Provider>
  );
}

import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import BoxContainer from "./app/components/BoxContainer";
import Button from "./app/components/Button";
import QuestionContainer from "./app/components/QuestionContainer";
import ScoreContainer from "./app/components/ScoreContainer";
import TimerContainer from "./app/components/TimerContainer";
import AppContext from "./context";
import numberGenerator from "./utility/numberGenerator";
import questionGenerator from "./utility/questionGenerator";

const operations = ["+", "-"];

export default function App() {
  const [timer, setTimer] = useState(0);
  const [responses, setResponses] = useState([]);
  const [nextQuestionContainer, setNextQuestionContainer] = useState();

  const handleResponse = (answer, correctAnswer) => {
    setResponses(values => [...values, answer === correctAnswer]);
  };

  const suffleOperation = () => {
    return operations[numberGenerator.generate(0, 1)];
  };

  const reset = () => {
    setTimer(30);
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

  return (
    <AppContext.Provider value={{ handleResponse }}>
      <View style={styles.container}>
        {nextQuestionContainer && timer ? (
          <>
            <QuestionContainer question={nextQuestionContainer.question} />
            <BoxContainer answer={nextQuestionContainer.answer} />
            <TimerContainer time={timer} />
            <ScoreContainer responses={responses} />
          </>
        ) : (
          <>
            {responses.length !== 0 && <ScoreContainer responses={responses} />}
            <Button title="New Game" onPress={createNewGame} />
          </>
        )}
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

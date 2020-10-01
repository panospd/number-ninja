import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import BoxContainer from "./app/components/BoxContainer";
import QuestionContainer from "./app/components/QuestionContainer";
import ScoreContainer from "./app/components/ScoreContainer";
import AppContext from "./context";
import numberGenerator from "./utility/numberGenerator";
import questionGenerator from "./utility/questionGenerator";

const operations = ["+", "-"];

export default function App() {
  const [responses, setResponses] = useState([]);
  const [nextQuestionContainer, setNextQuestionContainer] = useState();

  const handleResponse = (answer, correctAnswer) => {
    setResponses(values => [...values, answer === correctAnswer]);
  };

  const suffleOperation = () => {
    return operations[numberGenerator.generate(0, 1)];
  };

  useEffect(() => {
    setNextQuestionContainer(questionGenerator.generate(suffleOperation()));
  }, [responses]);

  return (
    <AppContext.Provider value={{ handleResponse }}>
      {nextQuestionContainer && (
        <View style={styles.container}>
          <QuestionContainer question={nextQuestionContainer.question} />
          <BoxContainer answer={nextQuestionContainer.answer} />
          <ScoreContainer responses={responses} />
        </View>
      )}
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

import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import appStyles from "../../config/appStyles";
import AppContext from "../../context";

import Box from "./Box";

export default function BoxContainer({ answer, style }) {
  const { handleResponse } = useContext(AppContext);

  const { answers, correctAnswerIndex } = answer;

  return (
    <View style={[style, styles.container]}>
      <Box
        bgColor={appStyles.colors.ligntBlue}
        number={answers[0]}
        onPress={() => handleResponse(answers[0], answers[correctAnswerIndex])}
      />
      <Box
        bgColor={appStyles.colors.ligntGreen}
        number={answers[1]}
        onPress={() => handleResponse(answers[1], answers[correctAnswerIndex])}
      />
      <Box
        bgColor={appStyles.colors.orange}
        number={answers[2]}
        onPress={() => handleResponse(answers[2], answers[correctAnswerIndex])}
      />
      <Box
        bgColor={appStyles.colors.pink}
        number={answers[3]}
        onPress={() => handleResponse(answers[3], answers[correctAnswerIndex])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "flex-start",
  },
});

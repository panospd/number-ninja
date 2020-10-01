import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appStyles from "../../config/appStyles";

export default function QuestionContainer({
  question: { title, number1, number2, operation },
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.operation}>
        {`${number1} ${operation} ${number2} = `}
        <Text style={styles.questionMark}>?</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    width: "80%",
  },
  title: {
    fontSize: appStyles.fonts.medium,
    textAlign: "center",
  },
  operation: {
    fontSize: appStyles.fonts.large,
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
  },
  questionMark: {
    color: appStyles.colors.red,
  },
});

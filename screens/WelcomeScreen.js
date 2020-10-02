import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../app/components/Screen";

export default function WelcomeScreen({ createNewGame, responses }) {
  return (
    <Screen>
      <Image style={styles.image} source={require("./assets/logo.png")} />
      {responses.length !== 0 && <ScoreContainer responses={responses} />}
      <Button title="New Game" onPress={createNewGame} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
  },
});

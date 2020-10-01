import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appStyles from "../../config/appStyles";

export default function ScoreContainer({ responses }) {
  if (!responses) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.score}>Score:</Text>{" "}
        {`${responses.filter(r => r).length} / ${responses.length}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 100 },
  text: {
    fontSize: appStyles.fonts.large,
  },
  score: {
    fontSize: appStyles.fonts.medium,
  },
});

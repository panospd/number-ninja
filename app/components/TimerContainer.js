import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appStyles from "../../config/appStyles";

export default function TimerContainer({ time }) {
  const getColor = time => {
    if (time > 14) return appStyles.colors.lime;

    if (time > 4) return appStyles.colors.orange;

    return appStyles.colors.red;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: getColor(time) }]}>{time}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  text: {
    fontSize: appStyles.fonts.large,
  },
});

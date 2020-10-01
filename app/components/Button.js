import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import appStyles from "../../config/appStyles";

export default function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.container]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.colors.ligntBlue,
    marginTop: 40,
    borderRadius: 20,
  },
  text: {
    color: appStyles.colors.dark,
    fontSize: appStyles.fonts.medium,
    padding: 20,
    textTransform: "uppercase",
  },
});

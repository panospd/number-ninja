import React from "react";
import { View, StyleSheet, TouchableNativeFeedback, Text } from "react-native";
import appStyles from "../../config/appStyles";

export default function Box({ bgColor, number, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text style={styles.text}>{number}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  box: {
    flexGrow: 1,
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: appStyles.fonts.large,
    color: appStyles.colors.dark,
  },
});

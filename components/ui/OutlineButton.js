import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
// import { Colors } from "../constants/colors";


function OutlineButton({ onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 40,
    backgroundColor: "#ac9fbb",
    width: 200,
  },
  pressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#f7ebec",
    fontSize: 14,
  },
});

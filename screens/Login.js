import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import OutlineButton from "../components/ui/OutlineButton";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>
        Please fill in your email and password to login to account
      </Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Email" style={styles.input} autoCorrect={false} autoComplete="off" />
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="Password" style={styles.input} secureTextEntry autoCorrect={false} autoComplete="off" />
        <Pressable style={styles.forgotPasswordContainer}>
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <OutlineButton >LOGIN</OutlineButton>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>Don't have an account? Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D1E2C",
    marginBottom: 10,
    fontFamily: "Nunito-Black",

  },
  subtitle: {
    fontSize: 14,
    color: "#1D1E2C",
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1D1E2C",
    marginBottom: 8,
  },
  input: {
    borderColor: "#1D1E2C",
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    marginBottom: 20,
  },
  forgotPasword: {
    fontSize: 10,
    color: "#1D1E2C",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  signupText: {
    marginTop: 10,
    fontSize: 14,
    color: "#1D1E2C",
  },
});

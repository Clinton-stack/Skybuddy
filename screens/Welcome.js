import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import OutlineButton from "../components/ui/OutlineButton";
import { LinearGradient } from "expo-linear-gradient";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/welcomebackground.png")}
      style={styles.background}
    >
      <LinearGradient 
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to SkyBuddy</Text>
          <Text style={styles.subtitle}>Your Weather Companion</Text>
          <View style={styles.buttonContainer}>
            <OutlineButton onPress={() => navigation.navigate("SignUp")}>
              SIGN UP
            </OutlineButton>
          </View>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Have an account? Login</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  gradient:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Nunito-Black",

  },
  buttonContainer: {
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  loginText: {
    marginTop: 10,
    color: "#fff",
  },
});

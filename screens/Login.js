import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import OutlineButton from "../components/ui/OutlineButton";
import {Styles} from "../constants/styles";

function Login({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Welcome Back!</Text>
      <Text style={Styles.subtitle}>
        Please fill in your email and password to login to account
      </Text>
      <View>
        <Text style={Styles.label}>Email</Text>
        <TextInput placeholder="Email" style={Styles.input} autoCorrect={false} autoComplete="off" />
        <Text style={Styles.label}>Password</Text>
        <TextInput placeholder="Password" style={Styles.input} secureTextEntry autoCorrect={false} autoComplete="off" />
        <Pressable style={Styles.forgotPasswordContainer}>
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>

      <View style={Styles.buttonContainer}>
        <OutlineButton onPress={()=> navigation.navigate('Dashboard')}>LOGIN</OutlineButton>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={Styles.signupText}>Don't have an account? Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;


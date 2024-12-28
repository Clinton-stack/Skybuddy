import { Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import OutlineButton from '../components/ui/OutlineButton'
import { Styles } from '../constants/styles'

const SignUp = ({navigation}) => {
  return (
    <View style={Styles.container}>
    <Text style={Styles.title}>Sign Up</Text>
    <Text style={Styles.subtitle}>
      Please fill in your details to create an account
    </Text>
    <View>
      <Text style={Styles.label}>Username</Text>
      <TextInput placeholder="Username" style={Styles.input} autoCorrect={false} autoComplete="off" />
      <Text style={Styles.label}>Email</Text>
      <TextInput placeholder="Email" style={Styles.input} autoCorrect={false} autoComplete="off" />
      <Text style={Styles.label}>Password</Text>
      <TextInput placeholder="Password" style={Styles.input} secureTextEntry autoCorrect={false} autoComplete="off" />
      <Text style={Styles.label}>Confirm Password</Text>
      <TextInput placeholder="Confirm Password" style={Styles.input} secureTextEntry autoCorrect={false} autoComplete="off" />
    </View>

    <View style={Styles.buttonContainer}>
      <OutlineButton onPress={() => navigation.navigate('Registration')}>SIGN UP</OutlineButton>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={Styles.signupText}>Already have an account? Sign In</Text>
      </Pressable>
    </View>
  </View>
  )
}

export default SignUp

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';



export default function App() {
  const Stack = createNativeStackNavigator();
  const tab = createBottomTabNavigator();
  const [fontsLoaded] = useFonts({
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
  });

  useEffect(() => {
    // Keep splash screen visible until fonts are loaded
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing while waiting
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: "#d7b9bc", 
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: {
              backgroundColor: "#d7b9bc",
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false}}/> 
          <Stack.Screen name="Login" component={Login} /> 

        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddbdd5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

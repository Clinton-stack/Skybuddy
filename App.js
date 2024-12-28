import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import Welcome from "./screens/Welcome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import SignUp from "./screens/SignUp";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import Notification from "./screens/Notification";
import Resources from "./screens/Resources";
import Settings from "./screens/Settings";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
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

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#d7b9bc",
            shadowColor: "#000", 
            shadowOffset: { width: 0, height: -3 }, 
            shadowOpacity: 0.2, 
            shadowRadius: 3,
            elevation: 5,
          }, 
          headerShown: false, // Disable the header
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Define icons for each route
            if (route.name === "Dashboard") {
              iconName = "home-outline";
            } else if (route.name === "Notification") {
              iconName = "notifications-outline";
            } else if (route.name === "Resources") {
              iconName = "book-outline";
            } else if (route.name === "Settings") {
              iconName = "settings-outline";
            }

            // Render the Ionicons icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false, // Hide the labels for each tab
          tabBarActiveTintColor: "#000", // Active icon color
          tabBarInactiveTintColor: "#888", // Inactive icon color
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Resources" component={Resources} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
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
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: "",
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerTitle: "",
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerTitle: "",
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddbdd5",
    alignItems: "center",
    justifyContent: "center",
  },
});

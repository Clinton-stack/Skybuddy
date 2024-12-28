import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { weatherData } from "../constants/weatherData";
import WeekWeather from "../components/WeekWeather";

const Dashboard = () => {
  return (
    <ImageBackground
      source={require("../assets/clearsky.png")}
      style={styles.background}
    >
      {/* Main Weather Section */}
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.5)"]}
          style={styles.gradient}
        >
          <View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.title}>Abuja</Text>
              <Text style={styles.subtitle}>Clear Sky</Text>
            </View>
            <View>
              <View style={styles.humidtyContainer}>
                <Text style={styles.humidText}>Humidity</Text>
                <Text style={styles.humidText2}>20%</Text>
              </View>
              <View style={styles.humidtyContainer}>
                <Text style={styles.humidText}>Wind</Text>
                <Text style={styles.humidText2}>20km/h</Text>
              </View>
            </View>
          </View>
          <View style={styles.tempContainer}>
            <Image source={require("../assets/weather-icons/sunny-icon.png")} />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.tempText}>30</Text>
              <Text style={styles.degreeText}>°C</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Weather Forecast Section for other weeks */}
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.5)"]}
          style={styles.gradient2}
        >
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={weatherData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <WeekWeather data={item} />}
            style={{ marginBottom: 40 }}
          />
          {/* Tips for the day */}
          <View>
            <Text style={styles.tipsTitleText}>Rainy Day Ahead!</Text>
            <Text style={styles.tipsSubText}>
              You might wanna move with your umbrella
            </Text>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 100,
    padding: 20,
    justifyContent: "space-between",
  },
  gradient: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  gradient2: {
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Nunito-Black",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Nunito-Regular",
  },
  humidtyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  humidText: {
    color: "#fff",
    fontWeight: 300,
    fontSize: 14,
    marginRight: 5,
  },
  humidText2: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 14,
  },
  tempContainer: {
    alignItems: "flex-end",
  },
  tempText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 48,
    fontFamily: "Nunito-Bold",
  },
  degreeText: {
    fontSize: 18, // Smaller font size for superscript effect
    fontWeight: "bold",
    color: "#fff", // Adjust as needed
    alignSelf: "flex-start", // Aligns the °C text slightly higher
  },
  tipsTitleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  tipsSubText: {
    color: "#fff",
    fontSize: 16,
  },
});

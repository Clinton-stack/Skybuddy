import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const WeekWeather = ({data}) => {
    const {day, temp, wind} = data;
    let {weatherType} = data;
    
    if(weatherType === "Clear"){
        weatherType = require("../assets/weather-icons/sunny-little-cloud-icon.png");
    }
    else if(weatherType === "Clouds"){
        weatherType = require("../assets/weather-icons/cloudy-sunny-icon.png");
    }
    else if(weatherType === "Rain"){
        weatherType = require("../assets/weather-icons/rainy-cloudy-icon.png");
    }
    // else if(weatherType === "Snow"){
    //     weatherType = require("../assets/weather-icons/snow-icon.png");
    // }
    // else if(weatherType === "Thunderstorm"){
    //     weatherType = require("../assets/weather-icons/thunderstorm-icon.png");
    // }
    // else if(weatherType === "Mist"){
    //     weatherType = require("../assets/weather-icons/mist-icon.png");
    // }
    // else if(weatherType === "Haze"){
    //     weatherType = require("../assets/weather-icons/haze-icon.png");
    // }
    // else if(weatherType === "Dust"){
    //     weatherType = require("../assets/weather-icons/dust-icon.png");
    // }
    // else if(weatherType === "Fog"){
    //     weatherType = require("../assets/weather-icons/fog-icon.png");
    // }
    // else if(weatherType === "Sand"){
    //     weatherType = require("../assets/weather-icons/sand-icon.png");
    // }
    // else if(weatherType === "Ash"){
    //     weatherType = require("../assets/weather-icons/ash-icon.png");
    // }
    // else if(weatherType === "Squall"){
    //     weatherType = require("../assets/weather-icons/squall-icon.png");
    // }
    // else if(weatherType === "Tornado"){
    //     weatherType = require("../assets/weather-icons/tornado-icon.png");
    // }
    else{
        weatherType = require("../assets/weather-icons/sunny-icon.png");
    }
  return (
    <View style={styles.forcastContainer} >
      <Text style={styles.daytext}>{day}</Text>
      <Image
        source={weatherType}
        style={styles.weatherIcons}
        
      />
     
      <Text style={styles.temp2text}>{temp}</Text>
      <Text style={styles.windSpeedText}>{wind}</Text>
      <Text style={styles.windSpeedText}>km/h</Text>
      
    </View>
  );
};

export default WeekWeather;

const styles = StyleSheet.create({
    daytext: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "bold",
      },
      weatherIcons: {
        width: 50,
        height: 44,
        padding: 10,
        
      },
      temp2text: {
        color: "#fff",
        fontSize: 16,
      },
      windSpeedText: {
        color: "#fff",
        fontSize: 10,
      },
     
      forcastContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
      },
    
});

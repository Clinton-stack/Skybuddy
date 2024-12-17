import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Button,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import OutlineButton from "../components/ui/OutlineButton";
import { data } from "../constants/onboardindData";

function Onboarding() {
  const { width } = Dimensions.get("window");

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require("../assets/coolimage.png")} style={styles.image} />

      <Carousel
        ref={carouselRef}
        loop={false}
        data={data}
        renderItem={renderItem}
        width={width}
        onSnapToItem={(index) => setCurrentIndex(index)}
        style={styles.carousel}
      />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <OutlineButton
          onPress={() => {
            if (currentIndex < data.length - 1) {
              carouselRef.current.scrollTo({
                index: currentIndex + 1,
                animated: true,
              });
            } else {
              console.log("Onboarding Complete!"); // Replace this with navigation logic
            }
          }}
        >
          {currentIndex < data.length - 1 ? "NEXT" : "GET STARTED"}
        </OutlineButton>
      </View>      
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  carousel: {
    height: 200,
    marginBottom: 0,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#625d5d",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Nunito",
  },
  text: {
    fontSize: 16,
    color: "#625d5d",
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    
  },
  dot: {
    width: 20,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#1d1e2c", // Active color
  },
  inactiveDot: {
    backgroundColor: "#ccc", // Inactive color
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 250,
  },
});

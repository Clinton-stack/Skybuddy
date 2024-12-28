import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const NotificationList = ({ data, onPress }) => {
  const { title, description, time } = data;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* 90% Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{description}</Text>
      </View>

      {/* 10% Section */}
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
        <Feather name="more-horizontal" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",  
    alignItems: "center", 
    borderColor: "#ac9fbb",
    borderBottomWidth: 0.5,
    paddingHorizontal: 30, 
    paddingVertical: 20,
  },
  contentContainer: {
    flex: 9, 
    flexShrink: 1, 
    paddingRight: 10, 
  },
  timeContainer: {
    flex: 1, 
    alignItems: "flex-end", 
    justifyContent: "center", 
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Nunito-Black",
  },
  description: {
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
  time: {
    fontSize: 10,
  },
});

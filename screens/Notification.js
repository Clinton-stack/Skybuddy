import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OutlineButton from "../components/ui/OutlineButton";
import { Styles } from "../constants/styles";
import { NotificationData } from "../constants/notificationData";
import NotificationList from "../components/NotificationList";

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={Styles.title}>Notifications</Text>
      
      </View>
      <FlatList
          data={NotificationData}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => (
            <NotificationList
              data={item}
              onPress={() => navigation.navigate("MoreDetails")}
            />
          )}
        />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7b9bc",
  },
  innerContainer: {
    marginTop: 100,
    padding: 30,
  },
});

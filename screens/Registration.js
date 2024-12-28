import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Styles } from "../constants/styles";
import OutlineButton from "../components/ui/OutlineButton";
import { Dropdown } from "react-native-element-dropdown";
import { ageRange, coolingSystemData, dailyRoutineOptions, heatingSystemData, insulationQualityData, specialConditions } from "../constants/regData";

const Registration = ({navigation}) => {
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [heatingSystem, setHeatingSystem] = useState(null);
  const [coolingSystem, setCoolingSystem] = useState(null);
  const [insulationQuality, setInsulationQuality] = useState(null);
  const [dailyRoutine, setDailyRoutine] = useState(null);


  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>Let's Get Started</Text>
      <Text style={Styles.subtitle}>
        Please fill in your details to complete your registration
      </Text>

      <View>
        {/* Personal Information */}
        <Text style={Styles.label}>First Name</Text>
        <TextInput
          placeholder="First Name"
          style={Styles.input}
          autoCorrect={false}
          autoComplete="off"
        />
        <Text style={Styles.label}>Last Name</Text>
        <TextInput
          placeholder="Last Name"
          style={Styles.input}
          autoCorrect={false}
          autoComplete="off"
        />

        {/* Age Range Dropdown */}
        <Text style={Styles.label}>Age Range</Text>
        <Dropdown
          style={dropdownStyles.dropdown}
          data={ageRange}
          labelField="label"
          valueField="value"
          placeholder="Select Age Range"
          placeholderStyle={{ color: "#8a8383" }}
          value={selectedAgeRange}
          onChange={(item) => setSelectedAgeRange(item.value)}
        />

        {/* Special Conditions Dropdown */}
        <Text style={Styles.label}>Special Conditions</Text>
        <Dropdown
          style={dropdownStyles.dropdown}
          data={specialConditions}
          labelField="label"
          valueField="value"
          placeholder="Select Special Conditions"
          placeholderStyle={{ color: "#8a8383" }}
          value={selectedCondition}
          onChange={(item) => setSelectedCondition(item.value)}
        />

        {/* Home Details */}
        <Text style={Styles.label}>Heating System</Text>
        <Dropdown
          style={dropdownStyles.dropdown}
          data={heatingSystemData}
          labelField="label"
          valueField="value"
          placeholder="Select Heating System"
          placeholderStyle={{ color: "#8a8383" }}
          value={heatingSystem}
          onChange={(item) => setHeatingSystem(item.value)}
        />
        <Text style={Styles.label}>Cooling System</Text>
        <Dropdown
          style={dropdownStyles.dropdown}
          data={coolingSystemData}
          labelField="label"
          valueField="value"
          placeholder="Select Cooling System"
          placeholderStyle={{ color: "#8a8383" }}
          value={coolingSystem}
          onChange={(item) => setCoolingSystem(item.value)}
        />
        <Text style={Styles.label}>Insulation Quality</Text>
        <Dropdown
          style={dropdownStyles.dropdown}
          data={insulationQualityData}
          labelField="label"
          valueField="value"
          placeholder="Select Insulation Quality"
          placeholderStyle={{ color: "#8a8383" }}
          value={insulationQuality}
          onChange={(item) => setInsulationQuality(item.value)}
        />

        {/* Daily Routine Dropdown */}
        <Text style={Styles.label}>Lifestyle and Routine</Text>
        <Dropdown
          style={dropdownStyles.dropdown}
          data={dailyRoutineOptions}
          labelField="label"
          valueField="value"
          placeholder="Select Lifestyle"
          placeholderStyle={{ color: "#8a8383" }}
          value={dailyRoutine}
          onChange={(item) => setDailyRoutine(item.value)}
          
        />
      </View>

      <View style={dropdownStyles.buttonContainer}>
        <OutlineButton onPress={()=> navigation.navigate('Dashboard') }>FINISH</OutlineButton>
      </View>
    </ScrollView>
  );
};

const dropdownStyles = StyleSheet.create({
  dropdown: {
    marginVertical: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#1D1E2C",
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 50,
  },
});

export default Registration;

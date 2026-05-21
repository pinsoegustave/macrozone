import { globalStyles } from "@/styles/global";
import * as Device from "expo-device";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Macrozone!</Text>
      <Text style={styles.date}>Monday, March 16</Text>
      <Text>Device Model: {Device.modelName}</Text>
      <Text>Device Brand: {Device.brand}</Text>
      <Text>OS version: {Device.osVersion} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 4,
    marginBottom: 30,
  },
});

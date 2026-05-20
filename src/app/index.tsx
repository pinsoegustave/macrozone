import * as Device from "expo-device";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Macrozone!</Text>
      <Text style={styles.date}>Monday, March 16</Text>
      <Text>Device Model: {Device.modelName}</Text>
      <Text>Device Brand: {Device.brand}</Text>
      <Text>OS version: {Device.osVersion} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffffff",
  },
  date: {
    fontSize: 14,
    color: "a0a0b0",
    marginTop: 4,
    marginBottom: 30,
  },
});

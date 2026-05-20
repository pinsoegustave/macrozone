import * as Device from "expo-device";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Macrozone!</Text>
      <Text>Running on: {Platform.OS}</Text>
      <Text>Device Model: {Device.modelName}</Text>
      <Text>Device Brand: {Device.brand}</Text>
      <Text>OS version: {Device.osVersion} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

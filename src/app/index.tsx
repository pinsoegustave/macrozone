import { Text } from "@react-navigation/elements";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>this is my second react native app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

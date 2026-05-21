import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Macrozone! </Text>
      <HomeHeader />
      <Link href="/meals" style={{ fontSize: 18, color: "#007bff" }}>
        Go to Meals
      </Link>
    </ScrollView>
  );
}

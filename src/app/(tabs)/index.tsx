import { globalStyles } from "@/styles/global";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import HomeHeader from "../../components/HomeHeader";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Macrozone! </Text>
      <HomeHeader />
      <TouchableOpacity style={{ marginTop: 16 }} onPress={() => {}}>
        <Text style={{ fontSize: 18, color: "#007bff" }}>Go to Meals</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

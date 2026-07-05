import MacroGrid from "@/components/MacroGrid";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../../components/HomeHeader";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
    </ScrollView>
  );
}

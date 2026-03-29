import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/components/navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
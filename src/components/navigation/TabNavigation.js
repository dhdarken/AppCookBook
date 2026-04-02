import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import RecipePage from "../../pages/RecipePag/RecipePag";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ headerShown: false, title: "Inicio" }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipePage} 
        options={{ title: "Recetas" }}
      />
    </Tab.Navigator>
  );
}

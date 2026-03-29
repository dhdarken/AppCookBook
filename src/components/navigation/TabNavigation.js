import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipeCard from "../RecipeCard/RecipeCard";
import { HomeStack } from "./HomeStack";

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
        component={RecipeCard}
        options={{ headerShown: false, title: "Recetas" }}
      />
    </Tab.Navigator>
  );
}

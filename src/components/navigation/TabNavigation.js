import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import RecipePage from "../../pages/RecipePag/RecipePag";

// 🔥 IMPORTANTE
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // 🔥 ICONOS DINÁMICOS
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = "home-outline";
          } else if (route.name === "Recipes") {
            iconName = "restaurant-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        // 🎨 ESTILO
        tabBarActiveTintColor: "#6366f1", // color activo
        tabBarInactiveTintColor: "#888", // inactivo
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#ddd",
          height: 60,
          paddingBottom: 5,
        },

        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: "Inicio" }}
      />

      <Tab.Screen
        name="Recipes"
        component={RecipePage}
        options={{ title: "Recetas" }}
      />
    </Tab.Navigator>
  );
}
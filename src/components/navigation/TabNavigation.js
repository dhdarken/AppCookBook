import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import RecipePage from "../../pages/RecipePag/RecipePag";
import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Recipes") {
            iconName = focused
              ? "restaurant"
              : "restaurant-outline";
          }

         
          const scale = focused ? 1.2 : 1;

          return (
            <Animated.View style={{ transform: [{ scale }] }}>
              <Ionicons name={iconName} size={size} color={color} />
            </Animated.View>
          );
        },

  
        tabBarActiveTintColor: "#6366f1",
        tabBarInactiveTintColor: "#999",

   
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          height: 60,

          backgroundColor: "#fff",
          borderRadius: 20,

    
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,

     
          elevation: 10,

          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
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
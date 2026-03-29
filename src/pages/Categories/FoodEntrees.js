import { View, Text, ScrollView } from "react-native";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export default function FoodEntrees({ navigation }) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando las recetas...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView>
        <Text style={{ fontSize: 20, margin: 10 }}>Entradas</Text>

        <RecipeCard
          title="Empanadas colombianas"
          descrip="Plato típico delicioso"
          category="FoodEntrees"
          onPress={() => navigation.navigate("Detail")}
        />

        <RecipeCard
          title="Chorizo"
          descrip="Muy fácil de preparar"
          category="FoodEntrees"
          onPress={() => navigation.navigate("Detail")}
        />
      </ScrollView>
    </View>
  );
}
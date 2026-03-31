import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function RecipePage({ navigation }) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando recetas...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Entradas</Text>

        <RecipeCard
          title="Empanadas colombianas"
          descrip="Plato típico delicioso"
          onPress={() => navigation.navigate("Detail")}
        />

        <RecipeCard
          title="Chorizo"
          descrip="Muy fácil de preparar"
          onPress={() => navigation.navigate("Detail")}
        />

        <RecipeCard
          title="Pollo al horno"
          descrip="Clásico delicioso"
          onPress={() => navigation.navigate("Detail")}
        />

        <RecipeCard
          title="Lasaña de pollo"
          descrip="Capas de sabor increíble"
          onPress={() => navigation.navigate("Detail")}
        />

        <RecipeCard
          title="Paella"
          descrip="Receta tradicional"
          onPress={() => navigation.navigate("Detail")}
        />

        <RecipeCard
          title="Flan"
          descrip="Postre clásico"
          onPress={() => navigation.navigate("Detail")}
        />
      </ScrollView>
    </View>
  );
}
import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function Dessert({ navigation }) {
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
        <Text style={{ fontSize: 20, margin: 10 }}>Postres</Text>

        <RecipeCard
          title="Flan napolitano"
          descrip="Postre clásico delicioso"
          category="Dessert"
          onPress={() => navigation.navigate("Detail")}
        />
      </ScrollView>
    </View>
  );
}
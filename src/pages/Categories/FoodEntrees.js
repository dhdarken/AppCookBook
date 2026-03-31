import { View, Text, ScrollView } from "react-native";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export default function FoodEntrees({ navigation }) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

 useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    const data = [
      {
        id: 1,
        title: "Empanadas colombianas",
        descrip: "Crujientes empanadas rellenas de carne y papa",
        category: "FoodEntrees",
        // image: require("../../assets/images/empanada.jpg"),
        ingredients: ["Carne", "Papa", "Cebolla"],
        steps: ["Preparar relleno", "Armar", "Freír"],
      },
      {
        id: 2,
        title: "Chorizo artesanal",
        descrip: "Chorizo jugoso acompañado de arepa",
        category: "FoodEntrees",
        // image: require("../../assets/images/chorizo.jpg"),
        ingredients: ["Carne de cerdo", "Especias"],
        steps: ["Condimentar", "Cocinar"],
      },
      {
        id: 3,
        title: "Bruschetta",
        descrip: "Pan tostado con tomate y aceite de oliva",
        category: "FoodEntrees",
        // image: require("../../assets/images/bruschetta.jpg"),
        ingredients: ["Pan", "Tomate", "Ajo"],
        steps: ["Tostar pan", "Agregar mezcla"],
      },
      {
        id: 4,
        title: "Ceviche",
        descrip: "Pescado marinado en limón",
        category: "FoodEntrees",
        // image: require("../../assets/images/ceviche.jpg"),
        ingredients: ["Pescado", "Limón", "Cebolla"],
        steps: ["Marinar", "Servir frío"],
      },
      {
        id: 5,
        title: "Sopa de verduras",
        descrip: "Sopa caliente y nutritiva",
        category: "FoodEntrees",
        // image: require("../../assets/images/sopa.jpg"),
        ingredients: ["Zanahoria", "Papa", "Caldo"],
        steps: ["Hervir", "Servir"],
      },
    ];

    setRecipes(data);
    setLoading(false);
  }, 1500);

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
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            margin: 10,
          }}
        >
          🥟 Entradas
        </Text>

        {recipes.map((item) => (
          <RecipeCard
            key={item.id}
            title={item.title}
            descrip={item.descrip}
            image={item.image}
            category={item.category}
            onPress={() =>
              navigation.navigate("Detail", {
                recipe: item,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
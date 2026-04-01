import { View, Text, ScrollView } from "react-native";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export default function MainCourse({ navigation }) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const data = [
        {
          id: 1,
          title: "Pollo al horno",
          descrip: "Pollo jugoso con especias al horno",
          category: "MainCourse",
          image: require("../../../assets/images/pollo.jpg"),
          ingredients: ["Pollo", "Especias"],
          steps: ["Condimentar", "Hornear"],
        },
        {
          id: 2,
          title: "Lasaña de pollo",
          descrip: "Capas de pasta con pollo y queso",
          category: "MainCourse",
          image: require("../../../assets/images/lasana.jpg"),
          ingredients: ["Pasta", "Pollo", "Queso"],
          steps: ["Armar capas", "Hornear"],
        },
        {
          id: 3,
          title: "Paella",
          descrip: "Arroz con mariscos estilo español",
          category: "MainCourse",
          image: require("../../../assets/images/paella.jpg"),
          ingredients: ["Arroz", "Mariscos"],
          steps: ["Cocinar arroz", "Agregar mariscos"],
        },
        {
          id: 4,
          title: "Carne asada",
          descrip: "Carne jugosa a la parrilla",
          category: "MainCourse",
          image: require("../../../assets/images/carne.jpg"),
          ingredients: ["Carne", "Sal"],
          steps: ["Sazonar", "Asar"],
        },
        {
          id: 5,
          title: "Arroz con pollo",
          descrip: "Clásico arroz con pollo y verduras",
          category: "MainCourse",
          image: require("../../../assets/images/arroz.jpg"),
          ingredients: ["Arroz", "Pollo", "Verduras"],
          steps: ["Cocinar", "Mezclar"],
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
          🍗 Platos Fuertes
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
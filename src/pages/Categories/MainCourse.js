import { View, Text, ScrollView } from "react-native";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export const mainCourseData = [
  {
    id: 1,
    title: "Pollo al horno",
    descrip: "Pollo jugoso con especias",
    category: "MainCourse",
    image: require("../../../assets/images/pollo.jpg"),
    time: "1 hora ,",
    difficulty: 2,
    price: 15000,
    ingredients: ["Pollo", "Ajo", "Sal", "Pimienta", "Aceite"],
    steps: [
      "Condimentar el pollo.",
      "Precalentar horno.",
      "Hornear 45 min.",
      "Servir caliente."
    ]
  },
  {
    id: 2,
    title: "Lasaña de pollo",
    descrip: "Capas de pasta con pollo",
    category: "MainCourse",
    image: require("../../../assets/images/lasana.jpg"),
    time: "50 min ,",
    difficulty: 3,
    price: 18000,
    ingredients: ["Pasta", "Pollo", "Queso", "Salsa"],
    steps: [
      "Cocinar pasta.",
      "Preparar pollo.",
      "Armar capas.",
      "Hornear.",
      "Servir."
    ]
  },
  {
    id: 3,
    title: "Paella",
    descrip: "Arroz con mariscos",
    category: "MainCourse",
    image: require("../../../assets/images/paella.jpg"),
    time: "1 hora ,",
    difficulty: 4,
    price: 20000,
    ingredients: ["Arroz", "Mariscos", "Pollo", "Azafrán"],
    steps: [
      "Sofreír ingredientes.",
      "Agregar arroz.",
      "Añadir caldo.",
      "Cocinar.",
      "Servir."
    ]
  },
  {
    id: 4,
    title: "Carne asada",
    descrip: "Carne jugosa a la parrilla",
    category: "MainCourse",
    image: require("../../../assets/images/carne.jpg"),
    time: "30 min ,",
    difficulty: 2,
    price: 17000,
    ingredients: ["Carne", "Sal", "Pimienta"],
    steps: [
      "Condimentar carne.",
      "Asar en parrilla.",
      "Voltear.",
      "Servir."
    ]
  },
  {
    id: 5,
    title: "Arroz con pollo",
    descrip: "Clásico arroz con pollo",
    category: "MainCourse",
    image: require("../../../assets/images/arroz.jpg"),
    time: "40 min ,",
    difficulty: 2,
    price: 14000,
    ingredients: ["Arroz", "Pollo", "Verduras"],
    steps: [
      "Cocinar pollo.",
      "Agregar arroz.",
      "Añadir verduras.",
      "Cocinar.",
      "Servir."
    ]
  },
]

export default function MainCourse({ navigation }) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setRecipes(mainCourseData);
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
    <View style={{ flex: 1, paddingTop: 0 }}>
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
            key={`${item.category}-${item.id}`}
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
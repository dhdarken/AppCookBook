import { View, Text, ScrollView } from "react-native";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useState, useEffect } from "react";

export const foodEntreesData = [
  {
    id: 1,
    title: "Empanadas colombianas",
    descrip: "Crujientes empanadas rellenas de carne y papa",
    category: "FoodEntrees",
    image: require("../../../assets/images/empanada.jpg"),
    time: "45 min",
    difficulty: 3,
    price: 8000,
    ingredients: [
      "Carne molida",
      "Papa",
      "Cebolla",
      "Masa de maíz",
      "Sal",
      "Comino",
      "Aceite"
    ],
    steps: [
      "Cocinar las papas y hacer puré.",
      "Sofreír cebolla y carne con especias.",
      "Mezclar con el puré.",
      "Preparar la masa de maíz.",
      "Formar discos y rellenar.",
      "Cerrar las empanadas.",
      "Freír en aceite caliente.",
      "Escurrir y servir."
    ]
  },
  {
    id: 2,
    title: "Chorizo artesanal",
    descrip: "Chorizo jugoso con especias",
    category: "FoodEntrees",
    image: require("../../../assets/images/chorizo.jpg"),
    time: "30 min",
    difficulty: 2,
    price: 9000,
    ingredients: [
      "Carne de cerdo",
      "Ajo",
      "Pimentón",
      "Sal",
      "Tripa"
    ],
    steps: [
      "Condimentar la carne.",
      "Rellenar la tripa.",
      "Amarrar en porciones.",
      "Cocinar en parrilla.",
      "Servir caliente."
    ]
  },
  {
    id: 3,
    title: "Bruschetta",
    descrip: "Pan tostado con tomate fresco",
    category: "FoodEntrees",
    image: require("../../../assets/images/bruschetta.jpg"),
    time: "15 min",
    difficulty: 1,
    price: 6000,
    ingredients: [
      "Pan",
      "Tomate",
      "Ajo",
      "Aceite de oliva",
      "Albahaca"
    ],
    steps: [
      "Tostar el pan.",
      "Picar tomate.",
      "Mezclar con ajo y aceite.",
      "Colocar sobre pan.",
      "Servir."
    ]
  },
  {
    id: 4,
    title: "Ceviche",
    descrip: "Pescado fresco en limón",
    category: "FoodEntrees",
    image: require("../../../assets/images/ceviche.jpg"),
    time: "20 min",
    difficulty: 2,
    price: 12000,
    ingredients: [
      "Pescado",
      "Limón",
      "Cebolla",
      "Cilantro",
      "Sal"
    ],
    steps: [
      "Cortar pescado.",
      "Agregar limón.",
      "Reposar 10 minutos.",
      "Añadir cebolla y cilantro.",
      "Servir frío."
    ]
  },
  {
    id: 5,
    title: "Sopa de verduras",
    descrip: "Sopa caliente y nutritiva",
    category: "FoodEntrees",
    image: require("../../../assets/images/sopa.jpg"),
    time: "35 min",
    difficulty: 1,
    price: 7000,
    ingredients: [
      "Zanahoria",
      "Papa",
      "Apio",
      "Caldo",
      "Sal"
    ],
    steps: [
      "Cortar verduras.",
      "Hervir en caldo.",
      "Cocinar 30 min.",
      "Servir caliente."
    ]
  },
];

export default function FoodEntrees({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setRecipes(foodEntreesData);
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
    <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center", // 🔥 CLAVE
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 15,
            alignSelf: "flex-start",
            marginLeft: 20,
          }}
        >
          🥟 Entradas
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
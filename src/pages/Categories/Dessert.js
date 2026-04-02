import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export const dessertData = [
  {
    id: 1,
    title: "Flan napolitano",
    descrip: "Postre cremoso",
    category: "Dessert",
    image: require("../../../assets/images/flan.jpg"),
    time: "1 hora",
    difficulty: 2,
    price: 7000,
    ingredients: ["Leche", "Huevos", "Azúcar"],
    steps: [
      "Preparar caramelo.",
      "Mezclar ingredientes.",
      "Hornear.",
      "Refrigerar.",
      "Servir."
    ]
  },
  {
    id: 2,
    title: "Torta de chocolate",
    descrip: "Deliciosa torta",
    category: "Dessert",
    image: require("../../../assets/images/torta.jpg"),
    time: "45 min",
    difficulty: 2,
    price: 10000,
    ingredients: ["Harina", "Chocolate", "Huevos"],
    steps: [
      "Mezclar ingredientes.",
      "Hornear.",
      "Enfriar.",
      "Servir."
    ]
  },
  {
    id: 3,
    title: "Brownie",
    descrip: "Postre de chocolate",
    category: "Dessert",
    image: require("../../../assets/images/brownie.jpg"),
    time: "30 min",
    difficulty: 1,
    price: 8000,
    ingredients: ["Chocolate", "Mantequilla", "Azúcar"],
    steps: [
      "Derretir chocolate.",
      "Mezclar.",
      "Hornear.",
      "Cortar."
    ]
  },
  {
    id: 4,
    title: "Helado casero",
    descrip: "Refrescante y fácil",
    category: "Dessert",
    image: require("../../../assets/images/helado.jpg"),
    time: "3 horas",
    difficulty: 1,
    price: 6000,
    ingredients: ["Leche", "Fruta", "Azúcar"],
    steps: [
      "Licuar.",
      "Congelar.",
      "Servir."
    ]
  },
  {
    id: 5,
    title: "Cheesecake",
    descrip: "Postre cremoso",
    category: "Dessert",
    image: require("../../../assets/images/cheesecake.jpg"),
    time: "1 hora",
    difficulty: 3,
    price: 12000,
    ingredients: ["Queso crema", "Galleta", "Azúcar"],
    steps: [
      "Preparar base.",
      "Mezclar relleno.",
      "Hornear.",
      "Refrigerar."
    ]
  },
];


export default function Dessert({ navigation }) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setRecipes(dessertData);
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
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 5 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", margin: 10 }}>
          🍰 Postres
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
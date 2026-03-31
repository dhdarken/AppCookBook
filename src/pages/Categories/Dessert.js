import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function Dessert({ navigation }) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    const data = [
      {
        id: 1,
        title: "Flan napolitano",
        descrip: "Postre cremoso con caramelo",
        category: "Dessert",
        image: require("../../assets/images/flan.jpg"),
      },
      {
        id: 2,
        title: "Torta de chocolate",
        descrip: "Bizcocho suave con chocolate",
        category: "Dessert",
        image: require("../../assets/images/torta.jpg"),
      },
      {
        id: 3,
        title: "Brownie",
        descrip: "Postre húmedo de chocolate",
        category: "Dessert",
        image: require("../../assets/images/brownie.jpg"),
      },
      {
        id: 4,
        title: "Helado",
        descrip: "Refrescante y delicioso",
        category: "Dessert",
        image: require("../../assets/images/helado.jpg"),
      },
      {
        id: 5,
        title: "Cheesecake",
        descrip: "Pastel cremoso de queso",
        category: "Dessert",
        image: require("../../assets/images/cheesecake.jpg"),
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
          🍰 Postres
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
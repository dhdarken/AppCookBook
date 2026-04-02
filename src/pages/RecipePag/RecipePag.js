import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

import { foodEntreesData } from "../Categories/FoodEntrees";
import { mainCourseData } from "../Categories/MainCourse";
import { dessertData } from "../Categories/Dessert";

export default function RecipePage({ navigation }) {
  const insets = useSafeAreaInsets();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const allRecipes = [
      ...(foodEntreesData || []),
      ...(mainCourseData || []),
      ...(dessertData || []),
    ];

    setRecipes(allRecipes);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top }}>
        
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            margin: 10,
          }}
        >
          🍽️ Todas las recetas
        </Text>

        {recipes.map((item) => (
          <RecipeCard
            key={`${item.category}-${item.id}`}
            title={item.title}
            descrip={item.descrip}
            image={item.image}
            category={item.category}
            onPress={() =>
              navigation.navigate("HomeTab", {
                screen: "Detail",
                params: { recipe: item },
              })
            }
          />
        ))}

      </ScrollView>
    </View>
  );
}
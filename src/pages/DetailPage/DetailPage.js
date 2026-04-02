import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

export default function DetailPage({ route, navigation }) {
  const insets = useSafeAreaInsets();

  const recipe = route?.params?.recipe;

  const [favorite, setFavorite] = useState(false);

  if (!recipe) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>No hay información de la receta</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Image
        source={recipe.image}
        style={{
          width: "100%",
          height: 260,
          marginTop:0,
        }}
        resizeMode="cover"
      />

      <View style={{ padding: 15 }}>
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
          style={{
            position: "absolute",
            top: -40,
            right: 20,
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 50,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {favorite ? "❤️" : "🤍"}
          </Text>
        </TouchableOpacity>

  
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {recipe.title}
        </Text>

      
        <Text style={{ fontSize: 16, color: "#555" }}>
          {recipe.descrip}
        </Text>

 
        <View style={{ marginTop: 15 }}>
          <Text>⏱️ Tiempo: {recipe.time}</Text>
          <Text>⭐ Dificultad: {"⭐".repeat(recipe.difficulty || 1)}</Text>
          <Text>💰 Precio: ${recipe.price}</Text>
        </View>

     
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          🧂 Ingredientes
        </Text>

        {recipe.ingredients?.map((item, index) => (
          <Text key={index} style={{ marginLeft: 10, marginTop: 5 }}>
            • {item}
          </Text>
        ))}

       
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          👨‍🍳 Preparación
        </Text>

        {recipe.steps?.map((step, index) => (
          <Text key={index} style={{ marginLeft: 10, marginTop: 5 }}>
            {index + 1}. {step}
          </Text>
        ))}

      
        <Text
          style={{
            fontSize: 14,
            fontStyle: "italic",
            color: "#777",
          }}
        >
          Disfruta esta receta de {recipe.title}, perfecta para compartir en familia 🍽️
        </Text>
      </View>
    </ScrollView>
  );
}
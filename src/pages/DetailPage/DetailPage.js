import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function DetailPage({ route }) {
  const recipe = route?.params?.recipe;
  const [favorite, setFavorite] = useState(false);

  if (!recipe) {
    return (
      <View style={styles.center}>
        <Text>No hay información de la receta</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      
      {/* Imagen */}
      <View style={styles.imageContainer}>
        <Image source={recipe.image} style={styles.image} />

        {/* Botón favorito */}
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
          style={styles.favoriteBtn}
        >
          <Text style={{ fontSize: 20 }}>
            {favorite ? "❤️" : "🤍"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <View style={styles.content}>

        {/* Título */}
        <Text style={styles.title}>{recipe.title}</Text>

        {/* Descripción */}
        <Text style={styles.description}>{recipe.descrip}</Text>

        {/* Info rápida */}
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>⏱️ {recipe.time}</Text>
          <Text style={styles.infoText}>
            ⭐ {"⭐".repeat(recipe.difficulty || 1)}
          </Text>
          <Text style={styles.infoText}>💰 ${recipe.price}</Text>
        </View>

        {/* Ingredientes */}
        <Text style={styles.sectionTitle}>🧂 Ingredientes</Text>

        <View style={styles.listContainer}>
          {recipe.ingredients?.map((item, index) => (
            <Text key={index} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>

        {/* Preparación */}
        <Text style={styles.sectionTitle}>👨‍🍳 Preparación</Text>

        <View style={styles.listContainer}>
          {recipe.steps?.map((step, index) => (
            <Text key={index} style={styles.listItem}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Disfruta esta receta de {recipe.title}, perfecta para compartir en familia 🍽️
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 260,
  },

  favoriteBtn: {
    position: "absolute",
    bottom: -25,
    right: 20,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  content: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 18,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
  },

  description: {
    fontSize: 15,
    color: "#666",
    marginTop: 6,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },

  infoText: {
    fontSize: 13,
    color: "#444",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  listContainer: {
    backgroundColor: "#fafafa",
    borderRadius: 10,
    padding: 10,
  },

  listItem: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },

  footer: {
    marginTop: 20,
    fontSize: 13,
    color: "#777",
    fontStyle: "italic",
  },
};
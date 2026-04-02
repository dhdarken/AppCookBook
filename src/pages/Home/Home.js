import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.loading}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>CookBook</Text>
        <View style={styles.line} />
        <Text style={styles.subtitle}>Explora recetas fácilmente</Text>
      </View>

      {/* CARDS */}
      <View style={styles.cardsContainer}>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("FoodEntrees")}
        >
          <Text style={styles.cardText}>🥟 Entradas</Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("MainCourse")}
        >
          <Text style={styles.cardText}>🍗 Plato fuerte</Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("Dessert")}
        >
          <Text style={styles.cardText}>🍰 Postres</Text>
        </Pressable>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center", // 🔥 centra vertical
    alignItems: "center",     // 🔥 centra horizontal
    paddingHorizontal: 20,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },

  loading: {
    fontSize: 16,
    color: "#555",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
  },

  line: {
    width: 40,
    height: 3,
    backgroundColor: "#6366f1",
    borderRadius: 10,
    marginVertical: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#64748b",
  },

  cardsContainer: {
    width: "100%", // 🔥 importante para que las cards ocupen ancho
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,

    borderWidth: 1,
    borderColor: "#eee",
  },

  cardText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
  },
};
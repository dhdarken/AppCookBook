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
        <Text style={{ fontSize: 18 }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Escoge una categoría</Text>

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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  card: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
  },
};
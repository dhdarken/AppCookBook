import { View, Text, Image, TouchableOpacity } from "react-native";

export default function RecipeCard({ title, image, descrip, category, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 3,
      }}
    >
      <Image
        source={image}
        style={{ width: "100%", height: 150 }}
        resizeMode="cover"
      />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>

        <Text style={{ marginTop: 5 }}>
          {descrip ? descrip.slice(0, 50) + "..." : ""}
        </Text>

        <Text style={{ marginTop: 5, color: "gray" }}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}
import { View, Text, Image, TouchableOpacity } from "react-native";

const RecipeCard = ({ title, image, descrip, category, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        elevation: 3,
      }}
    >
      <Image
        source={image}
        style={{
          width: "100%",
          height: 150,
        }}
        resizeMode="cover"
      />

      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {title}
        </Text>

        <Text style={{ color: "gray", marginTop: 5 }}>
          {descrip}
        </Text>

        <Text style={{ marginTop: 5, color: "#208AEF" }}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
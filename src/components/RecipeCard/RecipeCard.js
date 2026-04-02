import { View, Text, Image, TouchableOpacity } from "react-native";

const RecipeCard = ({ title, image, descrip, category, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.card}
    >
      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.descrip} numberOfLines={2}>
          {descrip}
        </Text>

        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = {
  card: {
    width: "85%", 
    maxWidth: 420,
    alignSelf: "center", 

    backgroundColor: "#eee9e9",
    borderRadius: 44,
    marginBottom: 14,
    overflow: "hidden",
    marginTop: 15,

    
    shadowColor: "#c7919133",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,

    borderWidth: 1,
    borderColor: "#eee",
  },

  image: {
    width: "100%",
    height: 150,
  },

  content: {
    padding: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    alignSelf: "center", 
  },

  descrip: {
    fontSize: 13,
    color: "#666",
    alignSelf: "center", 
    marginTop: 4,
  },

  category: {
    marginTop: 6,
    alignSelf: "center", 
    fontSize: 12,
    color: "#6366f1",
  },
};
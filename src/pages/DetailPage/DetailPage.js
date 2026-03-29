import { View, Text, ScrollView, Image } from "react-native";

export default function DetailPage({ route }) {
  const { title, descrip, image, ingredients, steps } = route.params || {};

  return (
    <ScrollView style={{ flex: 1 }}>
      {image && (
        <Image
          source={image}
          style={{ width: "100%", height: 250 }}
          resizeMode="cover"
        />
      )}

      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{title}</Text>

        <Text style={{ marginTop: 10 }}>{descrip}</Text>

        {ingredients && (
          <>
            <Text style={{ marginTop: 20, fontWeight: "bold" }}>
              Ingredientes
            </Text>
            {ingredients.map((item, index) => (
              <Text key={index}>• {item}</Text>
            ))}
          </>
        )}

        {steps && (
          <>
            <Text style={{ marginTop: 20, fontWeight: "bold" }}>
              Preparación
            </Text>
            {steps.map((step, index) => (
              <Text key={index}>
                {index + 1}. {step}
              </Text>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}

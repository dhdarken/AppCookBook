import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailPage from "../../pages/DetailPage/DetailPage";
import Home from "../../pages/Home/Home";
import Dessert from "../../pages/Categories/Dessert";
import FoodEntrees from "../../pages/Categories/FoodEntrees";
import MainCourse from "../../pages/Categories/MainCourse";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FoodEntrees" component={FoodEntrees} />
      <Stack.Screen name="MainCourse" component={MainCourse} />
      <Stack.Screen name="Dessert" component={Dessert} />
     <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationTab from "./NavigationTab";
import HistoryScreen from "../screens/HistoryScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import LocationScreen from "../screens/LocationScreen";
import LocationPicker from "../components/specific/locationScr/LocationPicker";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen
        name="MainTabs"
        component={NavigationTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistoryTab"
        component={HistoryScreen}
        options={{
          headerBackTitle: " Quay lại",
          headerBackImage: () => (
            <FontAwesome5 name="chevron-left" size={16} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#FFA07A",
          },
          headerTintColor: "#fff",
          headerTitle: "Lịch sử",
        }}
      />
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          headerBackTitle: " Quay lại",
          headerBackImage: () => (
            <FontAwesome5 name="chevron-left" size={16} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#FFA07A",
          },
          headerTintColor: "#fff",
          headerTitle: "Xe khách",
        }}
      />
      <Stack.Screen
        name="LocationPicker"
        component={LocationPicker}
        options={{
          headerBackTitleStyle: "",
          headerBackTitle: "",
          headerBackImage: () => null, // Xóa nút back mặc định
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontAwesome5
                name="times"
                size={20}
                color="#fff"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#FFA07A",
          },
          headerTintColor: "#fff",
          headerTitle: "Chọn địa điểm",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

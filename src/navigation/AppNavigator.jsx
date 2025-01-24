import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationTab from "./NavigationTab";
import HistoryScreen from "../screens/customer/HistoryScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import LocationScreen from "../screens/customer/LocationScreen";
import LocationPicker from "../components/specific/locationScr/LocationPicker";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CarScheduleScreen from "../screens/customer/CarScheduleScreen";
import SeatSelectionScreen from "../screens/customer/SeatSelectionScreen";
import BookingConfirmScreen from "../screens/customer/BookingConfirmScreen";
import PaymentScreen from "../screens/customer/PaymentScreen";
import DriverHomeScreen from "../screens/driver/DriverHomeScreen";
import LoginForm from "../screens/customer/LoginForm";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Login">
     <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={NavigationTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
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
        name="SeatSelectionScreen"
        component={SeatSelectionScreen}
        options={{
          headerBackTitle: " Quay lại",
          headerBackImage: () => (
            <FontAwesome5 name="chevron-left" size={16} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#FFA07A",
          },
          headerTintColor: "#fff",
          headerTitle: "Chọn chỗ",
        }}
      />
      <Stack.Screen
        name="CarScheduleScreen"
        component={CarScheduleScreen}
        options={{
          headerBackTitle: " Quay lại",
          headerBackImage: () => (
            <FontAwesome5 name="chevron-left" size={16} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#FFA07A",
          },
          headerTintColor: "#fff",
          headerTitle: "Danh sách chuyến",
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerBackTitle: " Quay lại",
          headerBackImage: () => (
            <FontAwesome5 name="chevron-left" size={16} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#FFA07A",
          },
          headerTintColor: "#fff",
          headerTitle: "Thanh toán",
        }}
      />
      <Stack.Screen
        name="BookingConfirmScreen"
        component={BookingConfirmScreen}
        options={{
          headerBackTitle: " Quay lại",
          headerBackImage: () => (
            <FontAwesome5 name="chevron-left" size={16} color="#fff" />
          ),
          headerStyle: {
            backgroundColor: "#FFA07A",
          },
          headerTintColor: "#fff",
          headerTitle: "Xác nhận thông tin",
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
       <Stack.Screen
        name="DriverHomeScreen"
        component={DriverHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

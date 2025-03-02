import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/customer/HomeScreen";
import { Badge } from "react-native-paper";
import HistoryScreen from "../screens/customer/HistoryScreen";
import ProfileScreen from "../screens/customer/ProfileScreen";
import CartScreen from "../screens/customer/CartScreen";
const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#FF6347",
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="home-outline" size={size} color={color} />
            </>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Card"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <Ionicons name="notifications-circle-outline" size={size} color={color} />
              <Badge
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  backgroundColor: "red",
                  fontSize: 12,
                  paddingHorizontal: 6,
                }}
              >
                3
              </Badge>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;

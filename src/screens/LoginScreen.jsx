import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Thêm import này từ expo-linear-gradient

const mockUsers = [
  { email: "khachhang", password: "123456", role: "customer" },
  { email: "laixe", password: "123456", role: "driver" },
];

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonScale = new Animated.Value(1); // For scaling animation

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      if (user.role === "customer") {
        navigation.replace("MainTabs");
      } else if (user.role === "driver") {
        navigation.replace("DriverHomeScreen");
      }
    } else {
      Alert.alert("Login Failed", "Incorrect email or password.");
    }
  };

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.98,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={["#FFFAF0", "#FFD700", "#FF8C00", "#FFA07A", "#FFFFFF"]}
      style={styles.container}
    >
      {/* Logo */}
      <Image
        source={require("../assets/logo-banner.png")}
        style={styles.logo}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      {/* Login Button */}
      <Animated.View
        style={[styles.button, { transform: [{ scale: buttonScale }] }]}
      >
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={handleLogin}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Footer Links */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    width: 270,
    height: 90,
    marginBottom: 40,
    shadowColor: "#FF4C4C", // Thêm bóng đổ đỏ cho logo
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
    borderRadius: 15,
  },
  input: {
    width: "100%",
    height: 55,
    borderColor: "#FF4C4C",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 18,
    backgroundColor: "#fff",
    marginBottom: 18,
    shadowColor: "#FF4C4C",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#FF4C4C",
    borderRadius: 25, // Bo tròn góc mạnh hơn
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    shadowColor: "#FF4C4C",
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    transform: [{ scale: 1.05 }],
  },
  buttonTouchable: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  buttonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  footer: {
    flexDirection: "row",
    marginTop: 35,
  },
  footerText: {
    fontSize: 16,
    color: "#777",
  },
  footerLink: {
    fontSize: 16,
    color: "#FF4C4C",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
    opacity: 0.8,
  },
});

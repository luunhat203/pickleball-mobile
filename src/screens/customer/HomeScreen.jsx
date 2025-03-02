import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const paddles = [
  { id: 1, name: "Pro Paddle X", price: "$99", image: require("../../assets/vot-pickleball-joola-collin-johns-scorpeus-3-16mm_1724286108.jpg") },
  { id: 2, name: "Elite Paddle Z", price: "$129", image: require("../../assets/vot-pickleball-12-1736824333.webp") },
  { id: 3, name: "Champion Paddle V", price: "$149", image: require("../../assets/images.jpg") },
];

export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <StatusBar style="dark" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>🏓 Vợt Pickleball</Text>
          <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Card")}>
            <FontAwesome name="shopping-cart" size={24} color="#333" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="gray" style={styles.searchIcon} />
          <TextInput
              placeholder="Tìm kiếm vợt..."
              placeholderTextColor="gray"
              style={styles.searchInput}
          />
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sliders" size={18} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={[styles.categoryButton, styles.categoryActive]}>
              <Text style={styles.categoryActiveText}>Tất cả</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Mới nhất</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Phổ biến</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Cao cấp</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Product Grid */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.productsContainer}>
          <View style={styles.productsGrid}>
            {paddles.map((paddle) => (
                <TouchableOpacity
                    key={paddle.id}
                    style={styles.paddleItem}
                    onPress={() => navigation.navigate("DetailProduct", { paddle })}
                >
                  <View style={styles.paddleImageContainer}>
                    <Image source={paddle.image} style={styles.paddleImage} />
                    <TouchableOpacity style={styles.favoriteButton}>
                      <FontAwesome name="heart-o" size={18} color="#ff4757" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.paddleInfo}>
                    <Text style={styles.paddleName}>{paddle.name}</Text>
                    <Text style={styles.paddlePrice}>{paddle.price}</Text>
                    <TouchableOpacity style={styles.addButton}>
                      <Ionicons name="add" size={20} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Add New Product Button (Only for admin) */}
        {/*<TouchableOpacity style={styles.floatingButton}>*/}
        {/*  <Ionicons name="add" size={24} color="#fff" />*/}
        {/*</TouchableOpacity>*/}
      </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
  },
  cartButton: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -8,
    backgroundColor: "#ff4757",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#333",
  },
  filterButton: {
    padding: 4,
  },
  categoriesContainer: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  categoryActive: {
    backgroundColor: "#1e88e5",
  },
  categoryText: {
    color: "#333",
    fontWeight: "500",
  },
  categoryActiveText: {
    color: "#fff",
    fontWeight: "600",
  },
  productsContainer: {
    paddingHorizontal: 16,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  paddleItem: {
    width: cardWidth,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
  },
  paddleImageContainer: {
    width: "100%",
    height: 170,
    position: "relative",
  },
  paddleImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  paddleInfo: {
    padding: 12,
    position: "relative",
  },
  paddleName: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  paddlePrice: {
    color: "#28a745",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 36,
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#1e88e5",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#ff4757",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
});
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  const userInfo = {
    name: "Lưu Phúc Ân",
    phone: "0398653926",
    points: "151.250 điểm",
  };

  const menuItems = [
    { id: "info", title: "Thông tin Hải Vân", icon: "info", color: "#4A90E2" },
    { id: "support", title: "Hỗ trợ", icon: "help", color: "#50E3C2" },
    { id: "settings", title: "Cài đặt", icon: "settings", color: "#F5A623" },
    { id: "logout", title: "Đăng xuất", icon: "logout", color: "#FF5B5B" },
  ];

  const QuickAccessItem = ({ icon, title, value, color }) => (
    <TouchableOpacity style={styles.quickAccessItem}>
      <LinearGradient
        colors={[color, color + "80"]}
        style={styles.quickAccessIconContainer}
      >
        {icon}
      </LinearGradient>
      <Text style={styles.quickAccessTitle}>{title}</Text>
      <Text style={styles.quickAccessValue}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* User Profile Section */}
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.profileSection}>
            <View style={styles.profileLeft}>
              <View style={styles.avatarContainer}>
                <MaterialIcons
                  name="account-circle"
                  size={50}
                  color="#4A90E2"
                />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.userName}>{userInfo.name}</Text>
                <Text style={styles.userPhone}>{userInfo.phone}</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#4A90E2" />
          </TouchableOpacity>
        </View>

        {/* Quick Access Grid */}
        <View style={styles.quickAccessContainer}>
          <View style={styles.quickAccessGrid}>
            <QuickAccessItem
              icon={<MaterialIcons name="stars" size={24} color="#FFF" />}
              title="Kim cương"
              value={userInfo.points}
              color="#FFB236"
            />
            <QuickAccessItem
              icon={<MaterialIcons name="local-offer" size={24} color="#FFF" />}
              title="Khuyến mãi"
              value="0 mã"
              color="#FF5B5B"
            />
            <QuickAccessItem
              icon={<MaterialIcons name="group" size={24} color="#FFF" />}
              title="Giới thiệu"
              value="Bạn bè"
              color="#4A90E2"
            />
            <QuickAccessItem
              icon={
                <MaterialIcons name="notifications" size={24} color="#FFF" />
              }
              title="Tin tức"
              value="Hải Vân"
              color="#50E3C2"
            />
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View
                  style={[
                    styles.menuIconContainer,
                    { backgroundColor: item.color + "15" },
                  ]}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={24}
                    color={item.color}
                  />
                </View>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#BCC5D3" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  profileContainer: {
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    backgroundColor: "#F0F7FF",
    borderRadius: 25,
    padding: 5,
  },
  profileInfo: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A2138",
  },
  userPhone: {
    fontSize: 14,
    color: "#8F9BB3",
    marginTop: 4,
  },
  quickAccessContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    margin: 16,
    marginTop: 0,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  quickAccessGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  quickAccessItem: {
    width: "50%",
    padding: 12,
    alignItems: "flex-start",
  },
  quickAccessIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  quickAccessTitle: {
    fontSize: 14,
    color: "#8F9BB3",
    marginBottom: 4,
  },
  quickAccessValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A2138",
  },
  menuContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    margin: 16,
    marginTop: 0,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 12,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  menuItemTitle: {
    fontSize: 16,
    color: "#1A2138",
    fontWeight: "500",
  },
});

export default ProfileScreen;

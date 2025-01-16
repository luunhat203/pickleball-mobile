import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from "@expo/vector-icons";
import Tab from "../components/specific/booking/Tab";

const BookingScreen = () => {
  const [tab, setTab] = useState("bookings"); // 'bookings' | 'history'
  const navigation = useNavigation();

  const bookings = [
    {
      id: "1",
      ticketCode: "BK1234",
      time: "2025-01-14 08:00",
      from: "Hà Nội",
      to: "Hải Phòng",
      status: "Confirmed",
    },
    {
      id: "2",
      ticketCode: "BK5678",
      time: "2025-01-14 10:30",
      from: "Hà Nội",
      to: "Quảng Ninh",
      status: "Pending",
    },
  ];

  const history = [
    {
      id: "1",
      ticketCode: "HS1234",
      time: "2025-01-10 09:00",
      from: "Hà Nội",
      to: "Lạng Sơn",
      status: "Completed",
    },
    {
      id: "2",
      ticketCode: "HS5678",
      time: "2025-01-09 14:00",
      from: "Hà Nội",
      to: "Sơn La",
      status: "Cancelled",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.ticketContainer}>
      <View style={styles.ticket}>
        <View style={styles.ticketHeader}>
          <Text style={styles.ticketCode}>
            🎟 Ticket Code: {item.ticketCode}
          </Text>
          <Text style={[styles.status, getStatusStyle(item.status)]}>
            {item.status}
          </Text>
        </View>
        <View style={styles.ticketBody}>
          <Text style={styles.ticketDetail}>🕒 Time: {item.time}</Text>
          <Text style={styles.ticketDetail}>📍 From: {item.from}</Text>
          <Text style={styles.ticketDetail}>📍 To: {item.to}</Text>
        </View>
        <View style={styles.ticketFooter}>
          <View style={styles.dottedLine} />
          <Text style={styles.footerText}>Enjoy your trip! 🚍</Text>
        </View>
      </View>
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed":
        return { color: "#4CAF50" }; // Green
      case "Pending":
        return { color: "#FF9800" }; // Orange
      case "Completed":
        return { color: "#2196F3" }; // Blue
      case "Cancelled":
        return { color: "#F44336" }; // Red
      default:
        return { color: "#000" };
    }
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
        <Tab tab={tab} setTab={setTab}/>
      {/* Content */}
      <FlatList
        data={tab === "bookings" ? bookings : history}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.historyButton}
          onPress={() => navigation.navigate('HistoryTab', {tabSelected: tab})}
        >
          <Text style={styles.historyButtonText}>Lịch sử</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  tab: {
    alignItems: "center",
    padding: 8,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#FF6347",
  },
  activeTabText: {
    color: "#FF6347",
    fontWeight: "bold",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  list: {
    padding: 16,
  },
  ticketContainer: {
    marginVertical: 8,
    paddingHorizontal: 5,
  },
  ticket: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    position: "relative",
  },
  ticketHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  ticketCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  ticketBody: {
    marginVertical: 8,
  },
  ticketDetail: {
    fontSize: 14,
    marginVertical: 4,
    color: "#555",
  },
  ticketFooter: {
    alignItems: "center",
    marginTop: 8,
  },
  dottedLine: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#999",
    width: "100%",
    marginVertical: 8,
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%", 
    padding: 10
  },
  historyButton: {
    backgroundColor: "#fff", 
    borderWidth: 2, 
    borderColor: "#FF9800",
    borderRadius: 8, 
    paddingVertical: 12, 
    alignItems: "center", 
  },
  historyButtonText: {
    color: "#FF9800", 
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BookingScreen;

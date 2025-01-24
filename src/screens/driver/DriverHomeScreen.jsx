import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DriverHomeScreen() {
  const [todayTrips, setTodayTrips] = useState([
    {
      id: '1',
      route: 'Hà Nội - Đà Nẵng',
      departureTime: '07:00',
      status: 'Sắp khởi hành',
      busNumber: 'BS-123',
      passengers: 32,
      cargo: '500kg'
    },
    {
      id: '2',
      route: 'Hà Nội - Hải Phòng',
      departureTime: '13:30',
      status: 'Chưa khởi hành',
      busNumber: 'BS-456',
      passengers: 28,
      cargo: '350kg'
    }
  ]);

  const renderTripItem = ({ item }) => (
    <TouchableOpacity style={styles.tripCard}>
      <View style={styles.tripHeader}>
        <View>
          <Text style={styles.routeText}>{item.route}</Text>
          <Text style={styles.busNumberText}>{item.busNumber}</Text>
        </View>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
      <View style={styles.tripDetails}>
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Ionicons name="people-outline" size={24} color="#FF7F50" />
            <Text style={styles.detailText}>{item.passengers} Hành khách</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="cube-outline" size={24} color="#FF7F50" />
            <Text style={styles.detailText}>{item.cargo} Hàng</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{item.departureTime}</Text>
          <Ionicons name="time-outline" size={20} color="#FF4500" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>Chào, Lái Xe</Text>
            <Text style={styles.dateText}>
              {new Date().toLocaleDateString('vi-VN', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Ionicons name="bus-outline" size={24} color="#FF7F50" />
            <Text style={styles.statText}>2 Chuyến</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="people-outline" size={24} color="#FF7F50" />
            <Text style={styles.statText}>60 Hành Khách</Text>
          </View>
        </View>
      </View>
      
      <FlatList
        data={todayTrips}
        renderItem={renderTripItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <Text style={styles.listHeader}>Lịch Trình Hôm Nay</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EE',
  },
  headerContainer: {
    backgroundColor: '#FF7F50',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  statsContainer: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#FF4500',
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FF4500',
  },
  tripCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFE4E1',
  },
  routeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  busNumberText: {
    fontSize: 14,
    color: '#FF7F50',
    marginTop: 5,
  },
  statusText: {
    fontSize: 14,
    color: '#28a745',
  },
  tripDetails: {
    padding: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
});

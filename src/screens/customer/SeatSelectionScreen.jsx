import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SeatSelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentFloor, setCurrentFloor] = useState(1);

  const handleBookingConfirmScreen = () => {
    navigation.navigate('BookingConfirmScreen')
  }
  

  const toggleSeat = (id) => {
    setSelectedSeats(prev => {
      if (prev.includes(id)) {
        return prev.filter(seatId => seatId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const renderSeat = (id, price, status = 'available') => {
    const isSelected = selectedSeats.includes(id);
    const isBooked = status === 'booked';
    const isPending = status === 'pending';

    return (
      <TouchableOpacity
        style={[
          styles.seat,
          isSelected && styles.selectedSeat,
          isBooked && styles.bookedSeat,
          isPending && styles.pendingSeat,
        ]}
        onPress={() => !isBooked && toggleSeat(id)}
        disabled={isBooked}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.seatId,
          isSelected && styles.selectedText,
          isBooked && styles.bookedText,
        ]}>
          {id}
        </Text>
        <Text style={[
          styles.price,
          isSelected && styles.selectedText,
          isBooked && styles.bookedText,
        ]}>
          {price}K
        </Text>
      </TouchableOpacity>
    );
  };

  const renderFloorSeats = (floor) => {
    if (floor === 1) {
      return (
        <View style={styles.seatsContainer}>
          <View style={styles.column}>
            {renderSeat('C1-1', '325', 'booked')}
            {renderSeat('C1-2', '325', 'booked')}
            {renderSeat('C1-3', '325', 'booked')}
            {renderSeat('C1-4', '290')}
            {renderSeat('C1-5', '290')}
          </View>
          
          <View style={styles.column}>
            {renderSeat('B1-1', '325', 'booked')}
            {renderSeat('B1-2', '325')}
            {renderSeat('B1-3', '325')}
            {renderSeat('B1-4', '290')}
          </View>

          <View style={styles.column}>
            {renderSeat('A1-1', '325', 'booked')}
            {renderSeat('A1-2', '325', 'booked')}
            {renderSeat('A1-3', '325')}
            {renderSeat('A1-4', '290')}
            {renderSeat('A1-5', '290')}
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.seatsContainer}>
          <View style={styles.column}>
            {renderSeat('C2-1', '325')}
            {renderSeat('C2-2', '325')}
            {renderSeat('C2-3', '325', 'booked')}
            {renderSeat('C2-4', '290')}
            {renderSeat('C2-5', '290')}
          </View>
          
          <View style={styles.column}>
            {renderSeat('B2-1', '325')}
            {renderSeat('B2-2', '325', 'booked')}
            {renderSeat('B2-3', '325')}
            {renderSeat('B2-4', '290')}
          </View>

          <View style={styles.column}>
            {renderSeat('A2-1', '325')}
            {renderSeat('A2-2', '325')}
            {renderSeat('A2-3', '325', 'booked')}
            {renderSeat('A2-4', '290')}
            {renderSeat('A2-5', '290')}
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFA07A" barStyle="dark-content" />
      
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chọn chỗ</Text>
      </View> */}

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={styles.progressItem}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={styles.progressLine} />
        </View>
        <View style={styles.progressItem}>
          <View style={styles.progressDot} />
          <View style={styles.progressLine} />
        </View>
        <View style={styles.progressItem}>
          <View style={styles.progressDot} />
          <View style={styles.progressLine} />
        </View>
        <View style={styles.progressItem}>
          <View style={styles.progressDot} />
        </View>
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={styles.legendBox} />
          <Text>Chỗ trống</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, styles.pendingBox]} />
          <Text>Đang đặt</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendBox, styles.bookedBox]} />
          <Text>Đã đặt</Text>
        </View>
      </View>

      {/* Floor Selection */}
      <View style={styles.floorSelection}>
        <TouchableOpacity 
          style={[styles.floorButton, currentFloor === 1 && styles.floorButtonActive]}
          onPress={() => setCurrentFloor(1)}
        >
          <Text style={[styles.floorButtonText, currentFloor === 1 && styles.floorButtonTextActive]}>
            Tầng 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.floorButton, currentFloor === 2 && styles.floorButtonActive]}
          onPress={() => setCurrentFloor(2)}
        >
          <Text style={[styles.floorButtonText, currentFloor === 2 && styles.floorButtonTextActive]}>
            Tầng 2
          </Text>
        </TouchableOpacity>
      </View>

      {/* Seats Container */}
      <ScrollView style={styles.scrollContainer}>
        {renderFloorSeats(currentFloor)}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="map-outline" size={24} color="#666" />
          <Text style={styles.navText}>Lộ trình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="information-circle-outline" size={24} color="#666" />
          <Text style={styles.navText}>Thông tin xe</Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity 
        style={[
          styles.continueButton,
          selectedSeats.length > 0 && styles.continueButtonActive
        ]}
        onPress={handleBookingConfirmScreen}
      >
        <Text style={styles.continueText}>
          {selectedSeats.length > 0 
            ? `Tiếp tục (${selectedSeats.length} ghế)`
            : 'Tiếp tục'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFA500',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    borderWidth: 2,
    borderColor: '#FFA500',
  },
  activeDot: {
    backgroundColor: '#FFA500',
  },
  progressLine: {
    width: 30,
    height: 2,
    backgroundColor: '#FFA500',
    marginHorizontal: 4,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendBox: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#666',
    marginRight: 8,
  },
  pendingBox: {
    backgroundColor: '#FFA07A',
    borderColor: '#FFA07A',
  },
  bookedBox: {
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
  },
  floorSelection: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  floorButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#F5F5F5',
  },
  floorButtonActive: {
    backgroundColor: '#FFA07A',
  },
  floorButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  floorButtonTextActive: {
    color: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  seatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  column: {
    width: '30%',
  },
  seat: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  selectedSeat: {
    backgroundColor: '#FFA07A',
    borderColor: '#FFA07A',
    elevation: 5,
    shadowColor: '#FFA07A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bookedSeat: {
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
    elevation: 0,
    shadowOpacity: 0,
  },
  pendingSeat: {
    backgroundColor: '#FFA500',
    borderColor: '#FFA500',
  },
  seatId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  selectedText: {
    color: '#fff',
  },
  bookedText: {
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 8,
  },
  navButton: {
    alignItems: 'center',
    padding: 8,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  continueButton: {
    backgroundColor: '#E0E0E0',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonActive: {
    backgroundColor: '#FFA07A',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SeatSelectionScreen;

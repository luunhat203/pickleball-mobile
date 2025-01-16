import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import ActionSheet from "react-native-actions-sheet";
import { useNavigation } from "@react-navigation/native";

const LocationScreen = () => {
  const currentDate = new Date();
  const [date, setDate] = useState(new Date());
  const actionSheetRef = useRef(null);
  const actionSheetPassenger = useRef(null);
  const [passenger, setPassenger] = useState(1);
  const [passengerCnt, setPassengerCnt] = useState(passenger);
  const navigation = useNavigation();

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    actionSheetRef.current?.hide();
  };

  // Handle passenger count change
  const increasePassenger = () => {
    setPassengerCnt(passengerCnt + 1);
  };

  const decreasePassenger = () => {
    if (passengerCnt > 1) {
      setPassengerCnt(passengerCnt - 1);
    }
  };

  const handleLocationPicker = () => {
    navigation.navigate("LocationPicker", {title: "Chọn điểm đi"})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Pickup Location */}
        <TouchableOpacity style={styles.locationItem} onPress={handleLocationPicker}>
          <View style={styles.locationContent}>
            <Icon name="radio-button-checked" size={24} color="#000" />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationText}>Bến xe Mỹ Đình</Text>
            </View>
          </View>
          <Icon name="swap-vert" size={24} color="#000" />
        </TouchableOpacity>

        {/* Drop-off Location */}
        <TouchableOpacity style={styles.locationItem} onPress={handleLocationPicker}>
          <View style={styles.locationContent}>
            <Icon name="location-on" size={24} color="#000" />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationText}>Hát Lót</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Date Selection */}
        <TouchableOpacity
          style={styles.dateItem}
          onPress={() => actionSheetRef.current?.show()}
        >
          <Icon name="event" size={24} color="#000" />
          <TextInput
            style={styles.dateText}
            value={
              date.toISOString().split("T")[0] ===
              currentDate.toISOString().split("T")[0]
                ? "Ngày hôm nay"
                : date.toISOString().split("T")[0]
            }
            editable={false}
          />
        </TouchableOpacity>

        <ActionSheet ref={actionSheetRef} gestureEnabled={true}>
          <View style={styles.actionSheetContent}>
            <Text style={styles.title}>Chọn ngày</Text>
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
            />
          </View>
        </ActionSheet>

        {/* Passenger Count */}
        <TouchableOpacity
          style={styles.passengerItem}
          onPress={() => actionSheetPassenger.current?.show()}
        >
          <Icon name="person" size={24} color="#000" />
          <Text style={styles.passengerText}>{passengerCnt}</Text>
        </TouchableOpacity>

        <ActionSheet ref={actionSheetPassenger} gestureEnabled={true}>
          <View style={styles.actionSheetContent}>
            <Text style={styles.passengerTitle}>Số lượng người:</Text>
            <View style={styles.passengerControls}>
              <TouchableOpacity style={styles.passengerButton} onPress={decreasePassenger}>
                <Text style={styles.passengerButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.passengerCnt}>{passengerCnt}</Text>
              <TouchableOpacity style={styles.passengerButton} onPress={increasePassenger}>
                <Text style={styles.passengerButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ActionSheet>

        {/* Search Button */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  locationContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  locationTextContainer: {
    marginLeft: 16,
  },
  locationText: {
    fontSize: 16,
  },
  dateItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  dateText: {
    marginLeft: 16,
    fontSize: 16,
    color: "#000",
  },
  passengerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  passengerText: {
    marginLeft: 16,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#FFA07A",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  searchButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionSheetContent: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  passengerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  passengerControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  passengerButton: {
    backgroundColor: "#FFA07A",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  passengerButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  passengerCnt: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default LocationScreen;

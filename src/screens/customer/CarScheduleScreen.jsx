import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CarScheduleScreen = () => {
  const navigation = useNavigation();
  const schedules = [
    {
      company: "Hải Vân",
      route: "Mỹ Đình - Sơn La",
      type: "Luxury",
      seats: 19,
      departure: {
        time: "14:00",
        location: "Bến xe Mỹ Đình",
      },
      arrival: {
        time: "21:00",
        location: "Hát Lót",
      },
      duration: "07h00",
      originalPrice: 325000,
      discountPrice: 270000,
      discount: 17,
    },
    {
      company: "Hải Vân",
      route: "Mỹ Đình - Bản Phù",
      type: "Tiết kiệm",
      seats: 14,
      departure: {
        time: "18:30",
        location: "Bến xe Mỹ Đình",
      },
      arrival: {
        time: "23:40",
        location: "Hát Lót",
      },
      duration: "05h10",
      originalPrice: 460000,
      discountPrice: 350000,
      discount: 24,
    },
    {
      company: "Hải Vân",
      route: "Mỹ Đình - Mường Chà",
      type: "Siêu rẻ",
      seats: 17,
      departure: {
        time: "19:00",
        location: "Bến xe Mỹ Đình",
      },
      arrival: {
        time: "00:10",
        location: "Hát Lót",
      },
      duration: "05h10",
      price: 350000,
    },
  ];

  const DateItem = ({ date, index }) => (
    <View style={styles.dateItem}>
      <Text style={styles.dateNumber}>{date}</Text>
      <Text style={styles.dateIndex}>{index}</Text>
    </View>
  );

  const ScheduleCard = ({ schedule }) => (
    <TouchableOpacity onPress={() => navigation.navigate("SeatSelectionScreen")}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.companyName}>{schedule.company}</Text>
            <Text style={styles.routeName}>{schedule.route}</Text>
            <View style={styles.typeContainer}>
              <Text style={styles.typeText}>{schedule.type}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.seatsText}>{schedule.seats} chỗ trống</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            {schedule.discount ? (
              <>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>
                    -{schedule.discount}% Hôm nay
                  </Text>
                </View>
                <Text style={styles.originalPrice}>
                  {schedule.originalPrice.toLocaleString()}đ
                </Text>
                <Text style={styles.discountPrice}>
                  {schedule.discountPrice.toLocaleString()}đ
                </Text>
              </>
            ) : (
              <Text style={styles.normalPrice}>
                Từ {schedule.price.toLocaleString()}đ
              </Text>
            )}
            <Text style={styles.vatText}>đã bao gồm VAT</Text>
          </View>
        </View>

        <View style={styles.timelineContainer}>
          <View style={styles.timeline}>
            <View style={styles.timelinePoint}>
              <View style={styles.dot} />
              <View>
                <Text style={styles.timeText}>{schedule.departure.time}</Text>
                <Text style={styles.locationText}>
                  {schedule.departure.location}
                </Text>
              </View>
            </View>
            <View style={styles.timelineLine} />
            <View style={styles.timelinePoint}>
              <View style={styles.dot} />
              <View>
                <Text style={styles.timeText}>{schedule.arrival.time}</Text>
                <Text style={styles.locationText}>
                  {schedule.arrival.location}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.durationText}>{schedule.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Date Picker */}
      <ScrollView
        horizontal
        style={styles.datePicker}
        showsHorizontalScrollIndicator={false}
      >
        {[14, 15, 16, 17, 18, 19, 20].map((date, index) => (
          <DateItem key={date} date={date} index={index + 15} />
        ))}
        <TouchableOpacity style={styles.calendarButton}>
          <Icon name="calendar" size={24} color="#000" />
        </TouchableOpacity>
      </ScrollView>

      {/* Schedule List */}
      <ScrollView style={styles.scheduleList}>
        {schedules.map((schedule, index) => (
          <ScheduleCard key={index} schedule={schedule} />
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Text style={styles.bottomNavText}>Giờ xuất bến</Text>
          <Icon name="chevron-down" size={16} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Text style={styles.bottomNavText}>Giá</Text>
          <Icon name="chevron-down" size={16} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Text style={[styles.bottomNavText, styles.promoText]}>
            Khuyến mãi
          </Text>
          <View style={styles.promoBadge}>
            <Text style={styles.promoBadgeText}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="options" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFC107",
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "500",
  },
  datePicker: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dateItem: {
    alignItems: "center",
    marginHorizontal: 8,
    minWidth: 40,
  },
  dateNumber: {
    fontSize: 16,
  },
  dateIndex: {
    fontSize: 12,
    color: "#666",
  },
  calendarButton: {
    marginLeft: 8,
    justifyContent: "center",
  },
  scheduleList: {
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "500",
  },
  routeName: {
    fontSize: 14,
    color: "#666",
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  typeText: {
    fontSize: 14,
  },
  dot: {
    marginHorizontal: 4,
  },
  seatsText: {
    fontSize: 14,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  discountBadge: {
    backgroundColor: "#FF4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: "white",
    fontSize: 12,
  },
  originalPrice: {
    color: "#999",
    textDecorationLine: "line-through",
    fontSize: 14,
  },
  discountPrice: {
    color: "#FFC107",
    fontSize: 16,
    fontWeight: "500",
  },
  normalPrice: {
    color: "#FFC107",
    fontSize: 16,
    fontWeight: "500",
  },
  vatText: {
    fontSize: 12,
    color: "#666",
  },
  timelineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeline: {
    flex: 1,
  },
  timelinePoint: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  timelineLine: {
    width: 1,
    height: 16,
    backgroundColor: "#DDD",
    marginLeft: 4,
    marginVertical: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
    marginTop: 6,
    marginRight: 8,
  },
  timeText: {
    fontSize: 14,
    fontWeight: "500",
  },
  locationText: {
    fontSize: 14,
    color: "#666",
  },
  durationText: {
    fontSize: 14,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  bottomNavItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomNavText: {
    marginRight: 4,
    fontSize: 14,
  },
  promoText: {
    color: "#FF4444",
  },
  promoBadge: {
    backgroundColor: "#FF4444",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  promoBadgeText: {
    color: "white",
    fontSize: 12,
  },
});

export default CarScheduleScreen;

import React from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BookingConfirmScreen = () => {
  const navigation = useNavigation();

  const handlePaymentScreen = () => {
    navigation.navigate("PaymentScreen")
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header - Fixed at top */}
      {/* <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={styles.headerTitle}>Xác nhận thông tin</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressDot} />
          <View style={[styles.progressLine, styles.activeLine]} />
          <View style={[styles.progressDot, styles.inactiveDot]} />
          <View style={styles.progressLine} />
          <View style={[styles.progressDot, styles.inactiveDot]} />
          <View style={styles.progressLine} />
          <View style={[styles.progressDot, styles.inactiveDot]} />
        </View>
      </View> */}

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Timer */}
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Thời gian đặt vé còn: 9:57</Text>
        </View>

        {/* Location Selection */}
        <TouchableOpacity style={styles.locationSelector}>
          <Text style={styles.locationText}>Mỹ Đình - Sơn La</Text>
          <Text style={styles.locationSubText}>Luxury</Text>
          <View style={styles.locationRight}>
            <Text style={styles.dateText}>Hải Vân</Text>
            <Text style={styles.dateSubText}>20/01/2025</Text>
          </View>
          <AntDesign name="down" size={24} color="black" />
        </TouchableOpacity>

        {/* Membership Card */}
        <View style={styles.membershipCard}>
          <Text>Membership</Text>
          <Text style={styles.membershipText}>Kim cương</Text>
          <MaterialIcons name="verified-user" size={24} color="#FFD700" />
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Họ và tên *</Text>
            <TextInput 
              style={styles.input}
              value="Lưu Phúc Ân"
              editable={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Số điện thoại *</Text>
            <TextInput 
              style={styles.input}
              value="0398653926"
              editable={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input}
              placeholder="Vui lòng nhập email"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ghi chú</Text>
            <TextInput 
              style={styles.input}
              placeholder="Vui lòng nhập ghi chú"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Additional Options */}
        <View style={styles.optionsContainer}>
          <View style={styles.optionRow}>
            <Text>Tôi cần xuất hoá đơn</Text>
            <Switch />
          </View>

          {/* Points Section */}
          <View style={styles.pointsContainer}>
            <View style={styles.pointsRow}>
              <Ionicons name="gift-outline" size={20} color="#666" />
              <Text style={styles.pointsText}>Khuyến mãi</Text>
              <Text>Bạn có 0 mã</Text>
            </View>
            <View style={styles.pointsRow}>
              <Ionicons name="star-outline" size={20} color="#666" />
              <Text style={styles.pointsText}>Điểm thưởng</Text>
              <Text>Bạn có 151,250 điểm</Text>
            </View>
          </View>
        </View>

        {/* Add padding at bottom to ensure content doesn't get hidden behind footer */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Footer stays fixed at bottom */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Tổng</Text>
          <Text style={styles.totalAmount}>325,000đ</Text>
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handlePaymentScreen}>
          <Text style={styles.continueButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFC107',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  progressDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
  },
  inactiveDot: {
    backgroundColor: '#E0E0E0',
  },
  progressLine: {
    width: 40,
    height: 2,
    backgroundColor: '#E0E0E0',
  },
  activeLine: {
    backgroundColor: '#4CAF50',
  },
  scrollView: {
    flex: 1,
  },
  timerContainer: {
    padding: 12,
    backgroundColor: '#FFF3E0',
  },
  timerText: {
    color: '#FF9800',
  },
  locationSelector: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationSubText: {
    color: '#666',
  },
  locationRight: {
    alignItems: 'flex-end',
  },
  dateText: {
    fontWeight: 'bold',
  },
  dateSubText: {
    color: '#666',
  },
  membershipCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFF8E1',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  membershipText: {
    color: '#FFA000',
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: '#666',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 4,
  },
  optionsContainer: {
    padding: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  pointsContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  pointsText: {
    marginLeft: 8,
    marginRight: 8,
  },
  bottomPadding: {
    height: 20,
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  continueButton: {
    backgroundColor: '#FFA07A',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingConfirmScreen;

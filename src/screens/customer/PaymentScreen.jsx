import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const PaymentScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: 1,
      title: 'Thanh toán bằng mã QR',
      subtitle: 'Thanh toán bằng mã QR qua VNPay',
      icon: 'qrcode',
    },
    {
      id: 2,
      title: 'Thanh toán trực tuyến',
      subtitle: 'Thanh toán trực tuyến qua VNPay',
      icon: 'credit-card-outline',
    },
    {
      id: 3,
      title: 'Thanh toán bằng thẻ quốc tế',
      subtitle: 'Visa, Mastercard, JCB, Amex',
      icon: 'credit-card',
    },
    {
      id: 4,
      title: 'Tiền mặt',
      subtitle: 'Thanh toán bằng tiền mặt khi lên xe',
      icon: 'cash',
    },
    {
      id: 5,
      title: 'Chuyển khoản',
      subtitle: 'Thanh toán bằng chuyển khoản ngân hàng',
      icon: 'bank-transfer',
    },
  ];

  const bookingInfo = {
    bookingId: 'B01V1G4L94V',
    route: 'Mỹ Đình - Sơn La',
    departureTime: '20-01-2025 06:00',
    carrier: 'Hải Vân',
    total: '325,000đ',
  };

  const RadioButton = ({ selected }) => (
    <View style={styles.radioContainer}>
      {selected ? (
        <View style={styles.radioButtonSelected}>
          <View style={styles.radioButtonInner} />
        </View>
      ) : (
        <View style={styles.radioButton} />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Thanh toán</Text>
      </View> */}

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={styles.progressLine}>
          {[1, 2, 3, 4].map((item, index) => (
            <React.Fragment key={item}>
              <View style={styles.progressDot}>
                <MaterialIcons name="check" size={16} color="#fff" />
              </View>
              {index < 3 && <View style={styles.progressBar} />}
            </React.Fragment>
          ))}
        </View>
      </View>

      <Text style={styles.bookingTime}>Thời gian đặt vé còn: 9:46</Text>

      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>Vui lòng chọn hình thức thanh toán</Text>
      <ScrollView style={styles.methodsContainer}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={styles.methodItem}
            onPress={() => setSelectedMethod(method.id)}
          >
            <MaterialCommunityIcons name={method.icon} size={24} color="#666" />
            <View style={styles.methodText}>
              <Text style={styles.methodTitle}>{method.title}</Text>
              <Text style={styles.methodSubtitle}>{method.subtitle}</Text>
            </View>
            <RadioButton selected={selectedMethod === method.id} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Booking Information */}
      <View style={styles.bookingInfo}>
        <Text style={styles.bookingTitle}>Thông tin đặt chỗ</Text>
        <View style={styles.bookingRow}>
          <Text style={styles.bookingLabel}>Booking #</Text>
          <Text style={styles.bookingValue}>{bookingInfo.bookingId}</Text>
        </View>
        <View style={styles.bookingRow}>
          <Text style={styles.bookingLabel}>Tên tuyến</Text>
          <Text style={styles.bookingValue}>{bookingInfo.route}</Text>
        </View>
        <View style={styles.bookingRow}>
          <Text style={styles.bookingLabel}>Giờ xuất bến</Text>
          <Text style={styles.bookingValue}>{bookingInfo.departureTime}</Text>
        </View>
        <View style={styles.bookingRow}>
          <Text style={styles.bookingLabel}>Đơn vị vận chuyển</Text>
          <Text style={styles.bookingValue}>{bookingInfo.carrier}</Text>
        </View>
      </View>

      {/* Total and Payment Button */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Tổng</Text>
          <Text style={styles.totalAmount}>{bookingInfo.total}</Text>
        </View>
        <TouchableOpacity 
          style={[
            styles.paymentButton,
            !selectedMethod && styles.paymentButtonDisabled
          ]}
          disabled={!selectedMethod}
        >
          <Text style={styles.paymentButtonText}>Thanh toán</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFB800',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#000',
  },
  progressContainer: {
    padding: 16,
  },
  progressLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFA07A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: '#FFB800',
    marginHorizontal: 4,
  },
  bookingTime: {
    textAlign: 'center',
    marginVertical: 16,
    color: '#666',
  },
  sectionTitle: {
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
  methodsContainer: {
    flex: 1,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  methodText: {
    flex: 1,
    marginLeft: 16,
  },
  methodTitle: {
    fontSize: 16,
    color: '#333',
  },
  methodSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  radioContainer: {
    marginLeft: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666',
  },
  radioButtonSelected: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFA07A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#FFA07A',
  },
  bookingInfo: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  bookingLabel: {
    color: '#666',
  },
  bookingValue: {
    color: '#333',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: '#333',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentButton: {
    backgroundColor: '#FFA07A',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  paymentButtonDisabled: {
    backgroundColor: '#ccc',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;

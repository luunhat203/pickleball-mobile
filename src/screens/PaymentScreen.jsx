import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function PaymentScreen() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [saveCard, setSaveCard] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);

    // Thông tin đặt sân
    const bookingDetails = {
        court: 'Sân Pickleball Đông Hòa',
        courtType: 'Sân trong nhà - Premium',
        date: 'Chủ nhật, 02/03/2025',
        time: '18:00 - 20:00',
        players: 4,
        price: 300000,
        serviceFee: 15000,
        discount: 0,
    };

    // Áp dụng mã giảm giá
    const applyPromoCode = () => {
        if (promoCode.toUpperCase() === 'PICKLEBALL10') {
            bookingDetails.discount = 30000;
            setPromoApplied(true);
            Alert.alert('Thành công', 'Đã áp dụng mã giảm giá PICKLEBALL10');
        } else {
            Alert.alert('Lỗi', 'Mã giảm giá không hợp lệ');
            setPromoApplied(false);
        }
    };

    // Format số thẻ
    const formatCardNumber = (text) => {
        const cleaned = text.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = cleaned.match(/\d{1,4}/g);
        const formatted = matches ? matches.join(' ') : '';
        return formatted.substr(0, 19); // Giới hạn 16 chữ số + 3 dấu cách
    };

    // Format ngày hết hạn
    const formatExpiryDate = (text) => {
        const cleaned = text.replace(/[^0-9]/gi, '');
        if (cleaned.length >= 3) {
            return `${cleaned.substr(0, 2)}/${cleaned.substr(2, 2)}`;
        }
        return cleaned;
    };

    // Xử lý thanh toán
    const handlePayment = () => {
        Alert.alert(
            'Xác nhận thanh toán',
            'Bạn có chắc chắn muốn thanh toán cho đặt sân này?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Xác nhận',
                    onPress: () => {
                        Alert.alert('Thành công', 'Thanh toán thành công! Thông tin đặt sân đã được gửi đến email của bạn.');
                    },
                },
            ]
        );
    };

    // Tính tổng tiền
    const calculateTotal = () => {
        return bookingDetails.price + bookingDetails.serviceFee - bookingDetails.discount;
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Thanh toán</Text>
                        <View style={{ width: 24 }} /> {/* Placeholder để cân bằng layout */}
                    </View>

                    {/* Chi tiết đặt sân */}
                    <View style={styles.bookingCard}>
                        <View style={styles.courtImageContainer}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/150' }}
                                style={styles.courtImage}
                            />
                            <View style={styles.courtTypeTag}>
                                <Text style={styles.courtTypeText}>Premium</Text>
                            </View>
                        </View>

                        <View style={styles.bookingDetails}>
                            <Text style={styles.courtName}>{bookingDetails.court}</Text>
                            <Text style={styles.courtType}>{bookingDetails.courtType}</Text>

                            <View style={styles.bookingInfo}>
                                <View style={styles.infoItem}>
                                    <Ionicons name="calendar-outline" size={16} color="#666" />
                                    <Text style={styles.infoText}>{bookingDetails.date}</Text>
                                </View>
                                <View style={styles.infoItem}>
                                    <Ionicons name="time-outline" size={16} color="#666" />
                                    <Text style={styles.infoText}>{bookingDetails.time}</Text>
                                </View>
                                <View style={styles.infoItem}>
                                    <Ionicons name="people-outline" size={16} color="#666" />
                                    <Text style={styles.infoText}>{bookingDetails.players} người chơi</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Phương thức thanh toán */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>

                        <View style={styles.paymentOptions}>
                            <TouchableOpacity
                                style={[
                                    styles.paymentOption,
                                    selectedPaymentMethod === 'credit' && styles.selectedPaymentOption
                                ]}
                                onPress={() => setSelectedPaymentMethod('credit')}
                            >
                                <FontAwesome name="credit-card" size={20} color={selectedPaymentMethod === 'credit' ? "#FF6B6B" : "#666"} />
                                <Text style={[
                                    styles.paymentOptionText,
                                    selectedPaymentMethod === 'credit' && styles.selectedPaymentOptionText
                                ]}>
                                    Thẻ tín dụng
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.paymentOption,
                                    selectedPaymentMethod === 'banking' && styles.selectedPaymentOption
                                ]}
                                onPress={() => setSelectedPaymentMethod('banking')}
                            >
                                <MaterialCommunityIcons name="bank-outline" size={20} color={selectedPaymentMethod === 'banking' ? "#FF6B6B" : "#666"} />
                                <Text style={[
                                    styles.paymentOptionText,
                                    selectedPaymentMethod === 'banking' && styles.selectedPaymentOptionText
                                ]}>
                                    Internet Banking
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.paymentOption,
                                    selectedPaymentMethod === 'momo' && styles.selectedPaymentOption
                                ]}
                                onPress={() => setSelectedPaymentMethod('momo')}
                            >
                                <MaterialCommunityIcons name="wallet-outline" size={20} color={selectedPaymentMethod === 'momo' ? "#FF6B6B" : "#666"} />
                                <Text style={[
                                    styles.paymentOptionText,
                                    selectedPaymentMethod === 'momo' && styles.selectedPaymentOptionText
                                ]}>
                                    Ví MoMo
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Form thông tin thẻ */}
                        {selectedPaymentMethod === 'credit' && (
                            <View style={styles.cardForm}>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.inputLabel}>Số thẻ</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="1234 5678 9012 3456"
                                        keyboardType="numeric"
                                        value={cardNumber}
                                        onChangeText={(text) => setCardNumber(formatCardNumber(text))}
                                        maxLength={19}
                                    />
                                </View>

                                <View style={styles.inputGroup}>
                                    <Text style={styles.inputLabel}>Tên chủ thẻ</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="NGUYEN VAN A"
                                        autoCapitalize="characters"
                                        value={cardName}
                                        onChangeText={setCardName}
                                    />
                                </View>

                                <View style={styles.inputRow}>
                                    <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                                        <Text style={styles.inputLabel}>Ngày hết hạn</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="MM/YY"
                                            keyboardType="numeric"
                                            value={expiryDate}
                                            onChangeText={(text) => setExpiryDate(formatExpiryDate(text))}
                                            maxLength={5}
                                        />
                                    </View>

                                    <View style={[styles.inputGroup, { flex: 1 }]}>
                                        <Text style={styles.inputLabel}>CVV</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="123"
                                            keyboardType="numeric"
                                            secureTextEntry
                                            value={cvv}
                                            onChangeText={setCvv}
                                            maxLength={3}
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={styles.saveCardOption}
                                    onPress={() => setSaveCard(!saveCard)}
                                >
                                    <View style={[
                                        styles.checkbox,
                                        saveCard && styles.checkboxChecked
                                    ]}>
                                        {saveCard && <Ionicons name="checkmark" size={12} color="#FFF" />}
                                    </View>
                                    <Text style={styles.saveCardText}>Lưu thông tin thẻ cho lần sau</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {/* Nội dung cho các phương thức khác */}
                        {selectedPaymentMethod === 'banking' && (
                            <View style={styles.otherPaymentInfo}>
                                <Text style={styles.otherPaymentText}>
                                    Bạn sẽ được chuyển đến trang ngân hàng của bạn để hoàn tất thanh toán.
                                </Text>
                            </View>
                        )}

                        {selectedPaymentMethod === 'momo' && (
                            <View style={styles.otherPaymentInfo}>
                                <Text style={styles.otherPaymentText}>
                                    Bạn sẽ được chuyển đến ứng dụng MoMo để hoàn tất thanh toán.
                                </Text>
                            </View>
                        )}
                    </View>

                    {/* Mã giảm giá */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Mã giảm giá</Text>
                        <View style={styles.promoContainer}>
                            <TextInput
                                style={styles.promoInput}
                                placeholder="Nhập mã giảm giá"
                                value={promoCode}
                                onChangeText={setPromoCode}
                            />
                            <TouchableOpacity
                                style={[
                                    styles.promoButton,
                                    promoApplied && styles.promoButtonApplied
                                ]}
                                onPress={applyPromoCode}
                                disabled={promoApplied}
                            >
                                <Text style={styles.promoButtonText}>
                                    {promoApplied ? 'Đã áp dụng' : 'Áp dụng'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Chi tiết thanh toán */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Chi tiết thanh toán</Text>

                        <View style={styles.priceDetails}>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Giá sân</Text>
                                <Text style={styles.priceValue}>{bookingDetails.price.toLocaleString()}đ</Text>
                            </View>

                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Phí dịch vụ</Text>
                                <Text style={styles.priceValue}>{bookingDetails.serviceFee.toLocaleString()}đ</Text>
                            </View>

                            {bookingDetails.discount > 0 && (
                                <View style={styles.priceRow}>
                                    <Text style={styles.priceLabel}>Giảm giá</Text>
                                    <Text style={[styles.priceValue, styles.discountText]}>-{bookingDetails.discount.toLocaleString()}đ</Text>
                                </View>
                            )}

                            <View style={styles.divider} />

                            <View style={styles.priceRow}>
                                <Text style={styles.totalLabel}>Tổng thanh toán</Text>
                                <Text style={styles.totalValue}>{calculateTotal().toLocaleString()}đ</Text>
                            </View>
                        </View>
                    </View>

                    {/* Điều khoản và điều kiện */}
                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>
                            Bằng cách tiếp tục, bạn đồng ý với <Text style={styles.termsLink}>Điều khoản dịch vụ</Text> và <Text style={styles.termsLink}>Chính sách bảo mật</Text> của chúng tôi.
                        </Text>
                    </View>
                </ScrollView>

                {/* Nút thanh toán */}
                <View style={styles.paymentButtonContainer}>
                    <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
                        <Text style={styles.paymentButtonText}>Thanh toán {calculateTotal().toLocaleString()}đ</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    bookingCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        margin: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    courtImageContainer: {
        position: 'relative',
    },
    courtImage: {
        height: 130,
        width: '100%',
    },
    courtTypeTag: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    courtTypeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    bookingDetails: {
        padding: 15,
    },
    courtName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    courtType: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    bookingInfo: {
        marginTop: 5,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 13,
        color: '#666',
        marginLeft: 8,
    },
    sectionContainer: {
        backgroundColor: '#fff',
        margin: 15,
        marginVertical: 10,
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    paymentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    paymentOption: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    selectedPaymentOption: {
        borderColor: '#FF6B6B',
        backgroundColor: '#FFF0F0',
    },
    paymentOptionText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 5,
    },
    selectedPaymentOptionText: {
        color: '#FF6B6B',
        fontWeight: 'bold',
    },
    cardForm: {
        marginTop: 10,
    },
    inputGroup: {
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 13,
        color: '#666',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        backgroundColor: '#f9f9f9',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    saveCardOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#FF6B6B',
        borderColor: '#FF6B6B',
    },
    saveCardText: {
        fontSize: 13,
        color: '#666',
    },
    otherPaymentInfo: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
    },
    otherPaymentText: {
        fontSize: 13,
        color: '#666',
        textAlign: 'center',
    },
    promoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promoInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        backgroundColor: '#f9f9f9',
        marginRight: 10,
    },
    promoButton: {
        backgroundColor: '#FF6B6B',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    promoButtonApplied: {
        backgroundColor: '#8BC34A',
    },
    promoButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    priceDetails: {
        padding: 5,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    priceLabel: {
        fontSize: 14,
        color: '#666',
    },
    priceValue: {
        fontSize: 14,
        color: '#333',
    },
    discountText: {
        color: '#8BC34A',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6B6B',
    },
    termsContainer: {
        padding: 15,
        marginHorizontal: 15,
        marginTop: 5,
        marginBottom: 80,
    },
    termsText: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
    },
    termsLink: {
        color: '#FF6B6B',
    },
    paymentButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    paymentButton: {
        backgroundColor: '#FF6B6B',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    paymentButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
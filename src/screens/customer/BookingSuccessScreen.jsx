import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function BookingSuccessScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            {/* Success Message */}
            <View style={styles.successContainer}>
                <Text style={styles.successText}>
                    Đặt chỗ thành công <Text style={styles.checkmark}>✓</Text>
                </Text>
            </View>

            {/* Bus Icon */}
            <View style={styles.iconContainer}>
                <Image
                    source={require('../../assets/icons8-bus-100.png')}
                    style={styles.busImage}
                />
                <Text style={styles.tripDetailsTitle}>Chi tiết chuyến đi</Text>
            </View>

            {/* Journey Details */}
            <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Booking #</Text>
                    <Text style={styles.value}>B01BZ24JR4E</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Giờ xuất bến</Text>
                    <Text style={styles.value}>17-02-2025 22:00</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Tên tuyến</Text>
                    <Text style={styles.value}>Mỹ Đình - Sơn La</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Đơn vị vận chuyển</Text>
                    <Text style={styles.value}>Hải Vân</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Hạng xe</Text>
                    <Text style={styles.value}>Royal</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Số ghế/giường</Text>
                    <Text style={styles.value}>2</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Điểm lên xe</Text>
                    <Text style={styles.value}>Hát Lót</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Điểm xuống xe</Text>
                    <Text style={styles.value}>Bến xe Mỹ Đình</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Phụ thu</Text>
                    <Text style={styles.value}>0đ</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Giá vé</Text>
                    <Text style={styles.value}>400,000đ</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Trạng thái</Text>
                    <Text style={[styles.value, styles.unpaidStatus]}>Chưa thanh toán</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Tổng</Text>
                    <Text style={styles.value}>400,000đ</Text>
                </View>
            </View>

            {/* Thank You Message */}
            <Text style={styles.thankYouText}>
                Cảm ơn đã sử dụng dịch vụ của Sao Việt.
            </Text>

            {/* Search Button */}
            <TouchableOpacity style={styles.searchButton}>
                <View style={styles.searchButtonContent}>
                    <Text style={styles.searchButtonText}>Tìm chuyến đi khác</Text>
                </View>
            </TouchableOpacity>

            {/* Ticket Button */}
            <TouchableOpacity style={styles.ticketButton}>
                <Text style={styles.ticketButtonText}>Vé của tôi</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#FDB022',
        paddingVertical: 15,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    successContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    successText: {
        fontSize: 20,
        color: '#000000',
        fontWeight: '500',
    },
    checkmark: {
        color: '#4CAF50',
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    busImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    tripDetailsTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5,
    },
    detailsContainer: {
        paddingHorizontal: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    label: {
        fontSize: 14,
        color: '#666666',
    },
    value: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '500',
    },
    unpaidStatus: {
        color: '#FF0000',
    },
    thankYouText: {
        textAlign: 'center',
        color: '#666666',
        fontSize: 14,
        marginVertical: 20,
    },
    searchButton: {
        marginHorizontal: 16,
        marginBottom: 12,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E5E5',
    },
    searchButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    searchButtonText: {
        fontSize: 14,
        color: '#000000',
    },
    ticketButton: {
        marginHorizontal: 16,
        marginBottom: 16,
        paddingVertical: 12,
        backgroundColor: '#FFA07A',
        borderRadius: 8,
        alignItems: 'center',
    },
    ticketButtonText: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '500',
    },
});
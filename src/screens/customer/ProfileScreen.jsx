import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar,
    FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const CustomerProfileScreen = ({ navigation }) => {
    // Dữ liệu người dùng mẫu (trong thực tế sẽ lấy từ API)
    const [userData, setUserData] = useState({
        id: 'USR12345',
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@email.com',
        phone: '0912345678',
        address: '123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh',
        memberSince: '01/2023',
        avatarUrl: 'https://via.placeholder.com/150',
    });

    // Dữ liệu đơn hàng mẫu (trong thực tế sẽ lấy từ API)
    const [orders, setOrders] = useState([
        {
            id: 'ORD0001',
            date: '15/02/2025',
            status: 'Đã giao hàng',
            totalAmount: 2450000,
            items: [
                {
                    id: 'PRD001',
                    name: 'Vợt Pickleball Pro Carbon Elite',
                    image: 'https://via.placeholder.com/100',
                    price: 1750000,
                    quantity: 1,
                },
                {
                    id: 'PRD002',
                    name: 'Bóng Pickleball Dura Fast 40',
                    image: 'https://via.placeholder.com/100',
                    price: 350000,
                    quantity: 2,
                },
            ],
        },
        {
            id: 'ORD0002',
            date: '28/01/2025',
            status: 'Đã giao hàng',
            totalAmount: 3200000,
            items: [
                {
                    id: 'PRD003',
                    name: 'Vợt Pickleball Bantam EX-L',
                    image: 'https://via.placeholder.com/100',
                    price: 2200000,
                    quantity: 1,
                },
                {
                    id: 'PRD004',
                    name: 'Túi đựng vợt Pickleball',
                    image: 'https://via.placeholder.com/100',
                    price: 1000000,
                    quantity: 1,
                },
            ],
        },
    ]);

    // Mở rộng/thu gọn thông tin đơn hàng
    const [expandedOrder, setExpandedOrder] = useState(null);

    const toggleOrderExpansion = (orderId) => {
        if (expandedOrder === orderId) {
            setExpandedOrder(null);
        } else {
            setExpandedOrder(orderId);
        }
    };

    // Định dạng tiền VND
    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
    };

    // Màu sắc trạng thái đơn hàng
    const getStatusColor = (status) => {
        switch (status) {
            case 'Đã giao hàng':
                return '#4CAF50';
            case 'Đang giao hàng':
                return '#2196F3';
            case 'Đang xử lý':
                return '#FF9800';
            case 'Đã hủy':
                return '#F44336';
            default:
                return '#757575';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#2E7D32" barStyle="light-content" />

            {/* Header */}
            <LinearGradient
                colors={['#4CAF50', '#2E7D32']}
                style={styles.header}
            >
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="arrow-left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Hồ Sơ Của Tôi</Text>
                    <TouchableOpacity style={styles.settingsButton}>
                        <Feather name="settings" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <ScrollView style={styles.scrollView}>
                {/* Thông tin cá nhân */}
                <View style={styles.profileSection}>
                    <View style={styles.profileHeader}>
                        <Image
                            source={{ uri: userData.avatarUrl }}
                            style={styles.avatar}
                        />
                        <View style={styles.profileInfo}>
                            <Text style={styles.userName}>{userData.name}</Text>
                            <Text style={styles.userMembership}>
                                Thành viên từ: {userData.memberSince}
                            </Text>
                            <TouchableOpacity style={styles.editProfileButton}>
                                <Text style={styles.editProfileText}>Chỉnh sửa hồ sơ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.contactInfoContainer}>
                        <View style={styles.contactInfoItem}>
                            <MaterialIcons name="email" size={20} color="#2E7D32" />
                            <Text style={styles.contactInfoText}>{userData.email}</Text>
                        </View>
                        <View style={styles.contactInfoItem}>
                            <MaterialIcons name="phone" size={20} color="#2E7D32" />
                            <Text style={styles.contactInfoText}>{userData.phone}</Text>
                        </View>
                        <View style={styles.contactInfoItem}>
                            <MaterialIcons name="location-on" size={20} color="#2E7D32" />
                            <Text style={styles.contactInfoText}>{userData.address}</Text>
                        </View>
                    </View>
                </View>

                {/* Thanh điều hướng nhanh */}
                <View style={styles.quickNav}>
                    <TouchableOpacity style={styles.quickNavItem}>
                        <MaterialIcons name="favorite-border" size={24} color="#2E7D32" />
                        <Text style={styles.quickNavText}>Yêu thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickNavItem}>
                        <FontAwesome name="shopping-cart" size={24} color="#2E7D32" />
                        <Text style={styles.quickNavText}>Giỏ hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickNavItem}>
                        <MaterialIcons name="local-shipping" size={24} color="#2E7D32" />
                        <Text style={styles.quickNavText}>Đang giao</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickNavItem}>
                        <MaterialIcons name="support-agent" size={24} color="#2E7D32" />
                        <Text style={styles.quickNavText}>Hỗ trợ</Text>
                    </TouchableOpacity>
                </View>

                {/* Phần lịch sử đơn hàng */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Lịch Sử Đơn Hàng</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("HistoryOrderScreen")}>
                            <Text style={styles.seeAllText}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    {orders.map((order) => (
                        <View key={order.id} style={styles.orderCard}>
                            <TouchableOpacity
                                style={styles.orderHeader}
                                onPress={() => toggleOrderExpansion(order.id)}
                            >
                                <View>
                                    <Text style={styles.orderNumber}>Đơn hàng #{order.id}</Text>
                                    <Text style={styles.orderDate}>{order.date}</Text>
                                </View>
                                <View style={styles.orderHeaderRight}>
                                    <Text
                                        style={[
                                            styles.orderStatus,
                                            { color: getStatusColor(order.status) },
                                        ]}
                                    >
                                        {order.status}
                                    </Text>
                                    <MaterialIcons
                                        name={
                                            expandedOrder === order.id
                                                ? 'keyboard-arrow-up'
                                                : 'keyboard-arrow-down'
                                        }
                                        size={24}
                                        color="#757575"
                                    />
                                </View>
                            </TouchableOpacity>

                            {expandedOrder === order.id && (
                                <View style={styles.orderDetails}>
                                    {order.items.map((item) => (
                                        <View key={item.id} style={styles.orderItem}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={styles.productImage}
                                            />
                                            <View style={styles.productInfo}>
                                                <Text style={styles.productName}>{item.name}</Text>
                                                <Text style={styles.productPrice}>
                                                    {formatCurrency(item.price)} x {item.quantity}
                                                </Text>
                                            </View>
                                        </View>
                                    ))}
                                    <View style={styles.orderSummary}>
                                        <Text style={styles.orderTotal}>
                                            Tổng cộng: {formatCurrency(order.totalAmount)}
                                        </Text>
                                        <TouchableOpacity style={styles.reorderButton}>
                                            <Text style={styles.reorderButtonText}>Mua lại</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                {/* Phần sản phẩm gợi ý */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Gợi ý cho bạn</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.suggestionsScroll}
                    >
                        {[1, 2, 3, 4].map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.suggestionCard}
                            >
                                <Image
                                    source={{ uri: 'https://via.placeholder.com/150' }}
                                    style={styles.suggestionImage}
                                />
                                <Text style={styles.suggestionName}>
                                    Vợt Pickleball Pro Series {item}
                                </Text>
                                <Text style={styles.suggestionPrice}>
                                    {formatCurrency(1200000 + item * 100000)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        paddingTop: 10,
        paddingBottom: 15,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    settingsButton: {
        padding: 8,
    },
    scrollView: {
        flex: 1,
    },
    profileSection: {
        backgroundColor: 'white',
        borderRadius: 12,
        margin: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    userMembership: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 8,
    },
    editProfileButton: {
        backgroundColor: '#e0f2e0',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    editProfileText: {
        color: '#2E7D32',
        fontWeight: '500',
        fontSize: 12,
    },
    contactInfoContainer: {
        marginTop: 8,
    },
    contactInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    contactInfoText: {
        fontSize: 14,
        color: '#555',
        marginLeft: 8,
    },
    quickNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    quickNavItem: {
        alignItems: 'center',
    },
    quickNavText: {
        marginTop: 4,
        fontSize: 12,
        color: '#555',
    },
    sectionContainer: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    seeAllText: {
        color: '#2E7D32',
        fontWeight: '500',
        fontSize: 14,
    },
    orderCard: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        marginBottom: 12,
        overflow: 'hidden',
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f9f9f9',
    },
    orderNumber: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    orderDate: {
        fontSize: 14,
        color: '#757575',
        marginTop: 2,
    },
    orderHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderStatus: {
        fontSize: 14,
        fontWeight: '500',
        marginRight: 4,
    },
    orderDetails: {
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    orderItem: {
        flexDirection: 'row',
        marginBottom: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 4,
        marginRight: 12,
    },
    productInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: '#757575',
    },
    orderSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    orderTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    reorderButton: {
        backgroundColor: '#2E7D32',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    reorderButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
    },
    suggestionsScroll: {
        marginTop: 8,
    },
    suggestionCard: {
        width: 140,
        marginRight: 12,
    },
    suggestionImage: {
        width: 140,
        height: 140,
        borderRadius: 8,
        marginBottom: 8,
    },
    suggestionName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 4,
    },
    suggestionPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2E7D32',
    },
});

export default CustomerProfileScreen;
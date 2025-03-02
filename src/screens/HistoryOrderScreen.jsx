import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    TextInput,
    StatusBar,
    ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderHistoryScreen({navigation}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('Tất cả');
    const [currentPage, setCurrentPage] = useState(1);

    // Dữ liệu mẫu
    const sampleOrders = [
        {
            id: '12345',
            date: '28/02/2025',
            total: '1.250.000đ',
            items: 3,
            status: 'Đã hoàn thành'
        },
        {
            id: '12346',
            date: '01/03/2025',
            total: '850.000đ',
            items: 2,
            status: 'Đang xử lý'
        },
        {
            id: '12340',
            date: '20/02/2025',
            total: '450.000đ',
            items: 1,
            status: 'Đã hủy'
        },
        {
            id: '12339',
            date: '15/02/2025',
            total: '520.000đ',
            items: 2,
            status: 'Đã hoàn thành'
        },
        {
            id: '12338',
            date: '10/02/2025',
            total: '1.800.000đ',
            items: 4,
            status: 'Đã hoàn thành'
        }
    ];

    const filters = [
        'Tất cả',
        'Đang xử lý',
        'Đã hoàn thành',
        'Đã hủy',
        'Thời gian gần nhất',
        'Giá trị cao nhất'
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'Đã hoàn thành':
                return { backgroundColor: '#E8F5E9', color: '#2E7D32' };
            case 'Đang xử lý':
                return { backgroundColor: '#FFF8E1', color: '#F57F17' };
            case 'Đã hủy':
                return { backgroundColor: '#FFEBEE', color: '#C62828' };
            default:
                return { backgroundColor: '#E0E0E0', color: '#616161' };
        }
    };

    const handleSearch = () => {
        // Xử lý tìm kiếm
        console.log(`Tìm kiếm đơn hàng: ${searchQuery}`);
    };

    const renderOrderItem = ({ item }) => {
        const statusStyle = getStatusColor(item.status);

        return (
            <View style={styles.orderCard}>
                <View style={styles.orderHeader}>
                    <Text style={styles.orderId}>Đơn hàng #{item.id}</Text>
                    <View style={[styles.statusBadge, { backgroundColor: statusStyle.backgroundColor }]}>
                        <Text style={[styles.statusText, { color: statusStyle.color }]}>{item.status}</Text>
                    </View>
                </View>

                <View style={styles.orderInfo}>
                    <Text style={styles.orderDetail}>Ngày đặt: {item.date}</Text>
                    <Text style={styles.orderDetail}>Tổng tiền: {item.total}</Text>
                    <Text style={styles.orderDetail}>Số lượng: {item.items} sản phẩm</Text>
                </View>

                <View style={styles.orderActions}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Xem chi tiết</Text>
                    </TouchableOpacity>

                    {item.status === 'Đã hoàn thành' || item.status === 'Đã hủy' ? (
                        <TouchableOpacity style={styles.primaryButton}>
                            <Text style={styles.primaryButtonText}>Đặt lại</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.secondaryButton}>
                            <Text style={styles.secondaryButtonText}>Hủy đơn hàng</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    };

    const renderFilterItem = (filter) => (
        <TouchableOpacity
            key={filter}
            style={[
                styles.filterButton,
                activeFilter === filter && styles.activeFilterButton
            ]}
            onPress={() => setActiveFilter(filter)}
        >
            <Text
                style={[
                    styles.filterButtonText,
                    activeFilter === filter && styles.activeFilterButtonText
                ]}
            >
                {filter}
            </Text>
        </TouchableOpacity>
    );

    const renderPaginationButton = (page) => (
        <TouchableOpacity
            key={page}
            style={[
                styles.paginationButton,
                currentPage === page && styles.activePaginationButton
            ]}
            onPress={() => setCurrentPage(page)}
        >
            <Text
                style={[
                    styles.paginationButtonText,
                    currentPage === page && styles.activePaginationButtonText
                ]}
            >
                {page}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Lịch sử đơn hàng</Text>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Tìm kiếm theo mã đơn hàng..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Ionicons name="search" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.filterContainer}
            >
                {filters.map(filter => renderFilterItem(filter))}
            </ScrollView>

            <FlatList
                data={sampleOrders}
                renderItem={renderOrderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.orderList}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.pagination}>
                <TouchableOpacity
                    style={styles.paginationNavButton}
                    onPress={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                >
                    <Ionicons name="chevron-back" size={16} color="#333" />
                </TouchableOpacity>

                {[1, 2, 3].map(page => renderPaginationButton(page))}

                <TouchableOpacity
                    style={styles.paginationNavButton}
                    onPress={() => currentPage < 3 && setCurrentPage(currentPage + 1)}
                >
                    <Ionicons name="chevron-forward" size={16} color="#333" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 15,
        zIndex: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#fff',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    searchButton: {
        width: 40,
        height: 40,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginLeft: 10,
    },
    filterContainer: {
        padding: 15,
        backgroundColor: '#fff',
    },
    filterButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },
    filterButtonText: {
        color: '#666',
    },
    activeFilterButton: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    activeFilterButtonText: {
        color: '#fff',
    },
    orderList: {
        padding: 15,
    },
    orderCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 10,
    },
    orderId: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    orderInfo: {
        marginBottom: 10,
    },
    orderDetail: {
        color: '#666',
        marginBottom: 4,
        fontSize: 13,
    },
    orderActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
    },
    primaryButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 4,
        marginLeft: 10,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 13,
    },
    secondaryButton: {
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 10,
    },
    secondaryButtonText: {
        color: '#333',
        fontSize: 13,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 5,
    },
    paginationButtonText: {
        color: '#333',
    },
    activePaginationButton: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    activePaginationButtonText: {
        color: '#fff',
    },
    paginationNavButton: {
        width: 30,
        height: 30,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 5,
    },
});
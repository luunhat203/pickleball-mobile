import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const ShoppingCartScreen = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            name: 'Áo thun trắng',
            price: 250000,
            quantity: 1,
            image: 'https://example.com/white-tshirt.jpg',
        },
        {
            id: '2',
            name: 'Quần jean xanh',
            price: 450000,
            quantity: 2,
            image: 'https://example.com/blue-jeans.jpg',
        },
        {
            id: '3',
            name: 'Giày thể thao',
            price: 850000,
            quantity: 1,
            image: 'https://example.com/sneakers.jpg',
        },
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(
            cartItems.map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + change;
                    if (newQuantity < 1) return item; // Không cho phép số lượng dưới 1
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            {/*<Image*/}
            {/*    source={{ uri: item.image }}*/}
            {/*    style={styles.itemImage}*/}
            {/*    // Fallback để tránh lỗi khi ảnh không tải được*/}
            {/*    defaultSource={require('./assets/placeholder.png')}*/}
            {/*/>*/}

            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price.toLocaleString('vi-VN')} đ</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, -1)}
                    >
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantity}>{item.quantity}</Text>

                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, 1)}
                    >
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeItem(item.id)}
            >
                <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Giỏ hàng của bạn</Text>

            {cartItems.length === 0 ? (
                <View style={styles.emptyCart}>
                    <Text style={styles.emptyCartText}>Giỏ hàng của bạn đang trống</Text>
                    <TouchableOpacity style={styles.continueShoppingButton}>
                        <Text style={styles.continueShoppingText}>Tiếp tục mua sắm</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={renderCartItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.cartList}
                    />

                    <View style={styles.footer}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalLabel}>Tổng cộng:</Text>
                            <Text style={styles.totalAmount}>
                                {calculateTotal().toLocaleString('vi-VN')} đ
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutButtonText}>Thanh toán</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
        marginHorizontal: 16,
    },
    cartList: {
        padding: 16,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'space-between',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
        color: '#E03C31',
        fontWeight: '600',
        marginVertical: 4,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantityButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 12,
    },
    removeButton: {
        padding: 8,
    },
    removeButtonText: {
        fontSize: 16,
        color: '#888',
    },
    footer: {
        backgroundColor: 'white',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E03C31',
    },
    checkoutButton: {
        backgroundColor: '#E03C31',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    emptyCartText: {
        fontSize: 18,
        marginBottom: 24,
        color: '#666',
    },
    continueShoppingButton: {
        borderWidth: 1,
        borderColor: '#E03C31',
        borderRadius: 8,
        padding: 14,
    },
    continueShoppingText: {
        color: '#E03C31',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ShoppingCartScreen;
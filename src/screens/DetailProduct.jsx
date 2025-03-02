import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = ({ route, navigation }) => {
    // Trong thực tế, bạn sẽ nhận product từ route.params
    // const { product } = route.params;

    // Dữ liệu mẫu
    const product = {
        id: '1',
        name: 'Áo Thun Unisex Cotton',
        price: 299000,
        oldPrice: 399000,
        discount: 25,
        rating: 4.8,
        reviewCount: 142,
        images: [
            'https://placeholder.com/400',
            'https://placeholder.com/400',
            'https://placeholder.com/400',
        ],
        colors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Áo thun unisex làm từ chất liệu cotton 100%, mềm mại, thấm hút mồ hôi tốt, phù hợp cho cả nam và nữ. Thiết kế đơn giản, dễ phối đồ, phù hợp cho nhiều dịp khác nhau.',
        features: [
            'Chất liệu: 100% cotton',
            'Kiểu dáng: form regular fit',
            'Cổ tròn, tay ngắn',
            'Phù hợp mặc quanh năm',
            'Giặt máy ở nhiệt độ thường',
        ]
    };

    // States
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(2); // Default is L
    const [quantity, setQuantity] = useState(1);

    // Handle quantity change
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // Format price
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ';
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="heart-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="share-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Main Image */}
                <Image
                    source={{ uri: product.images[selectedImage] }}
                    style={styles.mainImage}
                    resizeMode="cover"
                />

                {/* Image Thumbnails */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.thumbnailContainer}
                >
                    {product.images.map((image, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedImage(index)}
                            style={[
                                styles.thumbnailButton,
                                selectedImage === index && styles.selectedThumbnail
                            ]}
                        >
                            <Image
                                source={{ uri: image }}
                                style={styles.thumbnail}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Product Info */}
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.name}</Text>

                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{formatPrice(product.price)}</Text>
                        {product.oldPrice && (
                            <Text style={styles.oldPrice}>{formatPrice(product.oldPrice)}</Text>
                        )}
                        {product.discount > 0 && (
                            <View style={styles.discountBadge}>
                                <Text style={styles.discountText}>-{product.discount}%</Text>
                            </View>
                        )}
                    </View>

                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={styles.ratingText}>{product.rating}</Text>
                        <Text style={styles.reviewCount}>({product.reviewCount} đánh giá)</Text>
                    </View>

                    {/* Color Selection */}
                    <Text style={styles.sectionTitle}>Màu sắc</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.colorContainer}>
                            {product.colors.map((color, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.colorOption,
                                        { backgroundColor: color },
                                        selectedColor === index && styles.selectedColorOption
                                    ]}
                                    onPress={() => setSelectedColor(index)}
                                />
                            ))}
                        </View>
                    </ScrollView>

                    {/* Size Selection */}
                    <Text style={styles.sectionTitle}>Kích thước</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.sizeContainer}>
                            {product.sizes.map((size, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.sizeOption,
                                        selectedSize === index && styles.selectedSizeOption
                                    ]}
                                    onPress={() => setSelectedSize(index)}
                                >
                                    <Text
                                        style={[
                                            styles.sizeText,
                                            selectedSize === index && styles.selectedSizeText
                                        ]}
                                    >
                                        {size}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>

                    {/* Quantity */}
                    <Text style={styles.sectionTitle}>Số lượng</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={decreaseQuantity}
                        >
                            <Ionicons name="remove" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={increaseQuantity}
                        >
                            <Ionicons name="add" size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Description */}
                    <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
                    <Text style={styles.description}>{product.description}</Text>

                    {/* Features */}
                    <Text style={styles.sectionTitle}>Đặc điểm sản phẩm</Text>
                    {product.features.map((feature, index) => (
                        <View key={index} style={styles.featureItem}>
                            <Ionicons name="checkmark-circle" size={18} color="#4CAF50" />
                            <Text style={styles.featureText}>{feature}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Buttons */}
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
                    <Ionicons name="cart-outline" size={20} color="white" />
                    <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
                    <Text style={styles.buyNowText}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerRight: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 16,
    },
    mainImage: {
        width: windowWidth,
        height: windowWidth,
        backgroundColor: '#f5f5f5',
    },
    thumbnailContainer: {
        padding: 16,
    },
    thumbnailButton: {
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 4,
        padding: 2,
    },
    selectedThumbnail: {
        borderColor: '#2196F3',
    },
    thumbnail: {
        width: 60,
        height: 60,
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
    },
    productInfo: {
        padding: 16,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E53935',
    },
    oldPrice: {
        fontSize: 16,
        color: '#9E9E9E',
        textDecorationLine: 'line-through',
        marginLeft: 8,
    },
    discountBadge: {
        backgroundColor: '#E53935',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginLeft: 8,
    },
    discountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    reviewCount: {
        fontSize: 14,
        color: '#757575',
        marginLeft: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 10,
    },
    colorContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    colorOption: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    selectedColorOption: {
        borderWidth: 2,
        borderColor: '#2196F3',
    },
    sizeContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    sizeOption: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#f5f5f5',
    },
    selectedSizeOption: {
        borderColor: '#2196F3',
        backgroundColor: '#E3F2FD',
    },
    sizeText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    selectedSizeText: {
        color: '#2196F3',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    quantityButton: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    quantityText: {
        paddingHorizontal: 24,
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        lineHeight: 22,
        color: '#424242',
        marginBottom: 16,
    },
    featureItem: {
        flexDirection: 'row',
        marginBottom: 8,
        alignItems: 'center',
    },
    featureText: {
        fontSize: 14,
        color: '#424242',
        marginLeft: 8,
    },
    bottomButtons: {
        flexDirection: 'row',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        backgroundColor: 'white',
    },
    button: {
        flex: 1,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    addToCartButton: {
        backgroundColor: '#2196F3',
        marginRight: 8,
    },
    addToCartText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
    buyNowButton: {
        backgroundColor: '#E53935',
    },
    buyNowText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProductDetailScreen;
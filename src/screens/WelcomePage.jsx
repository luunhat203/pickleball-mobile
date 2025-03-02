import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
    // Chuyển đến màn hình đăng nhập
    const handleLogin = () => {
        navigation.navigate('LoginScreen');
        console.log('Navigate to Login Screen');
    };

    // Chuyển đến màn hình đăng ký
    const handleSignUp = () => {
        navigation.navigate('SignUpScreen');
        console.log('Navigate to Sign Up Screen');
    };

    // Chuyển đến màn hình chính như khách
    const handleGuest = () => {
        navigation.navigate('MainTabs');
        // navigation.navigate('Home');
        console.log('Navigate to Home Screen as Guest');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <LinearGradient
                colors={['#1e3c72', '#2a5298']}
                style={styles.background}
            >
                {/* Logo và hình ảnh */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../assets/istockphoto-1498453978-612x612.jpg")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.appName}>PickleballPro</Text>
                    <Text style={styles.tagline}>Nâng tầm kỹ năng pickleball của bạn</Text>
                </View>

                {/* Minh họa */}
                <View style={styles.illustrationContainer}>
                    <Image
                        source={{ uri: 'https://placeholder.com/600x400' }}
                        style={styles.illustration}
                        resizeMode="contain"
                    />
                </View>

                {/* Thông tin đặc điểm */}
                <View style={styles.featuresContainer}>
                    <View style={styles.featureItem}>
                        <View style={styles.featureIcon}>
                            <Text style={styles.featureIconText}>🏆</Text>
                        </View>
                        <Text style={styles.featureText}>Kết nối với cộng đồng Pickleball</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <View style={styles.featureIcon}>
                            <Text style={styles.featureIconText}>🔍</Text>
                        </View>
                        <Text style={styles.featureText}>Tìm kiếm vợt phù hợp với phong cách chơi</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <View style={styles.featureIcon}>
                            <Text style={styles.featureIconText}>📊</Text>
                        </View>
                        <Text style={styles.featureText}>So sánh đặc điểm kỹ thuật của vợt</Text>
                    </View>
                </View>

                {/* Các nút */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.primaryButton]}
                        onPress={handleSignUp}
                    >
                        <Text style={styles.primaryButtonText}>Đăng ký</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.secondaryButton]}
                        onPress={handleLogin}
                    >
                        <Text style={styles.secondaryButtonText}>Đăng nhập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.guestButton}
                        onPress={handleGuest}
                    >
                        <Text style={styles.guestButtonText}>Tiếp tục với tư cách khách</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </SafeAreaView>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 30,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    tagline: {
        fontSize: 16,
        color: '#E0E0E0',
        textAlign: 'center',
        marginBottom: 10,
    },
    illustrationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    illustration: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.25,
    },
    featuresContainer: {
        marginBottom: 30,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    featureIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    featureIconText: {
        fontSize: 18,
    },
    featureText: {
        fontSize: 16,
        color: 'white',
        flex: 1,
    },
    buttonContainer: {
        marginTop: 'auto',
    },
    button: {
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    primaryButton: {
        backgroundColor: '#FF9800',
    },
    primaryButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    secondaryButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderColor: 'white',
    },
    secondaryButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    guestButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    guestButtonText: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        textDecorationLine: 'underline',
    },
});

export default WelcomeScreen;
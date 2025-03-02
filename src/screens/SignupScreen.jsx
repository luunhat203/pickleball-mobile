import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleRegister = () => {
        console.log('Đăng ký:', { fullName, email, phoneNumber, password });
        // Xử lý logic đăng ký ở đây
    };

    const navigateToLogin = () => {
        // Điều hướng đến màn hình đăng nhập
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{ uri: 'https://via.placeholder.com/150' }}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.appName}>PicklePro</Text>
                        <Text style={styles.tagline}>Cửa hàng vợt pickleball chất lượng cao</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.headerText}>Đăng Ký Tài Khoản</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Họ và Tên</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nhập họ và tên"
                                value={fullName}
                                onChangeText={setFullName}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nhập email của bạn"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Số Điện Thoại</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nhập số điện thoại"
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Mật Khẩu</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nhập mật khẩu"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <TouchableOpacity onPress={handleRegister}>
                            <LinearGradient
                                colors={['#4CAF50', '#2E7D32']}
                                style={styles.submitButton}
                            >
                                <Text style={styles.submitButtonText}>Đăng Ký</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <View style={styles.socialLoginContainer}>
                            <Text style={styles.socialLoginText}>Hoặc đăng ký với</Text>
                            <View style={styles.socialButtons}>
                                <TouchableOpacity style={styles.socialButton}>
                                    <Text style={styles.socialButtonText}>Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.socialButton}>
                                    <Text style={styles.socialButtonText}>Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleText}>Đã có tài khoản? </Text>
                            <TouchableOpacity onPress={navigateToLogin}>
                                <Text style={styles.toggleButtonText}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 5,
    },
    tagline: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    inputContainer: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 6,
        color: '#555',
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    submitButton: {
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    socialLoginContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    socialLoginText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginHorizontal: 10,
        width: 120,
        alignItems: 'center',
    },
    socialButtonText: {
        color: '#555',
        fontWeight: '500',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    toggleText: {
        color: '#666',
        fontSize: 14,
    },
    toggleButtonText: {
        color: '#2E7D32',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default RegisterScreen;
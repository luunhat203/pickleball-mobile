// import DeviceInfo from 'react-native-device-info';
//
// const getDeviceInfo = () => {
//     return {
//         brand: DeviceInfo.getBrand(), // "Samsung", "Apple", "Xiaomi", "Google", v.v.
//         model: DeviceInfo.getModel(), // "iPhone 12", "Galaxy S21", v.v.
//         os: DeviceInfo.getSystemName(), // "Android" hoặc "iOS"
//         osVersion: DeviceInfo.getSystemVersion(), // "16.0", "14.2", v.v.
//     };
// };
//
// const device = getDeviceInfo();

// cau hinh ip theo loai dien thoai
const API_URL = "http://10.0.2.2:9999";
    // device.brand === "Apple" ? "http://localhost:9999" : "10.0.2.2";

// console.log(API_URL, "loai api ,  " , device , " loai dien thoai")

const headers = {
    'Content-Type': 'application/json',
};

const getAuthHeaders = (token) => ({
    ...headers,
    'Authorization': `Bearer ${token}`,
});

const apiConfig = {
    baseUrl: API_URL,
    headers,
    getAuthHeaders,
};

export default apiConfig;
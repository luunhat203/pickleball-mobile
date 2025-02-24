// import Toast from "react-native-simple-toast";
//
// export const showCustomToast = (message, type = "success") => {
//     let toastMessage;
//
//     switch (type) {
//         case "success":
//             toastMessage = `✔️ ${message}`; // Thêm icon dạng text
//             break;
//         case "error":
//             toastMessage = `❌ ${message}`;
//             break;
//         case "info":
//             toastMessage = `ℹ️ ${message}`;
//             break;
//         default:
//             toastMessage = message;
//     }
//
//     Toast.showWithGravity(toastMessage, Toast.LONG, Toast.TOP);
// };

import Toast from 'react-native-toast-message';

export const showCustomToast = (message, type = 'success') => {
    Toast.show({
        type: type, // 'success', 'error', 'info'
        text1: message,
        position: 'bottom',
        visibilityTime: 4000, // 4 giây
        autoHide: true,
        topOffset: 50,
    });
};


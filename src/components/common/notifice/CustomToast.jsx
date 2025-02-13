import Toast from "react-native-simple-toast";

export const showCustomToast = (message, type = "success") => {
    let toastMessage;

    switch (type) {
        case "success":
            toastMessage = `✔️ ${message}`; // Thêm icon dạng text
            break;
        case "error":
            toastMessage = `❌ ${message}`;
            break;
        case "info":
            toastMessage = `ℹ️ ${message}`;
            break;
        default:
            toastMessage = message;
    }

    Toast.showWithGravity(toastMessage, Toast.LONG, Toast.TOP);
};

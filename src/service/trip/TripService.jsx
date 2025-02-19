import ApiConfig from "../../api/ApiConfig";
import {checkToken} from "../../utils/auth";

const TripService = {
    async loadDiaDiem() {
        try{
            const token = await checkToken();
            if(token == null){
                throw new Error("Đã hết phiên đăng nhập, vui lòng đăng nhập lại.")
            }
            const res = await fetch(`${ApiConfig.baseUrl}/trip/location/all`, {
                method: "GET",
                headers: ApiConfig.getAuthHeaders(token)
            });
            const data = await res.json();
            if(!res.ok){
                throw new Error("Lỗi khi lấy dữ liệu!")
            }
            return data;
        }catch (e) {
            throw new Error(e);
        }
    },
    async loadSchedule(dataReq){
        try{
            const token = await checkToken();
            if(token == null){
                throw new Error("Đã hết phiên đăng nhập, vui lòng đăng nhập lại.")
            }
            const res = await fetch(`${ApiConfig.baseUrl}/trip/schedule`, {
                method: "POST",
                headers: ApiConfig.getAuthHeaders(token),
                body: JSON.stringify(dataReq)
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message)
            }
            return data;
        }catch (e) {
            throw new Error(e);
        }
    },
    async loadScheduleById(dataReq){
        try{
            const token = await checkToken();
            if (!token) {
                throw new Error("Đã hết phiên đăng nhập, vui lòng đăng nhập lại.");
            }

            const res = await fetch(`${ApiConfig.baseUrl}/trip/schedule/${dataReq}`, {
                method: "GET",
                headers: ApiConfig.getAuthHeaders(token)
            });

            const contentType = res.headers.get("content-type");

            if (!res.ok) {
                // Nếu API có lỗi, kiểm tra xem có JSON không trước khi parse
                const errorText = contentType && contentType.includes("application/json")
                    ? await res.json()
                    : await res.text();
                throw new Error(errorText.message || errorText);
            }

            // Kiểm tra phản hồi có JSON không trước khi parse
            if (contentType && contentType.includes("application/json")) {
                return await res.json();
            } else {
                throw new Error("Lỗi dữ liệu: Server không trả về JSON hợp lệ.");
            }

        } catch (e) {
            throw new Error(`Lỗi tải lịch trình: ${e.message}`);
        }
    },
    async themMoiBooking(dataReq) {
        try{
            const token = await checkToken();
            if (!token) {
                throw new Error("Đã hết phiên đăng nhập, vui lòng đăng nhập lại.");
            }
            const res = await fetch(`${ApiConfig.baseUrl}/trip/create`, {
                method: "POST",
                headers: ApiConfig.getAuthHeaders(token),
                body: JSON.stringify(dataReq)
            })
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.message);
            }
            return data;
        }catch (e) {
            throw new Error(e);
        }
    }

}

export default TripService;
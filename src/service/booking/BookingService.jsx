import ApiConfig from "../../api/ApiConfig";
import {checkToken} from "../../utils/auth";

const BookingService = {
    async getByUser(dataReq) {
        try{
            console.log(dataReq)
            const token = await checkToken();
            if(token == null){
                throw new Error("Đã hết phiên đăng nhập, vui lòng đăng nhập lại.")
            }
            const res = await fetch(`${ApiConfig.baseUrl}/booking/user/${dataReq}`, {
                method: "GET",
                headers: ApiConfig.getAuthHeaders(token)
            });
            const data = await res.json();
            console.log(data)
            if(!res.ok){
                throw new Error("Lỗi khi lấy dữ liệu!!")
            }
            return data;
        }catch (e) {
            throw new Error(e);
        }
    }
}

export default BookingService;
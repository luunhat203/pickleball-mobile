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
                throw new Error("Lỗi khi lấy dữ liệu!")
            }
            return data;
        }catch (e) {
            throw new Error(e);
        }
    }
}

export default TripService;
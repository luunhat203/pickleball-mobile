const AuthService = {
  async checkToken(){
    try{
        const token = localStorage.getItem("token");
        if(!token){
          return false;
        }
        return true;
    }catch(e){
      throw new Error(e)
    }
  }
}

export default AuthService;

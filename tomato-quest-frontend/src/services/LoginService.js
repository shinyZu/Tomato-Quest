import axios from "../axios";

class LoginService {
    login = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios
            .post("login/player/log", data)
            .then((res) => {
                return resolve(res);
            })
            .catch((err) => {
                return resolve(err);
            });
        });
        return await promise;
    }
   
    logout = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios
            .delete("login/player/logout", {
                params : params,
            })
            .then((res) => {
                return resolve(res);
            })
            .catch((err) => {
                return resolve(err);
            });
        });
        return await promise;
    }
}

export default new LoginService();
import axios from "../axios";

class PlayerService {
    createPlayer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios
            .post("player/save", data)
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

export default new PlayerService();
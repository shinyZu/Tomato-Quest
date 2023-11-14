import axios from "../axios";

class ScoreService {
    saveScore = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios
            .post("score/save", data)
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

export default new ScoreService();
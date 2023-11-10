import axios from "../axios";

class GameService {
    generateRandomQuestion = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios
            .get("https://marcconrad.com/uob/tomato/api.php?out=json&base64=no", data)
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

export default new GameService();
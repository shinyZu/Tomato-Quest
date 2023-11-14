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

    saveScore = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios
            .post("player/score/save", data)
            .then((res) => {
                return resolve(res);
            })
            .catch((err) => {
                return resolve(err);
            });
        });
        return await promise;
    }

    getHighestScores = async () => {
        const promise = new Promise((resolve, reject) => {
            axios
            .get("player/score/getAll")
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
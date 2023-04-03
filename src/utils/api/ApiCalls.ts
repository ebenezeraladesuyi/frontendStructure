import axios from "./api";

export const fetchDictionary = async () => {
    await axios 
        .get("/define")
        .then((res) => res.data)
        .catch((err) => {
            return err
        })
}
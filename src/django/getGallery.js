import axios from "axios";
import url from "./URL";

async function getGallery() {
    const response = await axios
        .get(`${url}/gallery`, {})
        .catch(err => console.log(err))

    if (!response) {
        console.log('no')
        return null;
    }
    console.log(response.data)
    return response.data;
}

export default getGallery
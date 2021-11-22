import axios from "axios";
import url from "./URL";

async function getImage(filename) {
    const response = await axios
        .get(`${url}/file/downloadimage/${filename}`)
        .catch(err => console.log(err))

    console.log(response.data)
    if (!response) {
        console.log('no')
        return null;
    }
    return response.data
}

export default getImage
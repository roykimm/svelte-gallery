import axios from "axios";
import url from "./URL";


async function submitGallery(formData) {

    const response = await axios
        .post(`${url}/gallery/`, formData)
        .catch(err => console.log(err))

    if (!response) {
        console.log('no')
        return null;
    }
    console.log(response.data)
    return response.data;

}

export default submitGallery;
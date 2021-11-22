import axios from "axios";
import url from "./URL";


async function deleteGallery(id) {

    const response = await axios
        .delete(`${url}/gallery/${id}`)
        .catch(err => console.log(err))

    if (!response) {
        console.log('no')
        return null;
    }
    return response.data;

}

export default deleteGallery;
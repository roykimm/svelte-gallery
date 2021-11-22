import axios from "axios";
import url from "./URL";

async function getTube(tubeurl) {
    const response = await axios
        .post(`${url}/file/tube/`, { "url": tubeurl })
        .catch(err => console.log(err))

    console.log(response.data)
    if (!response) {
        console.log('no')
        return null;
    }
    return response.data
}

export default getTube

// async function getGallery() {
//     const response = await axios
//         .get(`${url}/gallery`, {})
//         .catch(err => console.log(err))

//     if (!response) {
//         console.log('no')
//         return null;
//     }
//     console.log(response.data)
//     return response.data;
// }

// export default getGallery
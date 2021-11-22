import { writable } from "svelte/store";
import getGallery from "../django/getGallery";

const store = writable([], () => {
    setGallerys();

    return () => { }
})

async function setGallerys() {
    let gallerys = await getGallery();

    if (gallerys) {
        store.set(gallerys);
    }
}

export default store;
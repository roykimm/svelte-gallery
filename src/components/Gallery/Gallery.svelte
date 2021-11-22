<script>
    import url from "../../django/URL";
    import deleteGallery from "../../django/deleteGallery";
    import getGallery from "../../django/getGallery";
    import store from "../../stores/gallerys";
    import { navigate } from "svelte-routing";
    export let gallery;

    const { id, image, title, user, category, created_at, description } =
        gallery;

    $: downUrl = makeDownUrl(image);

    function makeDownUrl(image) {
        if (!image) return false;
        let sliceFromIndex = image.lastIndexOf("/") + 1;
        let fileName = image.slice(sliceFromIndex);

        return url + "/file/downloadimage/" + fileName;
    }

    async function delHandler() {
        if (window.confirm("삭제하시겠습니까?")) {
            const response = await deleteGallery(id);

            if (response == "") {
                alert("삭제되었습니다.");
                let gallerys = await getGallery();

                if (gallerys) {
                    store.set(gallerys);
                }
            } else {
                alert("오류가 발생하였습니다.");
            }
        }
    }
</script>

<div
    class="block w-full rounded-md bg-gray-100 overflow-hidden border-2 border-solid border-gray-200"
>
    <div class="p-5">
        <img
            class="w-full pointer-events-none group-hover:opacity-75 text-center"
            src={image}
            alt=""
        />
        <p class="text-lg">{title}</p>
        <a
            download
            target="_blank"
            class="btn btn-xs btn-success"
            href={downUrl}>down</a
        >
        <button on:click={delHandler} class="btn btn-xs btn-del">del</button>
    </div>
</div>

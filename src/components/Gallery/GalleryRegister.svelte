<script>
    //function setImage() {}
    // on:change={(e) => setImage(e.target.files[0])}

    import submitGallery from "../../django/registerGallery";
    import { navigate } from "svelte-routing";
    let title;
    let image;

    async function handleSubmit() {
        if (!title || !image) {
            alert("title, image를 입력하여 주세요.");
        }
        let formField = new FormData();
        formField.append("title", title);
        formField.append("image", image);

        console.log(formField);
        let response = await submitGallery(formField);

        console.log(response);
        if (response) {
            alert("사진업로드 되었습니다.");
            navigate("/");
        }
    }

    function setImage(uploadFile) {
        image = uploadFile;
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div
        class="w-auto mx-10 my-10 border-t-2 border-b-2 border-solid border-black pt-5 pb-5"
    >
        <div class="text-2xl mb-3">사진 입력 폼</div>
        <p class="text-md mb-5 text-gray-500">사진을 등록하여 주세요.</p>
        <label
            for="image"
            class="ml-px pl-4 block text-md font-medium text-gray-700"
            >이미지</label
        >
        <input
            type="file"
            class=""
            name="image"
            on:change={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <label
            for="title"
            class="ml-px pl-4 block text-md font-medium text-gray-700"
            >제목</label
        >
        <input
            type="text"
            class="w-60 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md border-gray-300 rounded-md"
            name="title"
            bind:value={title}
            placeholder="제목을 입력해 주세요."
        />
        <button type="submit" class="btn btn-primary btn-xs">
            업로드 하기
        </button>
    </div>
</form>

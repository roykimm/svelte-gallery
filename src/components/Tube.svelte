<script>
    import getTube from "../django/tube";
    async function downHandler() {
        console.log("다운로드 시작!");

        let url = "https://www.youtube.com/watch?v=tprkGpt58FA";
        let response = await getTube(url);

        console.log(response);
    }
</script>

<div class="p-10">
    <h1 class="text-center">다운로드 받기</h1>
    <input
        class="input w-1/2 mb-5 border-2 border-gray-800 mt-10"
        type="text"
        placeholder="youtube 링크를 입력해주세요."
    />
    <p />
    <button class="btn btn-sm" on:click={downHandler}>다운로드</button>
</div>

<script>
    import { onMount } from "svelte";
    import gallerys from "../../stores/gallerys";
    import Gallery from "./Gallery.svelte";
    import Loading from "../Loading.svelte";
    import { navigate } from "svelte-routing";
    import Modal from "./Modal.svelte";
    let showModal = false;

    let tr = $gallerys;

    function moveRegisterPage() {
        navigate("/register");
    }

    const toggleModal = () => {
        showModal = !showModal;
    };

</script>

<Modal message='I am a prop value' {showModal} on:click={toggleModal}/>
{#if $gallerys.length === 0}
    <Loading />
{:else}
    <div>
        <div class="flex mt-5 mr-5">
            <button
                class="btn btn-sm btn-success ml-auto"
                on:click={moveRegisterPage}>
                <i class="fas fa-plus pr-2"></i>
                사진 등록하기</button
            >
        </div>
        <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-10"
        >
            {#each $gallerys as gallery (gallery.id)}
                <Gallery {gallery} />
            {/each}
        </div>
    </div>
{/if}

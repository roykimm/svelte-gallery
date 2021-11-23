<script>
    export let image = '';
    export let message = "테스트 중입니다.";
    export let showModal = true;
    export let isPromo = true;
</script>
{#if showModal}
    <div class="backdrop" class:promo={isPromo}>
        <div class="custom-modal">
            <button on:click class="btn btn-sm text-gray-300">
                <i class="fas fa-times"></i>
            </button>
            <p>{message}</p>
            <img src="" alt="" />
        </div>
    </div>
{/if}

<style>
.backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
}
.custom-modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
}
.promo .custom-modal {
    background: white;
    color: black;
}
</style>
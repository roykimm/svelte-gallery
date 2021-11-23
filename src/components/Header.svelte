<script>
    import { items } from "../stores/stores";
    import { fly } from "svelte/transition";
    let logo = "bellalogo.png";
</script>

<div
    class="flex justify-between align-center px-5 py-5 text-gray-500 font-bold text-xl bg-indigo-50"
>
    <div class="flex">
        <img
            class="w-20 mr-5"
            in:fly={{ delay: 1000, x: 100 }}
            src={logo}
            alt="Bella's Gallery"
        />
        <div>
            <p class="inline text-lg">Bella's Gallery</p>
            <p class="text-sm">사진을 추가해보세요!</p>
        </div>
    </div>
</div>

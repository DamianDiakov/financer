<template lang="">
    <ul class="p-5">
        <li class="space-x-2 space-y-2" v-for="t in data" :key="t.id">
            <input
                type="text"
                class="blockborder focus:shadow-outline appearance-none rounded border-gray-300 bg-white p-1 text-base placeholder-gray-400 shadow focus:border-black focus:shadow-md focus:outline-none"
                :value="t.amount"
            />
            <input
                type="text"
                class="blockborder focus:shadow-outline appearance-none rounded border-gray-300 bg-white p-1 text-base placeholder-gray-400 shadow focus:border-black focus:shadow-md focus:outline-none"
                :value="t.description"
            />
            <input
                type="text"
                class="blockborder focus:shadow-outline appearance-none rounded border-gray-300 bg-white p-1 text-base placeholder-gray-400 shadow focus:border-black focus:shadow-md focus:outline-none"
                :value="t.date"
            />
        </li>
    </ul>

    <div
        class="p-5 font-bold text-lg flex place-content-center self-center"
        v-if="!data"
    >
        Няма данни
    </div>
</template>
<script setup>
defineProps({
    data: null,
});
</script>

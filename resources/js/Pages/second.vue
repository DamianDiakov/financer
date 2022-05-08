<template lang="">
    <div class="p-5">
        {{ page }}
    </div>
    <div class="p-5 flex gap-6 w-full">
        <div class="w-48">
            <LitepieDatepicker
                @click="counter++"
                i18n="bg"
                placeholder="Дата"
                as-single
                :formatter="formatter"
                v-model="dateValue"
            ></LitepieDatepicker>
        </div>
        <Link
            href="second/date"
            as="button"
            type="button"
            :data="{ date: dateValue }"
            class="focus:shadow-outline rounded-full bg-blue-500 w-32 px-3 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
            go to
        </Link>
    </div>

    <ul>
        <li class="space-x-2 space-y-2" v-for="t in data" :key="t.id">
            <input
                type="text"
                class="blockborder focus:shadow-outline appearance-none rounded border-gray-300 bg-white p-1 text-base placeholder-gray-400 shadow focus:border-black focus:shadow-md focus:outline-none"
                placeholder="John"
                :value="t.amount"
            />
            <input
                type="text"
                class="blockborder focus:shadow-outline appearance-none rounded border-gray-300 bg-white p-1 text-base placeholder-gray-400 shadow focus:border-black focus:shadow-md focus:outline-none"
                placeholder="John"
                :value="t.description"
            />
        </li>
    </ul>
</template>
<script setup>
import { ref, computed } from "vue";
const dateValue = ref("");
const formatter = ref({
    date: "DD MMM YYYY",
    month: "MMM",
});

defineProps({
    page: String,
    data: Object,
});
</script>

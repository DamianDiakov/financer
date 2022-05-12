<template>
    <div class="p-5 flex gap-6 w-full">
        <div class="w-48">
            <LitepieDatepicker
                i18n="bg"
                placeholder="Дата"
                as-single
                :formatter="formatter"
                v-model="dateValue"
            ></LitepieDatepicker>
        </div>
        <Link
            :disabled="dateValue === ''"
            :class="
                dateValue === ''
                    ? 'bg-gray-400'
                    : 'bg-blue-400 hover:bg-blue-700'
            "
            as="button"
            type="button"
            :href="route('third', dateValue)"
            class="flex justify-center items-center focus:shadow-outline rounded-full w-32 px-3 py-1 font-bold text-white focus:outline-none"
        >
            <div>go to</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
            </svg>
        </Link>
    </div>
</template>

<script setup>
import { ref } from "vue";
import route from "ziggy";

const dateValue = ref("");
const formatter = ref({
    date: "DD MMM YYYY",
    month: "MMM",
});

defineProps({
    data: Object,
});
</script>

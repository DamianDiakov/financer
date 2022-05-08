<template lang="">
    <div>
        <datepicker class="p-5" :inline="true" :value="now">
            <template v-slot:belowDate>
                <span></span>
            </template>
        </datepicker>
    </div>
    <div class="p-5">
        {{ page }}
    </div>
</template>
<script setup>
import Datepicker from "vuejs3-datepicker";

defineProps({
    page: String,
    now: String,
});
</script>

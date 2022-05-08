<template lang="">
    <div class="p-5">
        {{ page }}
    </div>
</template>
<script setup>
defineProps({
    page: String,
});
</script>

<template>
    <Link href="/first" class="" :class="{ 'font-bold': active }"
        ><slot />
    </Link>
</template>

<script setup>
defineProps({
    active: Boolean,
});
</script>

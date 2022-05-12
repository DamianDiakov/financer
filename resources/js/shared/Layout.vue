<template>
    <section class="h-full min-h-screen flex">
        <section class="bg-blue-300 w-64">
            <Nav></Nav>
        </section>
        <div class="flex-1">
            <date-picker v-if="$page.component === 'third'"></date-picker>
            <slot />
        </div>
    </section>
</template>

<script setup>
import datePicker from "../shared/datePicker";
import Nav from "../shared/Nav";
</script>

<template>
    <section class="h-screen min-h-screen flex">
        <section class="bg-blue-300 w-64">
            <Nav></Nav>
        </section>
        <div class="flex-1">
            <slot />
        </div>
    </section>
</template>

<script setup>
import Nav from "../shared/Nav";
</script>

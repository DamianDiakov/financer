<template>
    <nav class="p-5 mt-10">
        <ul class="space-y-2">
            <li class="text-lg">
                <NavLink href="/first" :active="$page.component === 'first'"
                    >first</NavLink
                >
            </li>
            <li class="text-lg">
                <NavLink href="/second" :active="$page.component === 'second'"
                    >second</NavLink
                >
            </li>
            <li class="text-lg">
                <NavLink href="/third" :active="$page.component === 'third'"
                    >third</NavLink
                >
            </li>
        </ul>
    </nav>
</template>

<script setup>
import NavLink from "../shared/NavLink.vue";
</script>

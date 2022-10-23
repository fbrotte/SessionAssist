<template>
    <div>
        <li>
            {{ i.name }}
            <div>{{ i.rep }} / {{ i.serie }} / {{ i.repo }}</div>
        </li>
        <hr>
    </div>
</template>

<script setup>
    defineProps(['i'])
</script>

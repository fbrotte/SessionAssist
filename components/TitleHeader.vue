<template>
    <div class="title-header">
        <h1><slot/></h1>
        <p v-if="paginate">{{ paginate }} / 3</p>
    </div>
</template>

<script setup>
    defineProps(['paginate'])
</script>

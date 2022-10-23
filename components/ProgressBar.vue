<template>
    <div class="progress-bar">
        {{ props.progress }}%
        <div class="bar">
            <div :style="size" class="progress"></div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['progress'])

    let size = ref(`width: ${props.progress}%`)
</script>


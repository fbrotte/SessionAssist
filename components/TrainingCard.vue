<template>
    <nuxtLink :to="to" class="card">
        <div>
            <h2 class="title-card"><slot/></h2>
            <p>{{ info }}</p>
        </div>

        <img src="/img/run.png" alt="">

    </nuxtLink>
</template>

<script setup>
    const props = defineProps(['info', 'slug'])

    let to = `training/${props.slug}`
</script>

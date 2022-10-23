<template>
    <div class="container container-full">
      <header>
        <TitleHeader>Choix de l'entrainement</TitleHeader>
      </header>

      <main>
        <TrainingCard v-for="i in storeTraining.data" :info="i.info" :slug="i.slug">{{ i.title }}</TrainingCard>
        <button class="btn" @click="storeTraining.add">+</button>
      </main>

      <footer>
        <NuxtLink to="/" class="btn btn-back"></NuxtLink>
      </footer>
    </div>
</template>
  
<script setup>
  const storeTraining = useTrainings()
</script>
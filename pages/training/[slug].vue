<template>
    <div class="container container-full">

      <header>
        <TitleHeader>{{ training.title }}</TitleHeader>
      </header>


      <main v-if="start === false">
        <ul>
          <ExerciceItem v-for="i in training.exercices" :i="i" :key="i.id"></ExerciceItem>
        </ul>
        <button class="btn btn-important" @click="starting">Start</button>
      </main>


      <main v-else>
        <!-- <ExerciceItem :i="training.exercices.pop()"></ExerciceItem> -->

        <div class="counter">
          <div v-if="!repo">
            {{ nbSerie }} /4
            <button class="btn btn-important" @click="endOfSerie">Fin de serie</button>
          </div>

          <div v-if="repo">
            {{ timer }} sec
            <!-- <div>Peformance <input type="text"> kg</div> -->

          </div>
        </div>

        <ProgressBar progress="20"></ProgressBar>

      </main>

      
      <footer>
        <nuxt-link to="/training" class="link">Retours</nuxt-link>
      </footer>
    </div>
</template>
  
<script setup>
  const route = useRoute()
  const storeTraining = useTrainings()

  let training = ref(storeTraining.get(route.params.slug))

  let start = ref(false)

  function starting(){
    start.value = true
  }



  // Serie training
  
  let nbSerie = ref(1)
  let repo = ref(false)
  let timer = ref(5)

  function endOfSerie(){
    nbSerie.value++
    repo.value = true

    let timeId = setInterval(() => {
      timer.value -= 1
      if(timer.value === 0)
      {
        clearInterval(timeId)
        repo.value = false
        timer.value = 5
      }
    }, 1000)
  }

</script>
  
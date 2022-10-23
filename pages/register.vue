<template>
  <div class="container container-center">
    <TitleHeader :paginate="page">Creer un compte</TitleHeader>
    <form>
      <div v-if="page === 1">
        <label>Prenom</label>
        <input type="text" v-model="formRegister.firstname">
  
        <label>Nom</label>
        <input type="text" v-model="formRegister.lastname">
  
        <label>Telephone</label>
        <input type="text" v-model="formRegister.phone">
      </div>

      <div v-if="page === 2">
        <label>Mail</label>
        <input type="text" v-model="formRegister.mail">
  
        <label>Mot de passe</label>
        <input type="text" v-model="formRegister.password">
  
        <label>Confirmation</label>
        <input type="text">
      </div>

      <div v-if="page === 3">

      </div>
    </form>

    <div>
      <button class="btn btn-important" @click="page--" v-if="page !== 1">Precedent</button>
      <button class="btn btn-important" @click="page++" v-if="page !== 3">Suivant</button>
      <button class="btn btn-important" @click="login" v-if="page === 3">Creer mon compte</button>
    </div>

    <NuxtLink to="/login" class="link">Retours</NuxtLink>
  </div>
</template>

<script setup>
  const router = useRouter();
  let page = ref(1)
  let formRegister = {};

  function login(){
    router.push('/')
  }
</script>


<template>
    <div class="container container-full">
      <header>
        <TitleHeader>Florian</TitleHeader>
        <p>Pret pour ta seance ?</p>
    
        <div class="btn-group">
          <NuxtLink to="/training/create" class="btn">+</NuxtLink>
          <NuxtLink to="/training/start" class="btn btn-important">Start</NuxtLink>
          <NuxtLink to="/training" class="btn btn-more"></NuxtLink>
        </div>
      </header>
  
      <main>
        <ul>
          <li>Voir mes stats</li>
          <li>Listes des exercices</li>
          <li>Paramettre</li>
        </ul>
      </main>
  
      <NuxtLink to="/login" class="link">Deconnexion</NuxtLink>
    </div>
</template>
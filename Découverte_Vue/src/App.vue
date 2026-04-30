<template>
  <main>
 
    <router-link to="/home"> Accueil </router-link>
    <router-link to="/villes"> Accéder à la liste des villes</router-link>
  </main>
  <router-view/>
</template>

<script setup>

</script>

<style scoped>
main {
  padding: 30px;
  font-family: Arial, sans-serif;
}

button {
  padding: 10px 16px;
  cursor: pointer;
}
</style>
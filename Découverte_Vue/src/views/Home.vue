<template>
       <h1>Application météo des villes</h1>

    <p>
      Bienvenue sur cette application Vue.js. Elle permettra d'afficher les
      relevés météo de plusieurs villes sous forme de liste et sur une carte.
    </p>

    <button @click="onListClick">
      Accéder à la liste des villes
    </button>

</template>
<script setup>
function onListClick() {
  alert("Vous avez cliqué sur la liste des villes")
}
</script>
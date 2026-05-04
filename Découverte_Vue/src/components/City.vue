<template>
    <div>
        <h2>Ville : {{ name }}</h2>
        <p> Météo : {{ weather }}</p>
        <p>Température : {{ temperature }} C</p>
        <p>Dernière mise à jour : {{ formattedDate }}</p>
    </div>

</template>
<script setup >
import { computed } from 'vue' // crée une valeur calculée automatiquement à partir d'autre données
import { format } from 'timeago.js'
const props = defineProps 
    ({
       name: String,
       weather: String,
       temperature: Number,
       updatedAt: Date
    })

const formattedDate = computed(() => {
  return format(props.updatedAt)
})
// const formatedDate = computed(() => {
//     if (!props.updatedAt) {
//     return "Date inconnue"
//   }

//   return new Date(props.updatedAt)
</script>

<template>
    <div>
        <h2>Ville : {{ name }}</h2>
        <p> Météo : {{ weather }}</p>
        <p>Température : {{ temperature }} C</p>
        <p>Dernière mise à jour : {{ formatedDate }}</p>
    </div>

</template>
<script setup >
import { computed } from 'vue' // crée une valeur calculée automatiquement à partir d'autre données
const props = defineProps 
    ({
       name: String,
       weather: String,
       temperature: Number,
       updatedAt: Date
    })
const formatedDate = computed(() => {
    if (!props.updatedAt) {
    return "Date inconnue"
  }

  return new Date(props.updatedAt).toLocaleString()
})
</script>

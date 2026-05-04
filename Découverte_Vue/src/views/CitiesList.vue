<template>
    <div>
        <h1> {{ titre }}</h1> 

        <City
            v-for="city in cities"
            :key="city.id"
            :name="city.name"
            :weather="city.weather"
            :temperature="city.temperature"
            :updatedAt="city.updatedAt"
        />

    </div>
</template>


<script setup>
import { ref } from 'vue'
import City from "@/components/City.vue";

const titre = ref("Météo - Liste des villes")

const cities = [
    {
      id: 1,
      name: 'Ville 1',
      weather: 'Ensoleillé',
      temperature: 22.0,
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Ville 2',
      weather: 'Peu nuageux',
      temperature: 19.5,
      updatedAt: new Date()
    }
]

</script>
<style>
    
</style>
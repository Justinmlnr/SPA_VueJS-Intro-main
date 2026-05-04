<template>
    <div>
        <h2>Ville : {{ city.name }}</h2>
        <p> Météo : {{ city.weather }}</p>
        <p>Température : {{ city.temperature }} C</p>
        <p>Dernière mise à jour : {{ formatedDate }}</p>
    </div>

</template>
<script setup >
const city = 
    {
       name: "Grenoble",
       weather: "Pluie forte",
       temperature: 12.5,
       updatedAt: new Date()
    }
const formatedDate = city.updatedAt.toLocaleString();
</script>

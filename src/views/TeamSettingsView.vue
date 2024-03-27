<script setup>
import { onMounted, ref } from 'vue';
import { fetchMyTeam } from '@/api/teams';

const teamData = ref([]);

onMounted(async () => {
    const rawData = await fetchMyTeam("edbdadfa-82ee-4757-a4b0-ab6e77dbe958");
    console.log(rawData);
    teamData.value = JSON.parse(rawData);
    teamData.value.members = teamData.value.members.map(member => JSON.parse(member));
    console.log(teamData.value);
})
</script>

<template>
    <div v-if="teamData">
        <label for="NomEquipe">Nom de l'équipe :</label>
        <span>{{ teamData[0]?.name }}</span>
        <div v-for="member in teamData[0]?.members" :key="member.id">
            <label for="NomMembre">Nom du membre :</label>
            <span>{{ member.name }}</span>
            <label for="EmailMembre">Email du membre :</label>
            <span>{{ member.email }}</span>
        </div>
    </div>
    <div v-else>
        <span>Chargement...</span>
    </div>
</template>
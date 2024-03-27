<script setup>
import { onMounted, ref } from 'vue';
import { fetchMyTeam,updateTeamMembers } from '@/api/teams';
import { PlusCircleIcon } from '@heroicons/vue/24/solid';

const teamData = ref([]);
const members = ref([]);
const newMember = ref('');

onMounted(async () => {
     teamData.value = await fetchMyTeam("edbdadfa-82ee-4757-a4b0-ab6e77dbe958");
     members.value  = teamData.value[0].members;
     console.log(teamData.value);
})

const addMember = () => {
    members.value.push(newMember.value);
    updateTeamMembers(teamData.value[0].id,members.value);
    newMember.value = '';
}

</script>

  

<template>
    <div v-if="teamData">
        <label for="NomEquipe">Nom de l'équipe : </label>
        <span>{{ teamData[0]?.name }}</span>
        <div v-for="member in members" :key="member" >
            <label for="NomMembre">Nom du membre : </label>
            <span>{{ member }}</span>
        </div>
        <div>
            <label for="AjouterMembre">Ajouter un membre : </label>
            <input type="text" v-model="newMember" />
            <button @click="addMember" >
                <PlusCircleIcon class="h-5 w-5" />
            </button>
        </div>
    </div>
    <div v-else>
        <span>Chargement...</span>
    </div>
</template>
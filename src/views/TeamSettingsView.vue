<script setup>
import { onMounted, ref } from 'vue';
import { fetchMyTeam,updateTeamMembers,updateTeamName } from '@/api/teams';
import { PlusCircleIcon , MinusCircleIcon } from '@heroicons/vue/24/solid';
import HistoryComponent from '@/components/HistoryComponent.vue';

const teamData = ref([]);
const members = ref([]);
const newMember = ref('');
const editedTeamName = ref('');

onMounted(async () => {
     teamData.value = await fetchMyTeam("edbdadfa-82ee-4757-a4b0-ab6e77dbe958"); 
     members.value  = teamData.value.members || [];
     editedTeamName.value = teamData.value.name || '';
})


const submitTeamName = () => {
    updateTeamName(teamData.value.id, editedTeamName.value);
};


const addMember = () => {
    if (!newMember.value) return;
    if(members.value.length+1>5){
        alert("Vous avez atteint le nombre maximum de membres");
        newMember.value = '';
        return;
    }
    members.value.push(newMember.value);
    updateTeamMembers(teamData.value.id,members.value);
    newMember.value = '';
}
const removeMember = (index) => {
    members.value.splice(index,1)
    updateTeamMembers(teamData.value.id,members.value);
}
</script>

<template>
    <div v-if="teamData">
        <label for="NomEquipe">Nom de l'équipe : </label>
        <input type="text" v-model="editedTeamName" class="border border-black"/>
        <button @click="submitTeamName" >Enregistrer</button>
        <div v-for="(member,index) in members" :key="index" >
            <label for="NomMembre">Nom du membre : </label>
            <span>{{ member }}</span>
            <div v-if="index!=0">
                <button @click="removeMember(index)"><MinusCircleIcon class="h-5 w-5"/></button>
            </div>
        </div>
        <div>
            <label for="AjouterMembre">Ajouter un membre : </label>
            <input type="text" v-model="newMember" class="border border-black"/>
            <button @click="addMember" >
                <PlusCircleIcon class="h-5 w-5" />
            </button>
        </div>
        <div>
            <HistoryComponent :teamId="teamData.id"/>
        </div>
    </div>
    <div v-else>
        <span>Chargement...</span>
    </div>
</template>
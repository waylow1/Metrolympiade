<script setup>
import { onMounted, ref } from 'vue';
import { fetchMyTeam,updateTeamMembers,updateTeamName } from '@/api/teams';
import { PlusCircleIcon , BackspaceIcon } from '@heroicons/vue/24/solid';
import HistoryComponent from '@/components/HistoryComponent.vue';

const teamData = ref([]);
const members = ref([]);
const newMember = ref('');
const editedTeamName = ref('');
const inputValue = ref('');

onMounted(async () => {
    teamData.value = await fetchMyTeam("cf14d7c5-e910-4aef-960c-df4b3aaa41e2");
    members.value = teamData.value.members || [];
    editedTeamName.value = teamData.value.name || '';
    inputValue.value = teamData.value.name;
})


const submitTeamName = () => {
    updateTeamName(teamData.value.id, inputValue.value);
};


const addMember = () => {
    if (!newMember.value) return;
    if (members.value.length + 1 > 5) {
        alert("Vous avez atteint le nombre maximum de membres");
        newMember.value = '';
        return;
    }
    members.value.push(newMember.value);
    updateTeamMembers(teamData.value.id, members.value);
    newMember.value = '';
}

const removeMember = (index) => {
    members.value.splice(index, 1)
    updateTeamMembers(teamData.value.id, members.value);
}

const onInput = (event) => {
    inputValue.value = event.target.value;
}
</script>

<template>
    <!--<div v-if="teamData">
        <label for="NomEquipe">Nom de l'équipe : </label>
        <input type="text" v-model="editedTeamName" class="border border-black" />
        <button @click="submitTeamName">Enregistrer</button>
        <div v-for="(member, index) in members" :key="index">
            <label for="NomMembre">Nom du membre : </label>
            <span>{{ member }}</span>
            <div v-if="index != 0">
                <button @click="removeMember(index)">
                    <MinusCircleIcon class="h-5 w-5" />
                </button>
            </div>
        </div>
        <div>
            <label for="AjouterMembre">Ajouter un membre : </label>
            <input type="text" v-model="newMember" class="border border-black" />
            <button @click="addMember">
                <PlusCircleIcon class="h-5 w-5" />
            </button>
        </div>
        <div>
            <HistoryComponent :teamId="teamData.id"/>
        </div>
    </div>
    <div v-else>
        <span>Chargement...</span>
    </div>-->
    <div class="max-w-sm p-6 rounded-lg shadow grid grid-cols-1 divide-y divide-neutral-600"
        style="background-color: #202127;">
        <div class="pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        </div>
        <div class="py-2">
            <input class="text-white py-2" @input="onInput" :value="inputValue" style="background-color: #202127;">
            <button @click="submitTeamName"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                style="background-color: #ff7b00;">
                Enregistrer
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
        <div class="pt-2">
            <h5 class="pb-2">Liste des membres</h5>
            <ul v-for="(member, index) in members" :key="index" class="list-disc pl-5">
                <li class="pb-1">
                    <div class="flex">
                        <span class="pr-2">{{ member }}</span>
                        <div v-if="index != 0">
                            <button @click="removeMember(index)">
                                <BackspaceIcon class="h-5 w-5 text-neutral-500" />
                            </button>
                        </div>
                        <div v-else>
                            <p class="text-neutral-500">(Chef d'équipe)</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div>
                <label class="py-2" for="AjouterMembre">Ajouter un membre : </label>
                <form class="flex items-center pt-2" v-on:submit.prevent="addMember">
                    <input type="text" v-model="newMember" style="background-color: #202127; border-color: #202127; border-bottom-color: #ffffff;" class="text-white border-2 border-b-gray-300 rounded-md"/>
                    <button type="submit">
                        <PlusCircleIcon class="h-5 w-5" style="color: #ff7b00;"/>
                    </button>
                </form>
            </div>
            <div>
                <HistoryComponent :teamId="teamData.id"/>
            </div>
        </div>
    </div>
</template>
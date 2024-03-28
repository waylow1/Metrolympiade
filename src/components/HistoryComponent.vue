<script setup>
import {fetchMatchsFromATeam} from '@/api/points'
import {ref,watch } from 'vue';

const props = defineProps({
  teamId: String
});

const myMatchsData = ref([]);

const fetchData = async () =>{
    myMatchsData.value = await fetchMatchsFromATeam(props.teamId);
    console.log(myMatchsData.value);
    myMatchsData.value.forEach(match => {
        match.time = match.time.substring(0,5);
    });
}

watch(() => props.teamId, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
        if (newValue) {
            await fetchData();
        } else {// Remettre myMatchsData à une liste vide si teamId devient null ou undefined
            myMatchsData.value = [];
        }
    }
});

</script>
<template>
    <div v-if="myMatchsData">
        <h2>Historique de l'équipe</h2>
        <div v-for="(match,index) in myMatchsData" :key="index">
            <p>{{ match.time }} : {{ match.team1 }} - {{ match.score }}</p>
        </div>
    </div>
    <div v-else>
        <p>Chargement...</p>
    </div>
</template>
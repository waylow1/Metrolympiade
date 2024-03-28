<script setup>
import {fetchMatchsFromATeam} from '@/api/points'
import { onMounted, ref } from 'vue';

const props = defineProps({
  teamId: String
});

const myMatchsData = ref([]);

onMounted(async () => {
    console.log(props.teamId)
  myMatchsData.value = await fetchMatchsFromATeam(props.teamId);
  
});






</script>
<template>
    <div v-if="myMatchsData">
    </div>
    <div v-else>
        <p>Chargement...</p>
    </div>
</template>
<script setup>
import { onMounted,ref, computed } from 'vue';
import { fetchMatchsFromATeam } from '@/api/points'
import {fetchTeams, fetchMyTeam} from '@/api/teams'
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const myMatchsData = ref([]);

const myTeam = ref('')


onMounted(async () => {
    const {user} = storeToRefs(useUserStore())
    myTeam.value =  await(fetchMyTeam(user.value.id))
    fetchData()
})


const fetchData = async () => {
  myMatchsData.value = await fetchMatchsFromATeam(myTeam.value.id);
  const allTeam = await fetchTeams();
  myMatchsData.value.forEach(match => {
    match.time = match.time.substring(0, 5);
    match.team1 = Object.values(allTeam).find(team => team.id === match.team1)?.name || 'Équipe introuvable';
    match.team2 = Object.values(allTeam).find(team => team.id === match.team2)?.name || 'Équipe introuvable';
  });
};

const sortedMatches = computed(() => {
  return myMatchsData.value.slice().sort((a, b) => {
    const [aHour, aMinute] = a.time.split(':').map(Number);
    const [bHour, bMinute] = b.time.split(':').map(Number);
    
    if (aHour !== bHour) {
      return aHour - bHour;
    } else {
      return aMinute - bMinute;
    }
  });
});

</script>

<template>
  <div v-if="myMatchsData" class="bg-neutral-900 shadow-md rounded-lg my-6 p-6 md:p-8">
    <h2 class="text-xl font-bold py-4 px-6 text-white">Planning des matchs</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-white">
        <thead>
          <tr class="border-b border-neutral-600">
            <th class="py-2 px-6">Heure</th>
            <th class="py-2 px-6">Équipe 1</th>
            <th class="py-2 px-6">Équipe 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="match in sortedMatches" :key="match.id" class="border-b border-neutral-600">
            <td class="py-2 px-6">{{ match.time }}</td>
            <td class="py-2 px-6">{{ match.team1 }}</td>
            <td class="py-2 px-6">{{ match.team2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
        <p>Chargement...</p>
    </div>
</template>

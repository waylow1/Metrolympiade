<script setup>
import { ref, onMounted } from 'vue'
import { fetchMatchsFromATeam } from '@/api/points'
import { fetchTeams } from '@/api/teams'

const data = ref([])

onMounted(async () => {
  const allTeams = await fetchTeams()
  data.value = await computingData(allTeams)
})

const computingData = async (allTeams) => {
  let data = []
  for (const team of Object.values(allTeams)) {
    let matchs = await fetchMatchsFromATeam(team.id)
    let points = 0
    let evoCalculated = 'equ';
    matchs.forEach((match) => {
      if (match.team1_id === team.id && match.team1_points > match.team2_points) {
        match.points = 3
      } else if (match.team2_id === team.id && match.team2_points > match.team1_points) {
        match.points = 3
      } else if (match.team1_points === match.team2_points) {
        match.points = 1
      } else {
        match.points = 0
      }
      points += match.points
      if(team.previous_rank < points) {
        evoCalculated = 'inf'
      }
      if(team.previous_rank > points) {
        evoCalculated = 'sup'
      }
    })
    data.push({
      team: team.name,
      points: points,
      evo: evoCalculated
    })
  }
  data.sort((a, b) => b.points - a.points)
  return data
}

</script>
<template>
  <div class="w-full flex justify-center pb-2">
    <h1 class="text-2xl font-bold">Rankings</h1>
  </div>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Team</th>
            <th scope="col" class="px-6 py-3">Points</th>
            <th scope="col" class="px-6 py-3">Évolution</th>
          </tr>
      </thead>
      <tbody v-if="data!=null">
          <tr v-for="item in data" :key="item.team" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.team }}</th>
            <td class="px-6 py-4">{{ item.points }}</td>
            <td v-if="item.evo === 'sup'" class="px-6 py-4">
              <p class="rotate-180 text-center font-semibold" style="color: #00ff00;">
                v
              </p>
            </td>
            <td v-else-if="item.evo === 'inf'" class="px-6 py-4">
              <p class="text-center font-semibold" style="color: #ff0000;">
                v
              </p>
            </td>
            <td v-else class="px-6 py-4">
              <p class="text-center font-semibold">
                -
              </p>
            </td>
          </tr>
      </tbody>
      <div v-else>
          <p>Chargement...</p>
      </div>
      </table>
  </div>
</template>

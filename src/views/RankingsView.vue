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
    })
    data.push({
      team: team.name,
      points: points
    })
  }
  data.sort((a, b) => b.points - a.points)
  return data
}

</script>
<template>
    <div>
        <h1 class="text-2xl font-bold">Rankings</h1>
        <table class="table-auto">
        <thead>
            <tr>
            <th class="px-4 py-2">Team</th>
            <th class="px-4 py-2">Points</th>
            </tr>
        </thead>
        <div v-if="data!=null"> 
        <tbody>
            <tr v-for="item in data" :key="item.team">
            <td class="border px-4 py-2">{{ item.team }}</td>
            <td class="border px-4 py-2">{{ item.points }}</td>
            </tr>
        </tbody>
        </div>
        <div v-else>
            <p>Chargement...</p>
        </div>  
        </table>
    </div>
</template>

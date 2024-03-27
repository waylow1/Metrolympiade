<script setup>
import { onMounted,ref } from 'vue'
import { fetchMyTeam, fetchTeams } from '@/api/teams' 
import {insertMatch} from '@/api/matchs'


const teamlist = ref([])
const myTeam = ref([])



onMounted(async () => {
    teamlist.value = await (fetchTeams())
    myTeam.value = await (fetchMyTeam())
})


const submit = async  () => {
    const myTeamScore = document.getElementById('myTeamScore').value
    const opponentTeamScore = document.getElementById('opponentTeamScore').value
    const sport = document.getElementById('sport').value
    const opponentTeam = document.querySelectorAll('select')[1].value
    const time = document.querySelector('input[type="time"]').value
    const match = {
        myTeam,
        opponentTeam,
        time,
        sport,
        myTeamScore,
        opponentTeamScore
    }
    await insertMatch(match)

}


</script>

<template>
   <div class="flex flex-col items-center justify-center">
    <h1>Matchs</h1>
    <form class="flex flex-col ">
        <div class="space-y-6">
            <div>
                <select class="border-2 rounded-md w-full text-center">
                    <option v-for="team in myTeam" :key="team.id"> {{ team.name }}</option>
                </select>
            </div>
            <div>
                <select   class="border-2 rounded-md w-full text-center">
                    <option v-for="team in teamlist" :key="team.id">{{team.name}}</option>
                </select>
            </div>
            <div>
                <input id="sport"  class="border-2 rounded-md w-full text-center" type="text"/>
            </div>
            <div>
                <input type="time" class="border-2 rounded-md w-full text-center">
            </div>
        <div class="flex space-x-28">
            <div class="flex flex-col">
                <label for="myTeamScore">My team</label>
                <input id="myTeamScore"  class="border-2 rounded-md size-16 text-center" type="number">
            </div>
            <div class="flex flex-col">
                <label for="opponentTeamScore">Team 2</label>
                <input id="opponentTeamScore" class="border-2 rounded-md size-16 text-center" type="number">
            </div>
        </div>
        <button @click="submit" class="p-2 mt-4 bg-green-400 rounded-md">Create the Match</button>
      </div>
    </form>
</div>
</template>